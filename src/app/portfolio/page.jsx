import styles from "./page.module.css";

import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.selectTitle}>Choose a gallery</h1>
        <div className={styles.items}>
          {/* Card-01 */}
         <div className={styles.item}>
           <Link href="/portfolio/illustrations">
          <span className={styles.title}>Illustrations</span>
          </Link>
         </div>

          {/* card-02 */}
           <div className={styles.item}>
             <Link href="/portfolio/websites">
          <span className={styles.title}>Websites</span>
          </Link>
           </div>

           {/* card-03 */}
          <div className={styles.item}>
              <Link href="/portfolio/application">
          <span className={styles.title}>Application</span>
          </Link>
          </div>

        </div>
      </div>
    </>
  )
}
