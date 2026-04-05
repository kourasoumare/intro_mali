import { useState } from 'react'
import TitreSection from '../components/TitreSection.jsx'
import CartePhoto from '../components/CartePhoto.jsx'
import styles from './MaliAujourdhui.module.css'

// ============================================================
// ZONE À MODIFIER — Photo de fond du hero
const PHOTO_HERO = '/images/wari.jpeg'
// ============================================================

// ============================================================
// ZONE À MODIFIER — Grande photo mise en avant (section "portrait moderne")
const PHOTO_PORTRAIT = '/images/siby.jpeg'
// ============================================================

const categories = ['Tout', 'Paysages', 'Gastronomie moderne', 'Vie urbaine', 'Loisirs']

// ============================================================
// ZONE À MODIFIER — Photos de la grille "Mali d'Aujourd'hui"
// Ajoute ici tes photos qui montrent le Mali moderne, les restaurants,
// les beaux paysages, les lieux branchés, etc.
// Pour AJOUTER : copie un bloc { } et modifie-le
const photosModernes = [
  {
    categorie: 'Paysages',
    photo: '/images/siby.jpeg',
    titre: 'Siby, joyau naturel',
    description: "À 60 km de Bamako, Siby offre des paysages montagneux et des arches naturelles qui attirent de plus en plus de visiteurs.",
  },
  {
    categorie: 'Paysages',
    photo: '/images/fleuve.jpeg',
    titre: 'Le Niger, fleuve éternel',
    description: "Le fleuve Niger, photographié aujourd'hui comme hier, reste l'âme et la colonne vertébrale du Mali.",
  },
  {
    categorie: 'Paysages',
    photo: '/images/badiangara.jpeg',
    titre: 'Falaises de Bandiagara',
    description: "Site classé UNESCO, les falaises de Bandiagara attirent des voyageurs du monde entier.",
  },
  {
    categorie: 'Gastronomie moderne',
    photo: '/images/dibi.jpeg',
    titre: 'Dibi, street food malien',
    description: "La cuisine de rue malienne s'est modernisée, proposant des expériences culinaires authentiques dans un cadre convivial.",
  },
  {
    categorie: 'Gastronomie moderne',
    photo: '/images/jus.jpeg',
    titre: 'Jus & boissons fraîches',
    description: "Les bars à jus et restaurants modernes de Bamako proposent des créations colorées à base de fruits locaux.",
  },
  {
    categorie: 'Gastronomie moderne',
    photo: '/images/zaban.jpeg',
    titre: 'Pâtisserie locale',
    description: "Une nouvelle génération de pâtissiers maliens revisite les recettes traditionnelles avec élégance.",
  },
  {
    categorie: 'Gastronomie moderne',
    photo: '/images/tikadaigai.jpeg',
    titre: 'Tiga dégué revisité',
    description: "Le tiga dégué, dessert traditionnel, trouve sa place dans les restaurants branchés de Bamako.",
  },
  {
    categorie: 'Vie urbaine',
    photo: '/images/collagemali.jpeg',
    titre: 'Bamako, ville en mouvement',
    description: "La capitale malienne est une ville dynamique et cosmopolite qui ne cesse de se développer.",
  },
  {
    categorie: 'Loisirs',
    photo: '/images/wari.jpeg',
    titre: 'Wari, jeu traditionnel',
    description: "Le wari, jeu de stratégie traditionnel africain, reste très populaire au Mali, symbole du lien entre générations.",
  },
  {
    categorie: 'Vie urbaine',
    photo: '/images/the.jpeg',
    titre: 'Le thé, rituel social',
    description: "La cérémonie du thé à la menthe est un moment de partage incontournable de la vie sociale malienne.",
  },
  // ↓ AJOUTE TES NOUVELLES PHOTOS ICI
  // {
  //   categorie: 'Paysages',      ← choisis parmi : Paysages, Gastronomie moderne, Vie urbaine, Loisirs
  //   photo: '/images/ta-photo.jpeg',
  //   titre: 'Titre',
  //   description: 'Description.',
  // },
]
// ============================================================

export default function MaliAujourdhui() {
  const [categorie, setCategorie] = useState('Tout')

  const filtrees = categorie === 'Tout'
    ? photosModernes
    : photosModernes.filter((p) => p.categorie === categorie)

  return (
    <div className={styles.page}>

      {/* Hero */}
      <section className={styles.hero} style={{ backgroundImage: `url(${PHOTO_HERO})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContenu}>
          <span className={styles.heroSurtitre}>Aujourd'hui</span>
          <h1 className={styles.heroTitre}>Mali d'Aujourd'hui</h1>
          <p className={styles.heroAccroche}>Un pays en marche, entre héritage millénaire et modernité assumée</p>
        </div>
      </section>

      {/* Section intro */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introTexte}>
              <TitreSection surtitre="Portrait moderne" titre="Un Mali qui avance" />
              <p>
                Au-delà de son riche passé, le Mali d'aujourd'hui est un pays vivant et en pleine
                transformation. Bamako, sa capitale trépidante, pulse au rythme d'une jeunesse
                créative et ambitieuse.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Des restaurants qui revisitent la cuisine traditionnelle aux paysages naturels
                préservés, des lieux de vie animés aux créateurs qui rayonnent à l'international —
                le Mali moderne mérite d'être découvert sous toutes ses facettes.
              </p>
            </div>
            <div className={styles.introPhoto}>
              {/* ============================================================
                  ZONE À MODIFIER — Remplace par une belle photo moderne du Mali
              ============================================================ */}
              <img src={PHOTO_PORTRAIT} alt="Mali moderne" className={styles.introImg} />
            </div>
          </div>
        </div>
      </section>

      {/* Grille filtrée */}
      <section className={styles.grilleSection}>
        <div className={styles.container}>
          <TitreSection
            surtitre="Galerie moderne"
            titre="Le Mali sous un autre regard"
            sous="Paysages, gastronomie, vie urbaine — le visage contemporain du Mali."
          />

          {/* Filtres */}
          <div className={styles.filtres}>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`${styles.filtreBouton} ${categorie === cat ? styles.actif : ''}`}
                onClick={() => setCategorie(cat)}
              >
                {cat}
              </button>
            ))}
            <span className={styles.compteur}>{filtrees.length} photo{filtrees.length > 1 ? 's' : ''}</span>
          </div>

          <div className={styles.grille}>
            {filtrees.map((p) => (
              <CartePhoto key={p.titre} photo={p.photo} titre={p.titre} description={p.description} badge={p.categorie} />
            ))}
          </div>
        </div>
      </section>

      {/* Message final */}
      <section className={styles.message}>
        <div className={styles.container}>
          <blockquote className={styles.quote}>
            <p>"Le Mali est un pays qui regarde vers l'avenir sans oublier d'où il vient."</p>
          </blockquote>
        </div>
      </section>

    </div>
  )
}
