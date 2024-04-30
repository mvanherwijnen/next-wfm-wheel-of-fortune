import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <img src="/next-logo.png" alt="Next Logo" className={styles.logo} />
      </footer>
    </>
  )
}
