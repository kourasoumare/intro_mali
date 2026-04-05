import { useState, useEffect, useRef } from 'react'
import styles from './Histoire.module.css'

// Photos de chaque section
const PHOTO_HERO         = '/images/empire.jpeg'
const PHOTO_GHANA        = '/images/histoire.jpeg'
const PHOTO_ghana        = '/images/ghana.jpeg'  
const PHOTO_SOUNDIATA    = '/images/soundjata.jpeg'
const PHOTO_MANSA        = '/images/mansamoussa.jpeg'
const PHOTO_SONGHAI      = '/images/tombouctou.jpeg'
const PHOTO_ASKIA        = '/images/askia.jpeg'
const PHOTO_COLONIAL     = '/images/coloni.jpeg'
const PHOTO_INDEPENDANCE = '/images/monu.jpeg'
const PHOTO_HERITAGE     = '/images/collagemali.jpeg'





const friseEvenements = [
  { annee: '~300', titre: 'Empire du Ghana',             couleur: '#C8922A' },
  { annee: '1235', titre: 'Empire du Mali',              couleur: '#1A5C38' },
  { annee: '1324', titre: 'Pèlerinage de Mansa Moussa', couleur: '#E8B84B' },
  { annee: '1464', titre: 'Empire Songhaï',              couleur: '#8B2119' },
  { annee: '1493', titre: "Règne d'Askia le Grand",      couleur: '#C8922A' },
  { annee: '1880', titre: 'Colonisation française',      couleur: '#4A3820' },
  { annee: '1960', titre: 'Indépendance du Mali',        couleur: '#14A060' },
]

const figures = [
  {
    nom: 'Soundiata Keïta',
    titre: 'Le Lion du Mali',
    periode: 'XIIIe siècle',
    photo: '/images/empire.jpeg',
    description: "Fondateur de l'Empire du Mali, vainqueur de la bataille de Kirina en 1235. Il unifia les peuples mandingues et bâtit l'un des empires les plus puissants d'Afrique. La Charte du Manden, l'une des premières déclarations des droits de l'homme au monde, lui est attribuée.",
    couleur: '#1A5C38',
  },
  {
    nom: 'Mansa Moussa',
    titre: "L'Homme le plus riche du monde",
    periode: 'XIVe siècle',
    photo: '/images/mosquedjene.jpeg',
    description: "Sultan de l'Empire du Mali, son pèlerinage à La Mecque en 1324 avec 60 000 personnes et des tonnes d'or révéla la richesse du Mali au monde entier. Son règne marqua l'âge d'or absolu de l'empire.",
    couleur: '#C8922A',
  },
  {
    nom: 'Askia le Grand',
    titre: "Le Bâtisseur de l'Empire Songhaï",
    periode: 'XVe–XVIe siècle',
    photo: '/images/tombouctou.jpeg',
    description: "Souverain de l'Empire Songhaï, il transforma Tombouctou en capitale du savoir mondial, accueillant 25 000 étudiants à l'université de Sankoré. Il modernisa l'administration et unifia les poids et mesures de l'empire.",
    couleur: '#8B2119',
  },
  {
    nom: 'Modibo Keïta',
    titre: "Père de l'indépendance",
    periode: 'XXe siècle',
    photo: '/images/monu.jpeg',
    description: "Premier président de la République du Mali, il proclama l'indépendance le 22 septembre 1960 — tournant majeur de l'histoire du pays. Il incarne la renaissance d'une nation fière et souveraine après des décennies de colonisation.",
    couleur: '#14A060',
  },
]

export default function Histoire() {
  const [figureActive, setFigureActive] = useState(0)
  const [friseVisible, setFriseVisible] = useState(false)
  const friseRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setFriseVisible(true) },
      { threshold: 0.15 }
    )
    if (friseRef.current) observer.observe(friseRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={styles.page}>

      {/*  HERO */}
      <section className={styles.hero} style={{ backgroundImage: `url(${PHOTO_HERO})` }}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContenu}>
          <span className={styles.heroSurtitre}>Histoire du Mali</span>
          <h1 className={styles.heroTitre}>
            Voyage à travers<br />l'histoire du Mali
          </h1>
          <p className={styles.heroTexte}>
            Des premiers empires aux jours de l'indépendance, le Mali a écrit l'une des
            pages les plus glorieuses de l'histoire africaine. Un récit de grandeur,
            de conquêtes et de résilience — raconté ici, étape par étape.
          </p>
          <div className={styles.heroBarre}>
            <span style={{ background: '#14A060' }}></span>
            <span style={{ background: '#FCD116' }}></span>
            <span style={{ background: '#CE1126' }}></span>
          </div>
          <span className={styles.heroInvite}>↓ Commencer le voyage</span>
        </div>
      </section>

      {/*  FRISE CHRONOLOGIQUE */}
      <section className={styles.friseSection} ref={friseRef}>
        <div className={styles.container}>
          <span className={styles.surtitreClair}>Chronologie</span>
          <h2 className={styles.titreClair}>3 000 ans d'histoire en un coup d'œil</h2>
          <div className={styles.frise}>
            <div className={styles.friseLigne}></div>
            {friseEvenements.map((ev, i) => (
              <div
                key={ev.annee}
                className={`${styles.friseItem} ${friseVisible ? styles.friseVisible : ''}`}
                style={{ animationDelay: `${i * 0.12}s` }}
              >
                <div className={styles.frisePoint} style={{ background: ev.couleur, boxShadow: `0 0 0 4px ${ev.couleur}33` }}></div>
                <div className={styles.friseContenu} style={{ borderTopColor: ev.couleur }}>
                  <span className={styles.friseAnnee} style={{ color: ev.couleur }}>{ev.annee}</span>
                  <p className={styles.friseTitre}>{ev.titre}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  INTRO  */}
      <section className={styles.intro}>
        <div className={styles.container}>
          <div className={styles.introGrid}>
            <div className={styles.introTexte}>
              <span className={styles.surtitre}>Introduction</span>
              <h2 className={styles.titreSec}>Au commencement d'une grande histoire</h2>
              <p>Long avant que le monde occidental n'atteigne son apogée, l'Afrique de l'Ouest était déjà le théâtre de civilisations avancées, de routes commerciales prospères et de royaumes puissants.</p>
              <p>Le territoire qui forme aujourd'hui le <strong>Mali</strong> a été le berceau de trois empires parmi les plus influents de l'histoire africaine. Chacun d'eux, à sa manière, a façonné la culture, l'identité et le rayonnement de cette région du monde.</p>
              <p>Cette histoire se raconte dans l'ordre — du plus ancien au plus récent — comme un long voyage à travers le temps. Prenez le temps de la découvrir.</p>
            </div>
            <div className={styles.introVisuel}>
              <img src={PHOTO_GHANA} alt="Territoire historique du Mali" className={styles.introImg} />
              <span className={styles.introLegende}>Territoire des grands empires ouest-africains</span>
            </div>
          </div>
        </div>
      </section>

      {/* EMPIRE DU GHANA  */}
      <section className={styles.chapSombre}>
        <div className={styles.container}>
          <div className={styles.chapGrid}>
            <div className={styles.chapPhoto}>
              <img src={PHOTO_ghana} alt="Empire du Ghana" className={styles.chapImg} />
            </div>
            <div className={styles.chapTexte}>
              <span className={styles.chapEpoque}>~ 300 apr. J.-C.</span>
              <span className={styles.surtitreClair}>Chapitre I</span>
              <h2 className={styles.titreClair}>L'Empire du Ghana<br /><em>Le premier grand règne</em></h2>
              <p>Tout commence bien avant le Mali que l'on connaît. L'<strong>Empire du Ghana</strong>, l'un des premiers grands royaumes d'Afrique de l'Ouest, s'épanouit à partir du IIIe siècle sur un territoire couvrant le nord du Mali actuel et le sud de la Mauritanie.</p>
              <p>Sa richesse repose sur le <strong>commerce transsaharien</strong> — l'or venant du sud contre le sel venant du nord. Une formule simple, redoutablement efficace, qui fait du Ghana la plaque tournante des échanges entre l'Afrique subsaharienne et la Méditerranée.</p>
              <p>Cet empire jette les bases d'une civilisation prospère. Mais comme toutes les grandes puissances, il s'affaiblit — ouvrant la voie à une nouvelle force, encore plus grande.</p>
              <div className={styles.transition}>
                <span>L'Empire du Ghana s'efface. Une nouvelle étoile se lève.</span>
                <span className={styles.arrow}>↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  SOUNDIATA  */}
      <section className={styles.chapClair}>
        <div className={styles.container}>
          <div className={`${styles.chapGrid} ${styles.chapGridReverse}`}>
            <div className={styles.chapTexte}>
              <span className={styles.chapEpoque} style={{ color: '#1A5C38' }}>1235 apr. J.-C.</span>
              <span className={styles.surtitre}>Chapitre II</span>
              <h2 className={styles.titreSec}>Soundiata Keïta<br /><em>Le Lion du Mali</em></h2>
              <p>L'histoire retient rarement les noms des hommes ordinaires. Mais <strong>Soundiata Keïta</strong> n'était pas un homme ordinaire.</p>
              <p>Né avec une infirmité qui l'empêchait de marcher, moqué dès l'enfance, contraint à l'exil — rien ne semblait le destiner à la grandeur. Pourtant, en 1235, il revient, rassemble les peuples mandingues, et à la <strong>bataille de Kirina</strong>, il écrase le roi Soumaoro Kanté.</p>
              <p>Ce jour-là, l'<strong>Empire du Mali</strong> naît. Sous son règne, le territoire s'étend des côtes atlantiques jusqu'aux boucles du Niger. La <strong>Charte du Manden</strong>, l'une des premières déclarations des droits de l'homme au monde, lui est attribuée.</p>
              <div className={styles.transition}>
                <span>L'empire est fondé. Son successeur va le hisser au sommet du monde.</span>
                <span className={styles.arrow}>↓</span>
              </div>
            </div>
            <div className={styles.chapPhoto}>
              <img src={PHOTO_SOUNDIATA} alt="Soundiata Keïta" className={styles.chapImg} />
            </div>
          </div>
        </div>
      </section>

      {/*  MANSA MOUSSA  */}
      <section className={styles.mansaSection}>
        <div className={styles.container}>
          <span className={styles.chapEpoque} style={{ color: 'var(--or-clair)', display: 'block', textAlign: 'center' }}>1312 — 1337</span>
          <span className={styles.surtitreClair} style={{ textAlign: 'center', display: 'block' }}>Chapitre III</span>
          <h2 className={styles.titreClair} style={{ textAlign: 'center' }}>Mansa Moussa — L'âge d'or du Mali</h2>
          <div className={styles.mansaGrid}>
            <div className={styles.mansaPhoto}>
              <img src={PHOTO_MANSA} alt="Mansa Moussa" className={styles.mansaImg} />
            </div>
            <div className={styles.mansaTexte}>
              <p>Si Soundiata a fondé l'empire, c'est <strong>Mansa Moussa</strong> qui l'a rendu immortel aux yeux du monde.</p>
              <p>En 1324, il entreprend un pèlerinage à La Mecque d'une ampleur jamais vue — une suite de <strong>60 000 personnes</strong>, des centaines de chameaux chargés d'or. Son passage provoque une crise économique en Égypte : il y avait distribué tant d'or que la valeur du métal s'effondra pendant des années.</p>
              <p>Ce pèlerinage place le Mali sur toutes les cartes du monde connu. <strong>Tombouctou</strong> devient une capitale intellectuelle de premier plan. L'université de Sankoré attire des savants de partout.</p>
              <div className={styles.mansaChiffres}>
                <div className={styles.mansaChiffre}><span className={styles.mansaVal}>60 000</span><span>personnes dans sa suite</span></div>
                <div className={styles.mansaChiffre}><span className={styles.mansaVal}>1324</span><span>pèlerinage à La Mecque</span></div>
                <div className={styles.mansaChiffre}><span className={styles.mansaVal}>25 ans</span><span>de règne glorieux</span></div>
              </div>
            </div>
          </div>
          <div className={styles.transition} style={{ color: 'rgba(245,230,195,0.6)', textAlign: 'center', paddingTop: '2rem' }}>
            <span>L'empire brille de mille feux. Mais la lumière finit toujours par décliner.</span>
            <span className={styles.arrow}>↓</span>
          </div>
        </div>
      </section>

      {/* EMPIRE SONGHAÏ  */}
      <section className={styles.chapClair}>
        <div className={styles.container}>
          <div className={styles.chapGrid}>
            <div className={styles.chapPhoto}>
              <img src={PHOTO_SONGHAI} alt="Empire Songhaï" className={styles.chapImg} />
            </div>
            <div className={styles.chapTexte}>
              <span className={styles.chapEpoque} style={{ color: '#8B2119' }}>~ 1464</span>
              <span className={styles.surtitre}>Chapitre IV</span>
              <h2 className={styles.titreSec}>L'Empire Songhaï<br /><em>Le flambeau est repris</em></h2>
              <p>Toute grande puissance connaît son déclin. Après Mansa Moussa, l'Empire du Mali s'affaiblit — guerres internes, rébellions, pertes de territoires.</p>
              <p>C'est alors qu'une nouvelle force émerge depuis Gao, à l'est. L'<strong>Empire Songhaï</strong>, sous la conduite de Sonni Ali Ber, reprend le flambeau et s'impose comme la nouvelle puissance dominante d'Afrique de l'Ouest.</p>
              <p>Tombouctou passe sous son contrôle. Le commerce transsaharien continue de prospérer. Une nouvelle ère de grandeur s'ouvre sur ce territoire millénaire.</p>
              <div className={styles.transition}>
                <span>Un nouveau souverain va porter cet empire à son zénith.</span>
                <span className={styles.arrow}>↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  ASKIA MOHAMMAD */}
      <section className={styles.chapSombre}>
        <div className={styles.container}>
          <div className={`${styles.chapGrid} ${styles.chapGridReverse}`}>
            <div className={styles.chapTexte}>
              <span className={styles.chapEpoque}>1493 — 1528</span>
              <span className={styles.surtitreClair}>Chapitre V</span>
              <h2 className={styles.titreClair}>Askia le Grand<br /><em>L'architecte d'un empire</em></h2>
              <p><strong>Askia Mohammad Touré</strong> — Askia le Grand — prend les rênes de l'Empire Songhaï en 1493. Là où ses prédécesseurs avaient conquis, lui construit.</p>
              <p>Il réforme l'administration, organise le commerce, unifie les poids et mesures. Sous son règne, <strong>Tombouctou</strong> atteint son apogée intellectuel — l'université de Sankoré accueille jusqu'à 25 000 étudiants.</p>
              <p>Askia comprit que la force d'un empire ne réside pas seulement dans ses armes, mais dans ses idées. Il reste à ce jour l'une des figures les plus respectées de l'histoire malienne.</p>
              <div className={styles.transition}>
                <span>Les empires passent. Une nouvelle ère arrive — sombre et douloureuse.</span>
                <span className={styles.arrow}>↓</span>
              </div>
            </div>
            <div className={styles.chapPhoto}>
              <img src={PHOTO_ASKIA} alt="Askia le Grand" className={styles.chapImg} />
            </div>
          </div>
        </div>
      </section>

      {/*  COLONISATION  */}
      <section className={styles.colonial}>
        <div className={styles.container}>
          <div className={styles.chapGrid}>
            <div className={styles.chapPhoto}>
              <img src={PHOTO_COLONIAL} alt="Période coloniale" className={styles.chapImg} />
            </div>
            <div className={styles.chapTexte}>
              <span className={styles.chapEpoque} style={{ color: '#6B4C2A' }}>XIXe — XXe siècle</span>
              <span className={styles.surtitre}>Chapitre VI</span>
              <h2 className={styles.titreSec}>La colonisation<br /><em>Une parenthèse douloureuse</em></h2>
              <p>Après la chute des grands empires, le territoire malien entre dans une période trouble. Au XIXe siècle, la France étend progressivement son emprise sur l'Afrique de l'Ouest.</p>
              <p>Le territoire devient le <strong>Soudan français</strong>, intégré à l'Afrique Occidentale Française. Des figures comme <strong>Samori Touré</strong> mènent de longues résistances contre l'occupation.</p>
              <p>La colonisation impose ses lois, ses structures, ses frontières. Elle dure près d'un siècle. Et pourtant, l'âme du Mali ne s'éteint pas. Quelque chose couve — un désir profond de liberté retrouvée.</p>
              <div className={styles.transition}>
                <span>La résistance grandit. Le monde change. L'heure de la liberté approche.</span>
                <span className={styles.arrow}>↓</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*  INDÉPENDANCE  */}
      <section className={styles.independance}>
        <div className={styles.container}>
          <span className={styles.chapEpoque} style={{ color: '#FCD116', display: 'block', textAlign: 'center' }}>22 septembre 1960</span>
          <span className={styles.surtitreClair} style={{ textAlign: 'center', display: 'block' }}>Chapitre VII</span>
          <h2 className={styles.titreClair} style={{ textAlign: 'center' }}>L'Indépendance — Le Mali se lève</h2>
          <div className={styles.independanceGrid}>
            <div className={styles.independanceTexte}>
              <p>Le <strong>22 septembre 1960</strong> est une date gravée dans la mémoire collective malienne. Ce jour-là, le Mali proclame son indépendance. Un peuple retient son souffle, puis explose de joie.</p>
              <p><strong>Modibo Keïta</strong> devient le premier président de la République du Mali. Après des siècles de domination, le Mali reprend le contrôle de son destin.</p>
              <p>L'indépendance n'est pas seulement une victoire politique. C'est la fin d'une longue parenthèse — et le début d'un nouveau chapitre pour un pays qui a tant à offrir au monde.</p>
            </div>
            <div className={styles.independanceSymbole}>
              <img src={PHOTO_INDEPENDANCE} alt="Indépendance" className={styles.independanceImg} />
              <div className={styles.drapeau}>
                <div style={{ background: '#14A060' }}></div>
                <div style={{ background: '#FCD116' }}></div>
                <div style={{ background: '#CE1126' }}></div>
              </div>
              <p className={styles.indDate}>22 septembre 1960</p>
              <p className={styles.indLegende}>Jour de l'indépendance du Mali</p>
            </div>
          </div>
        </div>
      </section>

      {/*  GRANDES FIGURES  */}
     {/* <section className={styles.figuresSection}>
        <div className={styles.container}>
          <span className={styles.surtitre}>Les bâtisseurs</span>
          <h2 className={styles.titreSec}>Les grandes figures de l'histoire malienne</h2>
          <div className={styles.onglets}>
            {figures.map((f, i) => (
              <button
                key={f.nom}
                className={`${styles.onglet} ${figureActive === i ? styles.ongletActif : ''}`}
                style={{ '--c': f.couleur }}
                onClick={() => setFigureActive(i)}
              >
                {f.nom}
              </button>
            ))}
          </div>
          <div className={styles.figureAffiche} key={figureActive}>
            <div className={styles.figureImageWrapper}>
              <img src={figures[figureActive].photo} alt={figures[figureActive].nom} className={styles.figureImage} />
            </div>
            <div className={styles.figureInfo}>
              <span className={styles.figurePeriode}>{figures[figureActive].periode}</span>
              <h3 className={styles.figureNom}>{figures[figureActive].nom}</h3>
              <span className={styles.figureTitre} style={{ color: figures[figureActive].couleur }}>{figures[figureActive].titre}</span>
              <p className={styles.figureDesc}>{figures[figureActive].description}</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/*  HÉRITAGE  */}
      <section className={styles.heritage}>
        <img src={PHOTO_HERITAGE} alt="Héritage malien" className={styles.heritageBg} />
        <div className={styles.heritageOverlay}></div>
        <div className={styles.heritageContenu}>
          <div className={styles.container}>
            <span className={styles.surtitreClair} style={{ textAlign: 'center', display: 'block' }}>Chapitre final</span>
            <h2 className={styles.titreClair} style={{ textAlign: 'center' }}>Un héritage vivant</h2>
            <p className={styles.heritageTexte}>
              Aujourd'hui, le Mali porte en lui des millénaires d'histoire. Les empires ont disparu,
              mais leur mémoire est vivante — dans les chants des griots, dans les manuscrits de
              Tombouctou, dans les masques des Dogons, dans les mosquées de Djenné.
            </p>
            <p className={styles.heritageTexte}>
              L'indépendance de 1960 n'est pas la fin de cette histoire. C'est une nouvelle page —
              écrite par un peuple fier, debout, qui sait d'où il vient et qui n'a pas fini de
              montrer au monde ce qu'il est capable d'accomplir.
            </p>
            <blockquote className={styles.heritageQuote}>
              <p>"Un peuple qui ne connaît pas son histoire est comme un arbre sans racines."</p>
              <cite>— Marcus Garvey</cite>
            </blockquote>
          </div>
        </div>
      </section>

    </div>
  )
}
