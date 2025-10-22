import React from 'react'
import styles from './page.module.css'
// import Button from './../../../component/Button/Button';
import Image from 'next/image'
import Book from '../../../../public/book.jpg'
import Book1 from '../../../../public/book1.jpg'
import Book2 from '../../../../public/book2.jpg'
import Book3 from '../../../../public/book3.jpg'
import Book4 from '../../../../public/book4.jpg'
import Book5 from '../../../../public/book5.jpg'

export default function Category({params}) {
  console.log(params,"paisi")
  return (
    <>
   
   <div className={styles.container}>
     <h1  className={styles.catTitle}>{params.category}</h1>
     {/* container-01 */}
      {/* Main container */}
    <div className={styles.item}>

     {/* Text container */}
      <div  className={styles.content}>
        <h1 className={styles.title}>The Art of Thinking Clearly</h1>
        <p className={styles.desc}> Discover how small mental biases shape our daily choices without us even noticing.
      This book explains over 90 cognitive errors that influence our thoughts and decisions.
      With real-life examples, it reveals how to recognize and avoid these mental traps.
      You’ll learn to question assumptions, think more logically, and make better judgments.
      A fascinating read for anyone curious about human psychology and decision-making.
      Every page offers insights that make you rethink how your mind actually works.</p>
        {/* <Button text="See More" url="#"/> bosaite hbe */}
      </div>

      {/* Image container */}
      <div  className={styles.imgContainer}>
        <Image height={400} width={600} className={styles.img} src={Book} alt=""/>
      </div>
    </div>

       {/* container-02 */}
    <div className={styles.item}>

     {/* Text container */}
      <div  className={styles.content}>
        <h1 className={styles.title}>Atomic Habits</h1>
        <p className={styles.desc}>Atomic Habits is a groundbreaking guide to building good habits and breaking bad ones.
      James Clear shows how small, consistent improvements compound into remarkable growth.
      You’ll learn to focus on systems rather than goals to achieve lasting change.
      The book explains how to design your environment to make success effortless.
      Filled with proven techniques, it’s both practical and deeply motivational.
      A must-read for anyone serious about personal growth, productivity, and discipline.</p>
        {/* <Button text="See More" url="#"/> bosaite hbe */}
      </div>

      {/* Image container */}
      <div  className={styles.imgContainer}>
        <Image height={400} width={600} className={styles.img} src={Book1} alt=""/>
      </div>
    </div>
       {/* container-03 */}
    <div className={styles.item}>

     {/* Text container */}
      <div  className={styles.content}>
        <h1 className={styles.title}>Deep Work</h1>
        <p className={styles.desc}>Deep Work is about mastering focus in an age of constant distraction.
      Cal Newport argues that the ability to concentrate deeply is a rare and valuable skill.
      Through stories and science, he explains how to train your brain for undisturbed work.
      You’ll discover methods to minimize shallow tasks and prioritize meaningful output.
      The book provides a clear framework for achieving peak performance and creativity.
      If you want to produce work that truly matters, Deep Work will change your mindset forever.</p>
        {/* <Button text="See More" url="#"/> bosaite hbe */}
      </div>

      {/* Image container */}
      <div  className={styles.imgContainer}>
        <Image height={400} width={600} className={styles.img} src={Book2} alt=""/>
      </div>
    </div>

     {/* container-04 */}
    <div className={styles.item}>

     {/* Text container */}
      <div  className={styles.content}>
        <h1 className={styles.title}>Deep Work</h1>
        <p className={styles.desc}>Deep Work is about mastering focus in an age of constant distraction.
      Cal Newport argues that the ability to concentrate deeply is a rare and valuable skill.
      Through stories and science, he explains how to train your brain for undisturbed work.
      You’ll discover methods to minimize shallow tasks and prioritize meaningful output.
      The book provides a clear framework for achieving peak performance and creativity.
      If you want to produce work that truly matters, Deep Work will change your mindset forever.</p>
        {/* <Button text="See More" url="#"/> bosaite hbe */}
      </div>

      {/* Image container */}
      <div  className={styles.imgContainer}>
        <Image height={400} width={600} className={styles.img} src={Book3} alt=""/>
      </div>
    </div>

     {/* container-05 */}
    <div className={styles.item}>

     {/* Text container */}
      <div  className={styles.content}>
        <h1 className={styles.title}>Deep Work</h1>
        <p className={styles.desc}>Deep Work is about mastering focus in an age of constant distraction.
      Cal Newport argues that the ability to concentrate deeply is a rare and valuable skill.
      Through stories and science, he explains how to train your brain for undisturbed work.
      You’ll discover methods to minimize shallow tasks and prioritize meaningful output.
      The book provides a clear framework for achieving peak performance and creativity.
      If you want to produce work that truly matters, Deep Work will change your mindset forever.</p>
        {/* <Button text="See More" url="#"/> bosaite hbe */}
      </div>

      {/* Image container */}
      <div  className={styles.imgContainer}>
        <Image height={400} width={600} className={styles.img} src={Book4} alt=""/>
      </div>
    </div>

    {/* container-06 */}
    <div className={styles.item}>

     {/* Text container */}
      <div  className={styles.content}>
        <h1 className={styles.title}>Deep Work</h1>
        <p className={styles.desc}>Deep Work is about mastering focus in an age of constant distraction.
      Cal Newport argues that the ability to concentrate deeply is a rare and valuable skill.
      Through stories and science, he explains how to train your brain for undisturbed work.
      You’ll discover methods to minimize shallow tasks and prioritize meaningful output.
      The book provides a clear framework for achieving peak performance and creativity.
      If you want to produce work that truly matters, Deep Work will change your mindset forever.</p>
        {/* <Button text="See More" url="#"/> bosaite hbe */}
      </div>

      {/* Image container */}
      <div  className={styles.imgContainer}>
        <Image height={400} width={600} className={styles.img} src={Book5} alt=""/>
      </div>
    </div>
   </div>
    </>
  )
}
