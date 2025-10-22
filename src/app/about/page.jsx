import styles from "./page.module.css";
import Image from "next/image";
// import CodingEnvironment from "../../../public/codingEnvironment.jpg";
import Team from "../../../public/about.jpg";

import Button from "../../component/Button/Button";
export default function About() {
  return (
    <>
      <div className={styles.container}>
        {/* Image Container */}
        <div className={styles.imgContainer}>
          <Image
            src={Team}
            height={400}
            alt=""
            className={styles.img}
          />
          <div className={styles.imgText}>
            <h1 className={styles.imgTitle}>Digital Storytellers</h1>
            <h2 className={styles.imgDesc}>
              Handcrafting award winning digital experience
            </h2>
          </div>
        </div>

        {/* Text container */}
        <div className={styles.textContainer}>
          {/* Box-01 */}
          <div className={styles.item}>
           <h1 className={styles.title}>Who Are We?</h1>
            <p className={styles.desc}>
              We are a passionate team of designers, developers, and
              storytellers dedicated to crafting unique digital experiences. Our
              journey began with a simple vision — to combine creativity and
              technology in ways that inspire people. From concept to code, we
              work together to transform ideas into powerful online presences
              that leave a lasting impact.
              <br />
              <br />
              We believe great design is not just about visuals, but about
              emotion, connection, and purpose. Every project we take on
              reflects our commitment to quality, innovation, and attention to
              detail. With curiosity as our compass, we’re constantly exploring
              new ways to tell stories through design and interactivity. Our
              mission is to bring imagination to life — one pixel, one line of
              code, and one story at a time.
            </p>
          </div>

          {/* Box-01 */}
          <div className={styles.item}>
            <h1 className={styles.title}>What We Do?</h1>
            <p className={styles.desc}>
              We specialize in responsive web design and development that adapts
              beautifully across all devices. Our goal is to build modern,
              efficient, and visually appealing websites that leave a lasting
              impression. Every project is crafted with clean code, strong
              performance, and intuitive user experience in mind. We turn ideas
              into user-friendly digital solutions that help brands grow and
              stand out online.
              <br/>
              <br/>

              - Responsive Web Design & Development 
              <br/>
              - Building Modern,
              <br/>
               -User-Friendly Websites
            </p>
            <Button url="/contact" text="Contact"/>
          </div>
        </div>
      </div>
    </>
  );
}
