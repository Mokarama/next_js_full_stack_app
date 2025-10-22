"use client"
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from './darkMoodToggle.module.css'
import { useContext } from 'react';
import { ThemeContext } from '../../../context/ThemeContext';
const DarkMoodToggle = () => {
    const {mode,toggle} =useContext(ThemeContext);


    return (
        <>
         <div className={styles.container} onClick={toggle}>
            <div className={styles.icon}><FaMoon/></div>
            <div className={styles.icon}><FaSun/></div>
            <div className={styles.ball} style={mode === "light" ? {left: "2px"} : {right:"2px"}}/>
         </div>
        </>
    );
};

export default DarkMoodToggle;
