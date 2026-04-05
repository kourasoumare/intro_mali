import styles from './CartePhoto.module.css'

export default function CartePhoto({ photo, titre, description, badge }) {
  return (
    <div className={styles.carte}>
      <div className={styles.imageWrapper}>
        <img src={photo} alt={titre} className={styles.image} />
        {badge && <span className={styles.badge}>{badge}</span>}
      </div>
      <div className={styles.contenu}>
        <h3 className={styles.titre}>{titre}</h3>
        {description && <p className={styles.description}>{description}</p>}
      </div>
    </div>
  )
}
