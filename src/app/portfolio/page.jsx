import styles from "./page.module.css";


import { styles } from '.';
import Link from "next/link";
export default function Portfolio() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        <div className={styles.items}>
          <Link href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
          </Link>

            <Link href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
          </Link>

            <Link href="/portfolio/application">
          <span className={styles.title}>Application</span>
          </Link>

        </div>
      </div>
    </>
  )
}
