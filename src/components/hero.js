import React from "react";
import styles from '@/styles/hero.module.css';

export default function hero(props) {
    console.log(props);
    return (
        <>
            <div className={styles.hero} style={{
                backgroundImage:`url(${props.heroImage})`,
                height:props.height}}></div>
            
        </>
    )
}