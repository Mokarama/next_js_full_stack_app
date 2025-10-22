import Link from 'next/link'
import styles from './page.module.css'
import Image from 'next/image'
import Img1 from '../../../public/blog/book1.jpg'
import Img2 from '../../../public/blog/book2.jpg'
import Img3 from '../../../public/blog/book3.jpg'
import Img4 from '../../../public/blog/book4.jpg'
import Img5 from '../../../public/blog/book5.jpg'
import Img6 from '../../../public/blog/book6.jpg'
export default  function Blog() {
  return (
    <>
      <div className={styles.mainContainer}>

        {/* card-1 */}
        <Link href="/blog/testId" className={styles.containerCard}>
          <div className={styles.imageContainer}>
            <Image
              src={Img1}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>The Art of Clear Thinking</h1>
            <p className={styles.desc}>
              Learn how to avoid everyday thinking traps that cloud your judgment. 
              This book simplifies complex psychological concepts into clear insights. 
              Each chapter helps you understand your biases and decision patterns. 
              It’s a guide to reasoning better and seeing the world with sharper clarity. 
              Perfect for anyone who wants to think smarter and live more intentionally.
            </p>
          </div>
        </Link>

        {/* card-2 */}
        <Link href="/blog/testId" className={styles.containerCard}>
          <div className={styles.imageContainer}>
            <Image
              src={Img2}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Atomic Habits</h1>
            <p className={styles.desc}>
              Discover how small daily habits create massive long-term results. 
              James Clear shares proven methods to build good habits and break bad ones. 
              It teaches you to focus on identity-based change instead of just goals. 
              The system is simple yet deeply transformative. 
              A must-read for anyone serious about progress and self-mastery.
            </p>
          </div>
        </Link>

        {/* card-3 */}
        <Link href="/blog/testId" className={styles.containerCard}>
          <div className={styles.imageContainer}>
            <Image
              src={Img3}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Deep Work</h1>
            <p className={styles.desc}>
              Deep Work explores how focus leads to extraordinary results. 
              Cal Newport explains why shallow multitasking kills productivity. 
              You’ll learn practical steps to build concentration and minimize distractions. 
              It’s a manifesto for meaningful, high-quality work in a noisy world. 
              A must for students, creators, and professionals who value excellence.
            </p>
          </div>
        </Link>

        {/* card-4 */}
        <Link href="/blog/testId" className={styles.containerCard}>
          <div className={styles.imageContainer}>
            <Image
              src={Img4}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Can’t Hurt Me</h1>
            <p className={styles.desc}>
              David Goggins shares his raw journey from pain to power. 
              This book reveals how discipline and mental toughness can reshape your life. 
              Through brutal honesty and personal stories, he shows what’s truly possible. 
              It’s both motivational and practical, pushing you past your comfort zone. 
              Read it if you’re ready to conquer excuses and unlock your potential.
            </p>
          </div>
        </Link>

        {/* card-5 */}
        <Link href="/blog/testId" className={styles.containerCard}>
          <div className={styles.imageContainer}>
            <Image
              src={Img5}
              alt=""
              width={400}
              height={250}
              className={styles.image}
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>The Subtle Art of Not Giving a F*ck</h1>
            <p className={styles.desc}>
              Mark Manson challenges conventional positivity and self-help clichés. 
              He argues that accepting life’s struggles brings real happiness. 
              This book mixes humor with deep life lessons on priorities and values. 
              It’s honest, relatable, and refreshingly realistic. 
              Perfect for anyone tired of fake motivation and ready for real change.
            </p>
          </div>
        </Link>

      </div>
    </>
  )
}
