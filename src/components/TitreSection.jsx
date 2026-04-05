import styles from './TitreSection.module.css'

export default function TitreSection({ surtitre, titre, sous }) {
  return (
    <div className={styles.wrapper}>
      {surtitre && <span className={styles.surtitre}>{surtitre}</span>}
      <h2 className={styles.titre}>{titre}</h2>
      {sous && <p className={styles.sous}>{sous}</p>}
    </div>
  )
}
