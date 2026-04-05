import { useState, useEffect } from 'react'
import TitreSection from '../components/TitreSection.jsx'
import CartePhoto from '../components/CartePhoto.jsx'
import styles from './Geographie.module.css'

// ============================================================
// ZONE À MODIFIER — Photo de fond du hero géographie
const PHOTO_HERO_GEO = '/images/fleuve.jpeg'
// ============================================================

// ============================================================
// ZONE que je dois MODIFIER — Les 4 cartes de statistiques géographiques
// photo, titre, description
const statsGeo = [
  {
    photo: '/images/cartemali.jpeg',
    titre: 'Superficie totale',
    description: "1 241 238 km² — 7e plus grand pays d'Afrique, enclavé au cœur de l'Afrique de l'Ouest.",
  },
  {
    photo: '/images/fleuve.jpeg',
    titre: 'Le fleuve Niger',
    description: "1 700 km à travers le Mali — source de vie, de commerce et de civilisation depuis des millénaires.",
  },
  {
    photo: '/images/sahara.jpeg',
    titre: 'Le Sahara',
    description: "Plus de 60% du territoire est désertique ou semi-aride, avec des paysages grandioses.",
  },
  {
    photo: '/images/siby.jpeg',
    titre: 'Zone soudanienne',
    description: "Au sud, des savanes verdoyantes, une forte biodiversité et des paysages de montagne spectaculaires.",
  },
]
// ============================================================

// ============================================================
// ZONE À MODIFIER — Les 3 zones climatiques
const zones = [
  {
    nom: 'Zone saharienne',
    couleur: '#D4A855',
    pct: '65%',
    description: 'Désert du Sahara, dunes, rochers, chaleur extrême. Tombouctou, Gao, Kidal.',
    photo: '/images/badiangara.jpeg',
  },
  {
    nom: 'Zone sahélienne',
    couleur: '#8B6914',
    pct: '25%',
    description: 'Transition entre désert et savane. Élevage nomade, végétation clairsemée.',
    photo: '/images/fleuve.jpeg',
  },
  {
    nom: 'Zone soudanienne',
    couleur: '#2A7A4C',
    pct: '10%',
    description: 'Sud verdoyant, agriculture intensive, forêts galeries. Bamako, Sikasso.',
    photo: '/images/siby.jpeg',
  },
]
// ============================================================

// ============================================================
// ZONE À MODIFIER — Les 8 régions administratives
const regions = [
  { nom: 'Kayes', description: "Région la plus à l'ouest, porte d'entrée vers le Sénégal et la Guinée. Arrosée par le fleuve Sénégal.", pop: '2,5M', superficie: '120 760 km²' },
  { nom: 'Koulikoro', description: "Région centrale autour de Bamako. Cœur économique et administratif du pays.", pop: '2,9M', superficie: '95 848 km²' },
  { nom: 'Sikasso', description: "Région la plus verte et la plus peuplée du Mali, au sud. Grenier agricole du pays.", pop: '3,5M', superficie: '71 790 km²' },
  { nom: 'Ségou', description: "Région historique sur le fleuve Niger, ancienne capitale du Royaume bambara de Ségou.", pop: '2,8M', superficie: '64 821 km²' },
  { nom: 'Mopti', description: "Surnommée la Venise du Mali, Mopti est au confluent du Niger et du Bani. Porte du Pays Dogon.", pop: '2,6M', superficie: '79 017 km²' },
  { nom: 'Tombouctou', description: "Région saharienne légendaire, ancienne capitale intellectuelle du monde médiéval.", pop: '0,7M', superficie: '497 926 km²' },
  { nom: 'Gao', description: "Ancienne capitale de l'Empire Songhaï, porte d'entrée du Sahara malien.", pop: '0,5M', superficie: '170 572 km²' },
  { nom: 'Kidal', description: "Région la plus au nord, peuplée principalement de Touaregs. Désert saharien, paysages grandioses.", pop: '0,07M', superficie: '151 430 km²' },
]
// ============================================================

export default function Geographie() {
  const [regionActive, setRegionActive] = useState(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.title = "Géographie — Mali Terre d'Histoire"
    return () => { document.title = "Mali — Terre d'Histoire" }
  }, [])

  return (
    <div className={styles.page}>

      <div className={styles.heroSection} style={{ backgroundImage: `url(${PHOTO_HERO_GEO})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContenu}>
          <TitreSection
            surtitre="Géographie"
            titre="Du Sahara au fleuve Niger"
            sous="Un territoire immense où désert, savane et fleuve façonnent la vie des peuples."
          />
        </div>
      </div>

      {/* Stats géo */}
      <section className={styles.stats}>
        <div className={styles.container}>
          <div className={`${styles.statsGrid} ${visible ? styles.visible : ''}`}>
            {statsGeo.map((s) => (
              <CartePhoto key={s.titre} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* Zones climatiques */}
      <section className={styles.zonesSection}>
        <div className={styles.container}>
          <TitreSection surtitre="Zones climatiques" titre="Trois grandes zones naturelles" />
          <div className={styles.zonesGrid}>
            {zones.map((zone) => (
              <div key={zone.nom} className={styles.zoneCard} style={{ borderTopColor: zone.couleur }}>
                <div className={styles.zoneImageWrapper}>
                  <img src={zone.photo} alt={zone.nom} className={styles.zoneImage} />
                </div>
                <div className={styles.zoneContenu}>
                  <h3 className={styles.zoneNom}>{zone.nom}</h3>
                  <span className={styles.zonePct} style={{ color: zone.couleur }}>{zone.pct} du territoire</span>
                  <p className={styles.zoneDesc}>{zone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Régions */}
      <section className={styles.regionsSection}>
        <div className={styles.container}>
          <TitreSection
            surtitre="Régions administratives"
            titre="Les régions du Mali"
            sous="Le Mali compte actuellement 19 régions. Voici les 8 principales, chacune avec sa propre identité culturelle et géographique.
             Cliquez sur une région pour en savoir plus."
          />
          <div className={styles.regionsGrid}>
            {regions.map((r, i) => (
              <div
                key={r.nom}
                className={`${styles.regionItem} ${regionActive === i ? styles.regionActive : ''}`}
                onClick={() => setRegionActive(regionActive === i ? null : i)}
              >
                <div className={styles.regionHeader}>
                  <span className={styles.regionNum}>0{i + 1}</span>
                  <span className={styles.regionNom}>{r.nom}</span>
                  <span className={styles.regionArrow}>{regionActive === i ? '▲' : '▼'}</span>
                </div>
                {regionActive === i && (
                  <div className={styles.regionDetail}>
                    <p className={styles.regionDesc}>{r.description}</p>
                    <div className={styles.regionStats}>
                      <span>👥 {r.pop} hab.</span>
                      <span>📐 {r.superficie}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
