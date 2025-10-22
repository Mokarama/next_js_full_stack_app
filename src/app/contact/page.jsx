import Button from '../../component/Button/Button'
import styles from './page.module.css'
import Image from 'next/image'
import contact from '../../../public/contact.jpg'

export default function Contact() {
  return (
    <>
    <div className={styles.container}>
    <h1 className={styles.title}>Let's Keep in Touch</h1>

    <div className={styles.content}>
        {/* Image */}
       <div className={styles.imgContainer}>
      <Image height={500} width={500} src={contact} className={styles.image} />
       </div>

   {/* //form container */}
    <form className={styles.form}>
      <input type="text" placeholder='name' className={styles.input} />
      <input type="email" placeholder='email' className={styles.input} />
      <textarea className={styles.textArea} placeholder='Message' cols="30" rows="10" ></textarea>
      <Button url="#" text="Send"/>
      
    </form>

    </div>

   





    </div>
    </>
  )
}
