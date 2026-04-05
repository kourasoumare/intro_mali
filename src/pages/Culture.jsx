import { useState } from 'react'
import styles from './Culture.module.css'

// ============================================================
// ZONE À MODIFIER — Photos de chaque section
const PHOTO_HERO       = '/images/maskdogon.jpeg'
const PHOTO_IDENTITE   = '/images/ethnie2.jpeg'
const PHOTO_VETEMENTS  = '/images/mannequins.jpeg'
const PHOTO_TRADITIONS = '/images/henna.jpeg'

const artistes = [
  {
    photo: '/images/oumous.jpeg',
    nom: 'Toumani Diabaté',
    instrument: 'Kora',
    description: "Icône de la musique malienne, Oumou Sangaré incarne la puissance et l’élégance du Wassoulou. Sa voix engagée porte la culture du Mali bien au-delà de ses frontières.",
  },
  {
    photo: '/images/salif.jpeg',
    nom: 'Salif Keïta',
    instrument: 'Voix',
    description: "Surnommé la Voix d'Or du Mali, Salif Keïta mêle musique mandingue et sonorités modernes dans un style unique et envoûtant.",
  },
   {
    photo: '/images/amadoumariam.jpeg',
    nom: 'Amadou et Mariam',
    instrument: 'Voix',
    description: "Couples de musiciens malien, Amadou et Mariam incarnent la tradition et l'innovation dans la musique malienne.",
  }
]

const plats = [
  {
    photo: '/images/tikadaigai.jpeg',
    nom: 'Tiga dégué',
    description: "Onctueux et savoureux, ce plat à base de pâte d'arachide et de riz est un incontournable des tables maliennes.",
    saveur: 'Crémeux · Riche · Réconfortant'
  },
  {
    photo: '/images/dibi.jpeg',
    nom: 'Dibi',
    description: "Viande grillée à la braise, marinée aux épices locales. Le roi de la street food malienne, savouré à toute heure accompagné de l'épice kankankan.",
      saveur: 'Grillé · Épicé · Savoureux'
  },
  {
    photo: '/images/gnomi.jpeg',
    nom: 'Beignets',
    description: "Accompagnant une delicieuse soupe, soupoudré de lait en poudre ou meme juste nature le Gnomi est une douceur traditionnelle du quotidien.",
    saveur: ' moelleux · gourmand'
  },
  {
    photo: '/images/kaba.jpeg',
    nom: 'Kaba',
    description: "Le maïs grillé sur braise, vendu au coin des rues. Simple, authentique, inoubliable.",
    saveur: 'Grillé · Naturel · Fumé',
  },
]

const patrimoine = [
  {
    photo: '/images/mosquedjene.jpeg',
    titre: 'Grande Mosquée de Djenné',
    description: "Chef-d'œuvre de l'architecture en pisé, classée UNESCO. Elle incarne le génie constructif malien sur plus de 800 ans d'histoire.",
  },
  {
    photo: '/images/tombouctou.jpeg',
    titre: 'Tombouctou, cité du savoir',
    description: "Au XVe siècle, l'une des villes les plus lettrées du monde. Ses bibliothèques abritent des centaines de milliers de manuscrits précieux.",
  },
  {
    photo: '/images/maskdogon.jpeg',
    titre: 'Masques Dogon',
    description: "Bien plus que de l'art, les masques dogons relient les vivants aux ancêtres. Chaque cérémonie du Dama est un voyage entre deux mondes.",
  },
]
// ============================================================

export default function Culture() {
  const [platActif, setPlatActif] = useState(0)

  return (
    <div className={styles.page}>

      {/* HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${PHOTO_HERO})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContenu}>
          <span className={styles.heroSurtitre}>Culture & Traditions</span>
          <h1 className={styles.heroTitre}>
            Plongez au cœur<br />de la culture malienne
          </h1>
          <p className={styles.heroTexte}>
            Le Mali est une mosaïque de peuples, de langues et de traditions millénaires.
            Ici, la culture ne se visite pas — elle se vit, se chante et se transmet.
            Bienvenue dans l'un des héritages les plus riches d'Afrique.
          </p>
          <div className={styles.heroBarre}>
            <span style={{ background: '#14A060' }}></span>
            <span style={{ background: '#FCD116' }}></span>
            <span style={{ background: '#CE1126' }}></span>
          </div>
        </div>
        <div className={styles.heroScroll}>↓ Découvrir</div>
      </section>

      {/* IDENTITÉ CULTURELLE */}
      <section className={styles.identite}>
        <div className={styles.container}>
          <div className={styles.identiteGrid}>
            <div className={styles.identitePhoto}>
              <img src={PHOTO_IDENTITE} alt="Diversité malienne" className={styles.identiteImg} />
              <div className={styles.identiteBadge}>+20 ethnies · 1 nation</div>
            </div>
            <div className={styles.identiteTexte}>
              <span className={styles.surtitre}>Identité culturelle</span>
              <h2 className={styles.titreSec}>Un peuple, mille visages</h2>
              <p>
                Le Mali est habité par plus de <strong>20 groupes ethniques</strong> — Soninké, Bambara,
                Peulh, Dogon, Touareg, Sonrhaï, Maninka… Chacun apporte sa langue,
                ses rites et sa vision du monde, formant ensemble une culture d'une
                richesse extraordinaire.
              </p>
              <p>
                Le <strong>bambara</strong> s'impose comme comme la langue du quotidien,
                parlée par une grande partie de la population. Mais au-delà des langues,
                c’est la <strong>tradition orale</strong> qui constitue le véritable cœur de la société : récits, 
                proverbes et chants transmettent, de génération en génération, la mémoire
                et les valeurs du peuple malien.
              </p>
              <p>
                Au Mali, les relations entre les ethnies sont également marquées par une tradition 
                unique appelée cousinage à plaisanterie. Ce système social permet à certains 
                groupes de se taquiner librement, parfois avec humour ou provocation, sans jamais 
                créer de conflit. Au contraire, il renforce la cohésion, apaise les tensions et 
                rappelle que, malgré les différences, tous partagent un même héritage.
                Ce systeme de cousinage à plaisanterie s'applique également entre les noms de famille.
                </p>
           
              <div className={styles.ethniesGrid}>
                {['Soninké / Malinké', 'Traoré / Diarra', 'Peul / Dogon'].map(e => (
                  <span key={e} className={styles.ethnieTag}>{e}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  MUSIQUE & GRIOTS  */}
      <section className={styles.musique}>
        <div className={styles.musiqueInner}>
          <div className={styles.container}>
            <span className={styles.surtitreClair}>Musique & Griots</span>
            <h2 className={styles.titreClair}>La voix vivante du Mali</h2>
            <p className={styles.sectionIntro}>
              Au Mali, la musique n'est pas un divertissement — c'est une <strong>institution</strong>.
              Les griots, gardiens de la mémoire orale, sont bien plus que des artistes : ce sont 
              des historiens, des conseillers et des messagers.
              A travers leurs chants et leurs paroles, ils perpétuent l'héritage des ancetres et donnent
              une voix au passé comme au présent.
            </p>

            <div className={styles.instrumentsGrid}>
              {[
                { nom: 'Kora', desc: "21 cordes de pure magie. Son son cristallin et doux voyage entre passé et présent.", couleur: '#E8B84B' },
                { nom: 'Balafon', desc: "Xylophone aux résonateurs en calebasse. Sa chaleur sonore accompagne les cérémonies depuis des siècles.", couleur: '#14A060' },
                { nom: 'Ngoni', desc: "Ancêtre du banjo à 4 cordes. Sa vibration profonde est celle des chasseurs et des guerriers.", couleur: '#CE1126' },
              ].map(inst => (
                <div key={inst.nom} className={styles.instrumentCard} style={{ '--couleur': inst.couleur }}>
                  <div className={styles.instrumentAccent}></div>
                  <h3 className={styles.instrumentNom}>{inst.nom}</h3>
                  <p className={styles.instrumentDesc}>{inst.desc}</p>
                </div>
              ))}
            </div>

            <h3 className={styles.sousTitreClair}>Artistes les plus célèbres</h3>
            <div className={styles.artistesGrid}>
              {artistes.map(a => (
                <div key={a.nom} className={styles.artisteCard}>
                  <div className={styles.artisteImageWrapper}>
                    <img src={a.photo} alt={a.nom} className={styles.artisteImage} />
                    <span className={styles.artisteBadge}>{a.instrument}</span>
                  </div>
                  <div className={styles.artisteInfo}>
                    <h3 className={styles.artisteNom}>{a.nom}</h3>
                    <p className={styles.artisteDesc}>{a.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.audioBox}>
              <span className={styles.audioIcone}>♪</span>
              <div>
                <strong>Plongez dans la musique malienne</strong>
                <p>Cherchez "Toumani Diabaté — Djelika" ou "Salif Keïta — Yamore" pour ressentir la magie. Laissez la kora vous emporter.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  VÊTEMENTS TRADITIONNELS  */}
      <section className={styles.vetements}>
        <div className={styles.container}>
          <div className={styles.vetementsGrid}>
            <div className={styles.vetementsTexte}>
              <span className={styles.surtitre}>Vêtements traditionnels</span>
              <h2 className={styles.titreSec}>S'habiller, c'est raconter qui on est</h2>
              <p>
                Au Mali, la tenue vestimentaire est bien plus qu'une question de style —
                c'est une <strong>déclaration d'identité</strong>. Chaque tissu, chaque
                broderie, chaque couleur porte un message fort.
              </p>
              <div className={styles.vetementsListe}>
                {[
                  { nom: 'Le Boubou', desc: "Tunique ample portée lors des grandes occasions. En bazin brodé pour les fêtes, en coton léger au quotidien — le boubou s'adapte à chaque moment de la vie." },
                  { nom: 'Le Bazin riche', desc: "Tissu de prestige par excellence. Réservé aux mariages et cérémonies, plus il est travaillé, plus il exprime la dignité et le rang social." },
                  { nom: 'Le Bogolan', desc: "Tissu teint à la boue fermentée, orné de motifs géométriques symboliques. Chaque motif raconte un rite de passage, une victoire, une appartenance." },
                ].map(v => (
                  <div key={v.nom} className={styles.vetementItem}>
                    <h3 className={styles.vetementNom}>{v.nom}</h3>
                    <p>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.vetementsPhoto}>
              <img src={PHOTO_VETEMENTS} alt="Vêtements traditionnels" className={styles.vetementsImg} />
            </div>
          </div>
        </div>
      </section>

      {/* ===== 5. CUISINE ===== */}
      <section className={styles.cuisine}>
        <div className={styles.cuisineInner}>
          <div className={styles.container}>
            <span className={styles.surtitreClair}>Cuisine malienne</span>
            <h2 className={styles.titreClair}>Une table généreuse et parfumée</h2>
            <p className={styles.sectionIntro}>
              La cuisine malienne est un voyage en soi. Des saveurs profondes, des ingrédients
              locaux et un art du partage qui transforme chaque repas en moment de communion.
            </p>

            <div className={styles.platSelecteur}>
              {plats.map((p, i) => (
                <button
                  key={p.nom}
                  className={`${styles.platBouton} ${platActif === i ? styles.platActif : ''}`}
                  onClick={() => setPlatActif(i)}
                >
                  {p.nom}
                </button>
              ))}
            </div>

            <div className={styles.platAffiche} key={platActif}>
              <div className={styles.platImageWrapper}>
                <img src={plats[platActif].photo} alt={plats[platActif].nom} className={styles.platImage} />
              </div>
              <div className={styles.platInfo}>
                <h3 className={styles.platNom}>{plats[platActif].nom}</h3>
                <span className={styles.platSaveur}>{plats[platActif].saveur}</span>
                <p className={styles.platDesc}>{plats[platActif].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRADITIONS & VALEURS  */}
      <section className={styles.traditions}>
        <div className={styles.container}>
          <div className={styles.traditionsGrid}>
            <div className={styles.traditionsPhoto}>
              <img src={PHOTO_TRADITIONS} alt="Traditions maliennes" className={styles.traditionsImg} />
            </div>
            <div className={styles.traditionsTexte}>
              <span className={styles.surtitre}>Traditions & Valeurs</span>
              <h2 className={styles.titreSec}>Ce qui unit les Maliens</h2>
              <p>
                Au Mali, la <strong>famille</strong> est le cœur de tout. Les décisions
                se prennent ensemble, les fêtes se célèbrent ensemble, et même les épreuves
                se traversent ensemble. Cette solidarité n'est pas un idéal — c'est une
                pratique quotidienne.
              </p>
              <div className={styles.valeursGrid}>
                {[
                  { titre: 'Hospitalité', desc: "L'étranger est toujours le bienvenu. Partager son repas, son toit, son temps — c'est naturel au Mali." },
                  { titre: 'Mariage', desc: "Cérémonie de plusieurs jours, union de deux familles autant que de deux personnes." },
                  { titre: 'Baptême', desc: "Le 8e jour après la naissance, l'enfant reçoit son nom en présence de toute la communauté." },
                  { titre: 'Respect des aînés', desc: "La sagesse des anciens guide les choix. Leur parole a force de loi dans la communauté." },
                ].map(v => (
                  <div key={v.titre} className={styles.valeurCard}>
                    <h3 className={styles.valeurTitre}>{v.titre}</h3>
                    <p className={styles.valeurDesc}>{v.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 7. ART & PATRIMOINE ===== */}
      <section className={styles.patrimoine}>
        <div className={styles.container}>
          <span className={styles.surtitreClair}>Art & Patrimoine</span>
          <h2 className={styles.titreClair}>Un héritage gravé dans la pierre et l'or</h2>
          <p className={styles.sectionIntro}>
            Le Mali est l'un des pays les plus riches d'Afrique en matière de patrimoine.
            Des mosquées millénaires aux masques sacrés, chaque œuvre porte l'empreinte
            d'une civilisation fière et vivante.
          </p>
          <div className={styles.patrimoineGrid}>
            {patrimoine.map(p => (
              <div key={p.titre} className={styles.patrimoineCard}>
                <div className={styles.patrimoineImageWrapper}>
                  <img src={p.photo} alt={p.titre} className={styles.patrimoineImage} />
                </div>
                <div className={styles.patrimoineInfo}>
                  <h3 className={styles.patrimoineNom}>{p.titre}</h3>
                  <p className={styles.patrimoineDesc}>{p.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CITATION FINALE ===== */}
      <section className={styles.citation}>
        <blockquote>
          <p>"Un peuple sans culture est un peuple sans âme."</p>
          <cite>— Proverbe malien</cite>
        </blockquote>
      </section>

    </div>
  )
}
