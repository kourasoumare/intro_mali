import { useState, useEffect } from 'react'
import styles from './Galerie.module.css'

// ============================================================
// ZONE À MODIFIER — Toutes tes photos
// Pour AJOUTER : copie un bloc { } et incrémente l'id
// Pour SUPPRIMER : supprime le bloc correspondant
const photos = [
  { id: 1,  photo: '/images/indepence.jpeg', titre: 'Feux d\'artifice pour la fête de l\'indépendance',   lieu: 'Mali' },
  { id: 2,  photo: '/images/fleur.jpeg',  titre: '  ',      lieu: 'Mali' },
  { id: 3,  photo: '/images/jus.jpeg',       titre: '   ',             lieu: 'Mali' },
  { id: 4,  photo: '/images/maskdogon.jpeg',    titre: 'Masques Dogon',               lieu: 'Pays Dogon' },
  { id: 5,  photo: '/images/femmedrapeau.jpeg',   titre: '  ',                  lieu: 'Mali' },
  { id: 6,  photo: '/images/toumani.jpeg',      titre: 'Toumani Diabaté',             lieu: 'Bamako' },
  { id: 7,  photo: '/images/art.jpeg',          titre: 'Art malien',                  lieu: 'Mali' },
  { id: 8,  photo: '/images/siby.jpeg',         titre: 'Cascade Woyowoyo',          lieu: 'Siby' },
  { id: 9,  photo: '/images/bapteme.jpeg',         titre: '  ',             lieu: 'Mali' },
  { id: 10, photo: '/images/beignet.jpeg',      titre: 'Beignets maliens',            lieu: 'Bamako' },
  { id: 11, photo: '/images/buru.jpeg',         titre: 'Buru',                        lieu: 'Mali' },
  { id: 12, photo: '/images/creme.jpeg',        titre: 'Crème de mil',                lieu: 'Mali' },
  { id: 13, photo: '/images/deguai.jpeg',       titre: 'Dégué',                       lieu: 'Mali' },
  { id: 14, photo: '/images/dibi.jpeg',         titre: 'Dibi grillé',                 lieu: 'Bamako' },
  { id: 15, photo: '/images/bougieba.jpeg',          titre: 'Bougi Ba',               lieu: 'Bamako' },
  { id: 16, photo: '/images/badaloge.jpeg',         titre: '  ',                 lieu: 'Mali' },
  { id: 17, photo: '/images/tikadaigai.jpeg',   titre: 'Tiga dégué',                  lieu: 'Mali' },
  { id: 18, photo: '/images/henna.jpeg',        titre: 'Henné traditionnel',                       lieu: 'Mali' },
  { id: 19, photo: '/images/zaban.jpeg',        titre: 'Zaban',          lieu: 'Mali' },
  { id: 20, photo: '/images/kaba.jpeg',  titre: '  ',             lieu: 'Mali' },
  { id: 21, photo: '/images/gateau.jpeg',       titre: '  ',        lieu: 'Mali' },
  { id: 22, photo: '/images/wari.jpeg',         titre: 'Monnaie malienne',            lieu: 'Mali' },
  { id: 23, photo: '/images/the.jpeg',          titre: 'Cérémonie du thé',            lieu: 'Mali' },
  { id: 24, photo: '/images/arbab.jpeg',    titre: 'Arbab Chicken',               lieu: 'Bamako' },
  { id: 25, photo: '/images/babifoot.jpeg',    titre: 'Babi Foot ',               lieu: 'Mali' },
  { id: 26, photo: '/images/eleven.jpeg',    titre: 'Eleven Café',               lieu: 'Bamako' },
  { id: 27, photo: '/images/uno.jpeg',    titre: 'Uno ',               lieu: 'Mali' },
  { id: 28, photo: '/images/fruit.jpeg',    titre: 'Fruits du Mali',               lieu: 'Mali' },
  { id: 29, photo: '/images/danse.jpeg',    titre: 'Journée culturelle au Mali ',               lieu: 'Mali' },
  { id: 30, photo: '/images/grillade.jpeg',    titre: 'grillade ',               lieu: 'Mali' },
  { id: 31, photo: '/images/kayes.jpeg',    titre: '   ',               lieu: 'Kayes' },
  { id: 32, photo: '/images/marche.jpeg',    titre: 'Grand marché de Bamako',               lieu: 'Bamako' },
  { id: 33, photo: '/images/mode.jpeg',    titre: '   ',               lieu: 'Mali' },
  { id: 34, photo: '/images/teatime.jpeg',    titre: '  Brunch',               lieu: 'Bamako' },
  { id: 35, photo: '/images/velo.jpeg',    titre: 'faire du velo dans Bko',               lieu: 'Bamako' },
  { id: 36, photo: '/images/timlays.jpeg',    titre: 'TimLAYS',               lieu: 'Bamako' },
  { id: 37, photo: '/images/streetfood.jpeg',    titre: 'Street food',               lieu: 'Mali' },
  { id: 38, photo: '/images/sortie.jpeg',    titre: '   ',               lieu: 'Bamako' },
{ id: 39, photo: '/images/deguai.jpeg',    titre: 'Degue',               lieu: 'Mali' },
{ id: 40, photo: '/images/cocktail.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 41, photo: '/images/quad.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 42, photo: '/images/koura.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 43, photo: '/images/timlays2.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 44, photo: '/images/teatime2.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 45, photo: '/images/.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 46, photo: '/images/bijou.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 47, photo: '/images/camp.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 48, photo: '/images/couchesoleil.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 49, photo: '/images/tamtam.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 50, photo: '/images/or.jpeg',    titre: 'L\'or signe de richesse',               lieu: 'Mali' },
{ id: 51, photo: '/images/sanata.jpeg',    titre: 'Sanata ka tcheke ',               lieu: 'Mali' },
{ id: 52, photo: '/images/out.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 53, photo: '/images/gnomi.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 54, photo: '/images/dkd.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 55, photo: '/images/collage.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 56, photo: '/images/girls.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 57, photo: '/images/couchesoleil2.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 58, photo: '/images/oumous.jpeg',    titre: '  Oumou Sangaré ',               lieu: 'Mali' },
{ id: 59, photo: '/images/dje.jpeg',    titre: '   ',               lieu: 'Mali' },
{ id: 60, photo: '/images/sac.jpeg',    titre: '   ',               lieu: 'Mali' },







    

  // syntaxe pour mes photos{ id: num, photo: '/images/ta-photo.jpeg', titre: 'Titre', lieu: 'Lieu' },
]





export default function Galerie() {
  const [selection, setSelection] = useState(null)
  const [indexActif, setIndexActif] = useState(0)

  // Ouvrir une photo
  const ouvrir = (photo, index) => {
    setSelection(photo)
    setIndexActif(index)
  }

  // Navigation dans le lightbox
  const precedent = () => {
    const newIndex = (indexActif - 1 + photos.length) % photos.length
    setIndexActif(newIndex)
    setSelection(photos[newIndex])
  }

  const suivant = () => {
    const newIndex = (indexActif + 1) % photos.length
    setIndexActif(newIndex)
    setSelection(photos[newIndex])
  }

  // Clavier : flèches + échap
  useEffect(() => {
    if (!selection) return
    const onKey = (e) => {
      if (e.key === 'ArrowRight') suivant()
      if (e.key === 'ArrowLeft') precedent()
      if (e.key === 'Escape') setSelection(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selection, indexActif])

  // Bloquer le scroll quand lightbox ouvert
  useEffect(() => {
    document.body.style.overflow = selection ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [selection])

  return (
    <div className={styles.page}>

      {/*  HERO  */}
      <div className={styles.hero}>
        <h1 className={styles.heroTitre}>Galerie</h1>
        <p className={styles.heroSous}>
          {photos.length} photos de ma vie au Mali — cliquez pour agrandir, naviguez avec les flèches
        </p>
        <div className={styles.heroBarre}>
          <span style={{ background: '#14A060' }}></span>
          <span style={{ background: '#FCD116' }}></span>
          <span style={{ background: '#CE1126' }}></span>
        </div>
      </div>

      {/*  GRILLE PHOTO  */}
      <div className={styles.galerie}>
        {photos.map((p, i) => (
          <div
            key={p.id}
            className={styles.photoItem}
            onClick={() => ouvrir(p, i)}
          >
            <img src={p.photo} alt={p.titre} className={styles.photoImg} loading="lazy" />
            <div className={styles.photoOverlay}>
              <span className={styles.photoLieu}>📍 {p.lieu}</span>
              <span className={styles.photoTitre}>{p.titre}</span>
            </div>
          </div>
        ))}
      </div>

      {/*  LIGHTBOX  */}
      {selection && (
        <div className={styles.lightbox} onClick={() => setSelection(null)}>
          <div className={styles.lightboxContenu} onClick={e => e.stopPropagation()}>

            {/* Bouton fermer */}
            <button className={styles.fermer} onClick={() => setSelection(null)}>✕</button>

            {/* Bouton précédent */}
            <button className={styles.navPrev} onClick={precedent}>‹</button>

            {/* Photo */}
            <img
              src={selection.photo}
              alt={selection.titre}
              className={styles.lightboxPhoto}
              key={selection.id}
            />

            {/* Bouton suivant */}
            <button className={styles.navNext} onClick={suivant}>›</button>

            {/* Infos */}
            <div className={styles.lightboxInfo}>
              <span className={styles.lightboxLieu}>📍 {selection.lieu}</span>
              <h2 className={styles.lightboxTitre}>{selection.titre}</h2>
              <span className={styles.lightboxCompteur}>{indexActif + 1} / {photos.length}</span>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
