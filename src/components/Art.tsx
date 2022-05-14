import React, {useEffect, useState} from 'react'
import '../styles/Art.css'

const CELL_SIZE = 15

export const Art: React.FC<any> = () => {
    const [seconds, setSeconds] = useState(0)
    const [size, setSize] = useState<{ width: number, height: number }>()

    useEffect(() => {
        const interval = setInterval(() => setSeconds(previousValue => previousValue + 1), 200)
        return () => clearInterval(interval)
    }, [])
    useEffect(() => {
        setSize({
            width: Math.floor(window.innerWidth),
            height: Math.floor(window.innerHeight)
        })
        const resize = () => setSize({
            width: Math.floor(window.innerWidth),
            height: Math.floor(window.innerHeight)
        })
        window.addEventListener('resize', resize)
        return () => window.removeEventListener('resize', resize)
    }, [])

    const [cols, setCols] = useState<number>()
    const [rows, setRows] = useState<number>()
    const [numCells, setNumCells] = useState<number>()

    useEffect(() => {
        if (!size) return
        let cols = Math.floor(size.width / CELL_SIZE)
        setCols(cols)
        let rows = Math.floor(size.height / CELL_SIZE)
        setRows(rows)
        setNumCells(cols * rows)
    }, [size])

    const [gameState, setGameState] = useState<(number[] | null)[]>([])
    const [cells, setCells] = useState<any[]>(new Array(numCells))

    useEffect(() => setGameState(() => {
        if (!numCells || !rows || !cols) return []
        const initialCells: (number[] | null)[] = new Array(numCells)
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const xChance = 1 - (Math.abs(cols / 2 - x)) / cols
                const yChance = y / rows
                const alive = Math.random() * 3 + 4 * xChance + 2 * yChance > 6
                initialCells[gridToIndex(x, y, cols)] = (alive ? getRandomColor() : null)
            }
        }
        return initialCells
    }), [rows, cols, numCells])

    useEffect(() => setCells(gameState.map((state, index) => {
        return !state ? null : <Cell key={index} color={gameState[index]} index={index}/>
    })), [gameState])

    useEffect(function updateGameState() {
        if (!rows || !cols) return
        setGameState(gameState => {
            const newColors = new Array(gameState.length)
            const isAlive = (x: number, y: number): number => {
                if (x < 0 || x >= cols || y < 0 || y >= rows) return 0
                return gameState[gridToIndex(x, y, cols)] ? 1 : 0
            }
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    let centerIndex = gridToIndex(x, y, cols)
                    let numAlive = isAlive(x - 1, y - 1)
                        + isAlive(x, y - 1)
                        + isAlive(x + 1, y - 1)
                        + isAlive(x - 1, y)
                        + isAlive(x + 1, y)
                        + isAlive(x - 1, y + 1)
                        + isAlive(x, y + 1)
                        + isAlive(x + 1, y + 1)
                    if (numAlive === 2) newColors[centerIndex] = gameState[centerIndex]
                    else if (numAlive === 3) newColors[centerIndex] = getNeighborColor(gameState[centerIndex])
                    else newColors[centerIndex] = null
                }
            }
            return newColors
        })
    }, [cols, rows, seconds])
    return <div className="blob">{cells}</div>
}

const getRandomColor = () => [Math.random() * 255, Math.random() * 255, Math.random() * 255]
const getNeighborColor = (color: number[] | null) => (color ?? [1, 1, 1]).map(value => (value + (Math.random() * 255)) / 2)
const gridToIndex = (x: number, y: number, cols: number) => x + (y * cols)

const Cell: React.FC<{ index: number, color: number[] | null }> = props => {
    const size = {
        width: Math.floor(window.innerWidth),
        height: Math.floor(window.innerHeight)
    }
    const cols = Math.floor(size.width / CELL_SIZE)
    const indexToGrid = (index: number) => [index % cols, index / cols]
    const [left, top] = indexToGrid(props.index).map(index => `${CELL_SIZE * index + 1}px`)

    return props.color ? <div
            style={{
                left,
                top,
                background: `rgba(${props.color[0]}, ${props.color[1]}, ${props.color[2]}, .4)`,
                height: `${CELL_SIZE}px`,
                width: `${CELL_SIZE}px`,
                position: 'absolute'
            }}
        />
        : <div key={props.index.toString()}/>
}
