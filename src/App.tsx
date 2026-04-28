import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, Navigate, useParams, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Skills from './components/Skills/Skills'
import Education from './components/Education/Education'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

const LangRedirect = () => {
  const browserLang = navigator.language.startsWith('en') ? 'en' : 'es'
  return <Navigate to={`/${browserLang}`} replace />
}

const Portfolio = () => {
  const { lang } = useParams<{ lang: string }>()
  const { i18n } = useTranslation()
  const navigate = useNavigate()

  useEffect(() => {
    if (lang === 'es' || lang === 'en') {
      i18n.changeLanguage(lang)
    } else {
      navigate('/', { replace: true })
    }
  }, [lang, i18n, navigate])

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </main>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LangRedirect />} />
        <Route path="/:lang" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
