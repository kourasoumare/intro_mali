import { NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styles from './Navbar.module.css'

const liens = [
  { to: '/', label: 'Accueil' },
  { to: '/histoire', label: 'Histoire' },
  { to: '/culture', label: 'Culture' },
  { to: '/geographie', label: 'Géographie' },
  { to: '/galerie', label: 'Galerie' },
  {/* { to: '/mali-aujourdhui', label: "Mali d'Aujourd'hui" },*/}
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOuvert, setMenuOuvert] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <NavLink to="/" className={styles.logo}>
          <span className={styles.logoSymbol}>✦</span>
          <span>Mali</span>
        </NavLink>
        <nav className={`${styles.nav} ${menuOuvert ? styles.navOuvert : ''}`}>
          {liens.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `${styles.lien} ${isActive ? styles.actif : ''}`}
              onClick={() => setMenuOuvert(false)}
            >
              {label}
            </NavLink>
          ))}
        </nav>
        <button className={styles.burger} onClick={() => setMenuOuvert(!menuOuvert)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </header>
  )
}
