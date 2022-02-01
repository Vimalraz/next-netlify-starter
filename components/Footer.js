import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with <img src="/netliheart.svg" alt="Love" className={styles.logo} /> by vimal
      </footer>
    </>
  )
}
