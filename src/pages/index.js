import React from 'react';
import styles from '@/styles/home.module.css';
import hero from '@../public/

export default function Home() {
    return (
        <>
            <hero heroImage='/public/hero.jpg' />
            <h1 className={styles.bigRedFont}>Home</h1>
            <p>
                This is the landing page for our Next.js app.
            </p>
            <p className={styles.blueFont} >
                This is the landing page for our Next.js app.
            </p>
            <hero heroImage='/hero.jpg' heright='600px'/>
        </>
    )
}