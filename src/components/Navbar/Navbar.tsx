import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const NAV_KEYS = ['experience', 'projects', 'skills', 'education', 'contact'] as const

export default function Navbar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { lang } = useParams<{ lang: string }>()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleLang = () => {
    const newLang = lang === 'es' ? 'en' : 'es'
    navigate(`/${newLang}`)
  }

  const scrollTo = (id: string) => {
    setMenuOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur-sm bg-bg/90 border-b border-border' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo('hero')}
          className="font-serif font-bold text-lg text-accent tracking-tight hover:opacity-70 transition-opacity"
        >
          TL
        </button>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_KEYS.map((key) => (
            <li key={key}>
              <button
                onClick={() => scrollTo(key)}
                className="text-sm font-medium text-muted hover:text-accent transition-colors"
              >
                {t(`nav.${key}`)}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleLang}
            className="hidden md:flex items-center gap-1 text-xs font-semibold border border-border rounded-full px-3 py-1.5 hover:bg-accent/5 hover:border-accent/20 transition-all"
          >
            <span className={lang === 'es' ? 'text-accent' : 'text-muted'}>ES</span>
            <span className="text-muted mx-0.5">|</span>
            <span className={lang === 'en' ? 'text-accent' : 'text-muted'}>EN</span>
          </button>

          <button
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden p-2 text-accent"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-bg border-b border-border"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {NAV_KEYS.map((key) => (
                <li key={key}>
                  <button
                    onClick={() => scrollTo(key)}
                    className="text-sm font-medium text-muted hover:text-accent transition-colors w-full text-left"
                  >
                    {t(`nav.${key}`)}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => { toggleLang(); setMenuOpen(false) }}
                  className="text-xs font-semibold border border-border rounded-full px-3 py-1.5 hover:bg-accent/5 hover:border-accent/20 transition-all"
                >
                  {lang === 'es' ? 'Switch to EN' : 'Cambiar a ES'}
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
