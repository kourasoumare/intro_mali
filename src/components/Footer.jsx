import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.drapeau}>
        <span style={{ background: '#14A060' }}></span>
        <span style={{ background: '#FCD116' }}></span>
        <span style={{ background: '#CE1126' }}></span>
      </div>
      <p className={styles.texte}>Mali — Terre d'Histoire</p>
      <p className={styles.sous}>Projet réalisé dans le cadre du cours de Développement Web Frontend</p>
    </footer>
  )
}
