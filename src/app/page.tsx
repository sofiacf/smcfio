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
                    I&apos;m a student studying cognitive/linguistic/computer science and mathematics with experience as
                    a soprano, bike messenger, and software developer.
                </p>
                <p>
                    My time is unusually free these days, so please contact me (sofia@smcf.io) if I can participate in some
                    project or activity.
                </p>
                <p>
                    This domain is mostly for email, but sometimes there is content!
                </p>
            </div>
        </div>
    )
}
