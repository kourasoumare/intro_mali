import { Link } from 'react-router-dom'
import styles from './NotFound.module.css'

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.contenu}>
        <span className={styles.code}>404</span>
        <h1 className={styles.titre}>Page introuvable</h1>
        <p className={styles.texte}>
          Comme un voyageur perdu dans le Sahara, cette page n'existe pas.
          Retrouvez votre chemin vers le Mali.
        </p>
        <Link to="/" className={styles.bouton}>← Retour à l'accueil</Link>
      </div>
    </div>
  )
}
