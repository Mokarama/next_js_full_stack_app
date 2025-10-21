"use client"

import React from 'react'
import styles from './page.module.css'
import Image from "next/image";

export default function Footer
() {
    // console.log("hello")
  return (
    <>
        <div className={styles.container}>
            <div>2025 Lamamia. All rights reserved.</div>
            <div className={styles.social}>
              
                 <Image  className={styles.icon} src="/facebook.png" width={20} height={20}  alt="facebook"/>
             
                 
               
                  {/* <Image className={styles.icon}  src="/github.png" width={20} height={20} alt="github"/> */}
                
                    {/* <Image  className={styles.icon} src="/instagram.png" width={20} height={20} alt="instagram"/> */}
                 

                  
                    <Image className={styles.icon} src="/linkedin.png"  width={20} height={20} alt="Lama Dev"/>
                   
            </div>
        </div>
    </>
  )
}
