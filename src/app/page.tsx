import styles from './page.module.css'
import React from "react";
import Art from "@/app/art";

export default function Home() {
    return (
        <div className={styles.home}>
            <Art/>
            <div>
                <p>Welcome to smcf.io, homepage of Sofia Chandler-Freed.</p>
                <p>
                    I am interested in brains and music (mostly on their own, but sometimes together), among other
                    things.
                    I help out with research at MIT, sing, and teach piano in Boston and Metro West!
                </p>
                <p>
                    To contact me, send a message to any string you like (e.g., sofia) at smcf.io.
                    I can also be reached at <a href={"mailto:pbrgirl@mit.edu"}>my MIT email</a>.
                </p>
                <p>
                    My daily recordings of Bartók&apos;s <i>Mikrokosmos</i> are on my YouTube channel, <a href={"https://www.youtube.com/@mifasof"}>@mifasof</a>.
                </p>
            </div>
        </div>
    )
}
