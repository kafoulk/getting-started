import React from 'react';
import Hero from '@/components/hero';
import styles from '@/styles/home.module.css';

export default function Home() {
    return (
        <>
            <Hero heroImage='/hero.jpg' />
            <h1 className={styles.bigRedFont}>Home Page</h1>
            <p className={styles.allText} >
                This is the landing page for our Next.js app.
            </p>
            <p className={styles.blueFont} >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum egestas, mauris ullamcorper varius bibendum, felis diam aliquam dui, vel aliquet tellus velit vitae lectus. Curabitur dolor elit, placerat venenatis tempus volutpat, elementum a dolor. Pellentesque vulputate libero et est fermentum fermentum. Aenean sit amet ante at ipsum dignissim faucibus. Proin sagittis arcu ornare suscipit cursus. Sed suscipit molestie consequat. Cras efficitur tellus sit amet nisi blandit, in bibendum sapien condimentum. Nam elementum vitae ex quis scelerisque. Sed bibendum vulputate ante, dictum vulputate lorem posuere at. Vivamus posuere sapien dolor, non dignissim ligula bibendum at. Maecenas porttitor, arcu at varius pulvinar, est arcu varius enim, ut fermentum tellus dolor sed odio. Ut molestie nunc sed bibendum fringilla. Donec at egestas neque. Nunc vitae interdum leo, quis aliquet justo. Nullam tellus nisl, pharetra vel sapien eu, suscipit dictum mi. Proin luctus mauris turpis, cursus luctus ante pellentesque sed.
            </p>
            
        </>
    )
}