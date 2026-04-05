import { Link } from 'react-router-dom'
import TitreSection from '../components/TitreSection.jsx'
import CartePhoto from '../components/CartePhoto.jsx'
import styles from './Accueil.module.css'


//  Photo principale du hero (grande image fond)
const PHOTO_HERO = '/images/collagemali.jpeg'

// cartes de la section "Ce qui rend le Mali unique"
// Pour chaque carte : photo, titre, description
const cartesAccueil = [
  {
    photo: '/images/art.jpeg',
    titre: 'Art & Artisanat',
    description: "Le Mali est réputé pour la richesse de son artisanat : poteries, sculptures, bijoux et tissus bogolan aux motifs symboliques.",
  },
  {
    photo: '/images/empire.jpeg',
    titre: 'Empires légendaires',
    description: "Le Mali a abrité parmi les plus grands empires d'Afrique de l'Ouest : le Ghana, le Mali et le Songhaï.",
  },
  {
    photo: '/images/fleuve.jpeg',
    titre: 'Le fleuve Niger',
    description: "Artère vitale du pays, le Niger traverse le Mali sur plus de 1 700 km, irriguant terres et civilisations depuis des millénaires.",
  },
  {
    photo: '/images/mosquedjene.jpeg',
    titre: 'Patrimoine mondial',
    description: "La Grande Mosquée de Djenné, joyau de l'architecture en pisé, est classée au patrimoine mondial de l'UNESCO.",
  },
]







const chiffres = [
  { valeur: '22 M', label: 'habitants' },
  { valeur: '1 241 238', label: 'km²' },
  { valeur: '3e', label: "producteur d'or en Afrique" },
  { valeur: '1960', label: "année d'indépendance" },
]

export default function Accueil() {
  return (
    <div className={styles.page}>

      {/*  HERO  */}
      <section className={styles.hero} style={{ backgroundImage: `url(${PHOTO_HERO})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContenu}>
          <span className={styles.heroSurtitre}>Bienvenue au</span>
          <h1 className={styles.heroTitre}>Mali</h1>
          <p className={styles.heroAccroche}>Terre d'Histoire, de Culture et de Grandeur</p>
          <p className={styles.herophrase}>" Mali yé an yé, an yé Mali yé "</p>
        {/*  <div className={styles.heroBtns}>
            <Link to="/histoire" className={styles.btnPrimaire}>Découvrir l'histoire</Link>
            <Link to="/galerie" className={styles.btnSecondaire}>Voir la galerie</Link>
            
          </div>  */}
        </div>
        <div className={styles.heroDrapeau}>
          <div className={styles.bande} style={{ background: '#14A060' }}></div>
          <div className={styles.bande} style={{ background: '#FCD116' }}></div>
          <div className={styles.bande} style={{ background: '#CE1126' }}></div>
        </div>
      </section>

      {/*  quelques infos  */}
      <section className={styles.chiffres}>
        {chiffres.map((c) => (
          <div key={c.label} className={styles.chiffreItem}>
            <span className={styles.chiffreValeur}>{c.valeur}</span>
            <span className={styles.chiffreLabel}>{c.label}</span>
          </div>
        ))}
      </section>

      {/* INTRODUCTION */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introTexte}>
              <TitreSection surtitre="Portrait" titre="Une nation aux racines profondes" />
              <p>
                Le Mali, pays enclavé d'Afrique de l'Ouest, est l'héritier de civilisations
                qui ont marqué l'histoire mondiale. De l'Empire du Mali fondé par Soundiata
                Keïta au XIIIe siècle aux fastes de Tombouctou, capitale intellectuelle du monde
                médiéval, ce pays recèle un patrimoine exceptionnel.
              </p>
              <p style={{ marginTop: '1rem' }}>
                Aujourd'hui, le Mali est une mosaïque de peuples — Bambara, Peul, Touareg,
                Dogon — dont les traditions, la musique et l'art continuent de rayonner
                bien au-delà de ses frontières.
              </p>
              <Link to="/histoire" className={styles.lienTexte}>Explorer l'histoire complète →</Link>
            </div>

            {/* 
               je dois Remplace par le chemin de la photo */}

            <div className={styles.introVisuel}>
              <img src="/images/cartemali.jpeg" alt="Carte du Mali" className={styles.introPhoto} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== CARTES THÉMATIQUES ===== */}
      <section className={styles.cartes}>
        <div className={styles.container}>
          <TitreSection
            surtitre="À explorer"
            titre="Ce qui rend le Mali unique"
            sous="Plongez dans les multiples facettes d'une nation au patrimoine exceptionnel."
          />
          <div className={styles.cartesGrid}>
            {cartesAccueil.map((c) => (
              <CartePhoto key={c.titre} {...c} />
            ))}
          </div>
        </div>
      </section>

      {/*  phrase cloture */}
      <section className={styles.cta}>
        <div className={styles.container}>
          <h2 className={styles.ctaTitre}>Partez à la découverte</h2>
          <p className={styles.ctaSous}>Histoire, culture, paysages et art — tout le Mali vous attend.</p>
          <div className={styles.ctaBtns}>
            <Link to="/histoire" className={styles.btnPrimaire}>Histoire et vécu</Link>
           {/* <Link to="/mali-aujourdhui" className={styles.btnSecondaire}>Mali d'Aujourd'hui</Link>*/}
          </div>
        </div>
      </section>

    </div>
  )
}
