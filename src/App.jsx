import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Accueil from './pages/Accueil.jsx'
import Histoire from './pages/Histoire.jsx'
import Culture from './pages/Culture.jsx'
import Geographie from './pages/Geographie.jsx'
import Galerie from './pages/Galerie.jsx'
import MaliAujourdhui from './pages/MaliAujourdhui.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/histoire" element={<Histoire />} />
          <Route path="/culture" element={<Culture />} />
          <Route path="/geographie" element={<Geographie />} />
          <Route path="/galerie" element={<Galerie />} />
          <Route path="/mali-aujourdhui" element={<MaliAujourdhui />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
