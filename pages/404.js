import Image from 'next/image';
import Link from 'next/link';
import styles from '../components/layout.module.css'


export default function Custom404() {
  return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }} 
      className="container">
        <Image 
          priority 
          src="/images/coffee.png" 
          alt="404" 
          width={62}
          height={38}
        />
        <p>Oops – looks like that page doesn't exist... how about a cup of coffee?</p>
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      </div>
  )
}