import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Mail, Phone } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '../SocialIcons'
import { fadeUpVariant, containerVariant } from '../../utils/animations'
import { SOCIAL_LINKS } from '../../data/content'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <section id="contact" className="py-28 bg-accent">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
          className="max-w-2xl"
        >
          <motion.h2
            variants={fadeUpVariant}
            className="font-serif font-bold text-surface leading-tight mb-6"
            style={{ fontSize: 'clamp(36px, 5vw, 72px)' }}
          >
            {t('contact.section_label')}
          </motion.h2>
          <motion.p
            variants={fadeUpVariant}
            className="text-base font-light text-surface/60 mb-12"
          >
            {t('contact.tagline')}
          </motion.p>

          <motion.div variants={containerVariant} className="flex flex-col gap-4">
            <motion.a
              variants={fadeUpVariant}
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="inline-flex items-center gap-3 text-surface border border-surface/20 rounded-full px-6 py-3 w-fit hover:bg-surface hover:text-accent transition-all text-sm font-medium"
            >
              <Mail size={16} />
              {t('contact.email_label')} — {SOCIAL_LINKS.email}
            </motion.a>

            <motion.a
              variants={fadeUpVariant}
              href={SOCIAL_LINKS.phoneHref}
              className="inline-flex items-center gap-3 text-surface border border-surface/20 rounded-full px-6 py-3 w-fit hover:bg-surface hover:text-accent transition-all text-sm font-medium"
            >
              <Phone size={16} />
              {SOCIAL_LINKS.phone}
            </motion.a>

            <motion.div variants={fadeUpVariant} className="flex gap-4">
              <a
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-surface/70 border border-surface/20 rounded-full px-5 py-2.5 hover:bg-surface hover:text-accent transition-all text-sm font-medium"
              >
                <LinkedinIcon size={16} />
                LinkedIn
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-surface/70 border border-surface/20 rounded-full px-5 py-2.5 hover:bg-surface hover:text-accent transition-all text-sm font-medium"
              >
                <GithubIcon size={16} />
                GitHub
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
