import React, { useEffect, useState } from 'react'
import '../styles/Art.css'

const CELL_SIZE = 5
const Cell: React.FC<{ position: number[] }> = props => {
    const [left, top] = props.position.map((index: number) => `${ CELL_SIZE * index + 1 }px`)
    return <div className="cell" style={ { left, top } }/>
}
export const Art: React.FC<any> = () => {
    const [size, setSize] = useState({
        width: Math.floor(window.innerWidth),
        height: Math.floor(window.innerHeight * .55)
    })
    useEffect(() => {
        const resize = () => setSize({
            width: Math.floor(window.innerWidth),
            height: Math.floor(window.innerHeight * .55)
        })
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])
    const [cells, setCells] = useState([[<></>]])
    useEffect(() => {
        const cols = size.width / CELL_SIZE
        const rows = size.height / CELL_SIZE
        const blob = [[<></>]]
        for (let y = 0; y < rows; y++) {
            blob[y] = []
            for (let x = 0; x < cols; x++) {
                const xChance = 1 - (Math.abs(cols / 2 - x) + 20) / cols
                const yChance = y / rows
                const chance = Math.random() * 3 + 4 * xChance + 2 * yChance
                blob[y][x] = chance > 6 ? <Cell position={ [x, y] } key={ `${ x },${ y }` }/> : <></>
            }
        }
        setCells(blob)
    }, [size])
    return <div className="blob">{ cells }</div>
}
