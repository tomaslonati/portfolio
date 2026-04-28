import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GithubIcon, LinkedinIcon } from '../SocialIcons'
import { TECH_MARQUEE, SOCIAL_LINKS } from '../../data/content'
import { heroLineVariant } from '../../utils/animations'

const techList = [...TECH_MARQUEE, ...TECH_MARQUEE]

export default function Hero() {
  const { t } = useTranslation()

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="min-h-screen flex flex-col bg-bg pt-16">

      {/* ── Main content ── */}
      <div className="max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col justify-center py-20">

        {/* Title */}
        <div className="mb-12">
          <div className="overflow-hidden">
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={heroLineVariant}
              className="font-serif font-bold leading-[1] text-accent"
              style={{ fontSize: 'clamp(64px, 11vw, 136px)' }}
            >
              {t('hero.title_line1')}
            </motion.div>
          </div>
          <div className="overflow-hidden pb-3">
            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={heroLineVariant}
              className="font-serif font-bold leading-[1] text-accent"
              style={{ fontSize: 'clamp(64px, 11vw, 136px)' }}
            >
              {t('hero.title_line2')}
            </motion.div>
          </div>
        </div>

        {/* Divider */}
        <motion.hr
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
          className="border-border mb-10"
        />

        {/* ── Three-column row ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.5 }}
          className="grid grid-cols-1 lg:grid-cols-[160px_1fr_auto] gap-10 lg:gap-16 items-start"
        >
          {/* Col 1 — identity */}
          <div className="flex flex-row lg:flex-col gap-3 lg:gap-1.5">
            <p className="text-sm font-semibold text-accent">{t('hero.name')}</p>
            <span className="text-muted text-sm lg:hidden">·</span>
            <p className="text-sm font-light text-muted">{t('hero.location')}</p>
          </div>

          {/* Col 2 — bio */}
          <p className="text-[15px] font-light text-muted leading-relaxed max-w-2xl">
            {t('about.bio')}
          </p>

          {/* Col 3 — links + CTAs */}
          <div className="flex flex-col gap-3 lg:items-end">
            {/* Social */}
            <div className="flex gap-2">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors px-3 py-1.5 rounded-full border border-border hover:border-accent"
              >
                <GithubIcon size={13} />
                GitHub
              </a>
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-medium text-muted hover:text-accent transition-colors px-3 py-1.5 rounded-full border border-border hover:border-accent"
              >
                <LinkedinIcon size={13} />
                LinkedIn
              </a>
            </div>

            {/* CTAs */}
            <div className="flex gap-2 lg:flex-col lg:items-end">
              <button
                onClick={() => scrollTo('projects')}
                className="px-5 py-2 bg-accent text-surface text-xs font-semibold rounded-full hover:opacity-75 transition-opacity whitespace-nowrap"
              >
                {t('hero.cta_projects')} ↓
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-5 py-2 border border-border text-accent text-xs font-semibold rounded-full hover:bg-accent hover:text-surface hover:border-accent transition-all whitespace-nowrap"
              >
                {t('hero.cta_contact')} →
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── Marquee strip ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.85 }}
        className="border-t border-border py-5 overflow-hidden"
      >
        <div className="flex animate-marquee whitespace-nowrap gap-10">
          {techList.map((tech, i) => (
            <span
              key={i}
              className="text-[11px] font-medium text-muted uppercase tracking-[0.15em] shrink-0"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

    </section>
  )
}
