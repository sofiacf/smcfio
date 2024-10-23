import './globals.css'
import styles from "@/app/page.module.css";
import type {Metadata} from 'next'
import Link from "next/link";
import React from "react";


export const metadata: Metadata = {
    title: 'smcf.io',
    description: 'smcf.io'
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <head>
            <link rel="stylesheet"
                  href="https://cdn.jsdelivr.net/gh/dreampulse/computer-modern-web-font@master/fonts.css"/>
            <title>smcf</title>
        </head>
        <body>
        <h1 style={{fontWeight: "lighter"}}><Link href="/">smcf.io</Link></h1>
        <nav>
            <table style={{tableLayout: 'fixed', borderStyle: 'double none', textAlign: 'center'}}>
                <tbody>
                <tr>
                    <td><Link href={"/"}>home</Link></td>
                    <td><Link href={"/cv"}>cv</Link></td>
                </tr>
                </tbody>
            </table>
        </nav>
        <main className={styles.main}>
            {children}
        </main>
        </body>
        </html>
    )
}
