
import styles from './page.module.css';
import Image from "next/image";
import Hero from '../../public/hero.jpg'
import Button from '../component/Button/Button';
export default function Home() {
  return (
    <>

    <div className={styles.container}>

    {/* Text area */}
      <div className={styles.item}>
     <h1 className={styles.title}>Better Design for your digital products</h1>
     <p className={styles.desc}>Turning your Idea into Reality.We bring together the teams from the global tech industry</p>
     
     <Button url="/portfolio" text="See Our Works" />
     
     </div>

 {/* //Image Area */}
      <div className={styles.item}>
      <Image src={Hero} alt="pawa jaini" className={styles.img}/>
      </div>

     </div>
 
   
    </>
  );
}
