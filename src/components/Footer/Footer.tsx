import { useTranslation } from 'react-i18next'
import { GithubIcon, LinkedinIcon } from '../SocialIcons'
import { SOCIAL_LINKS } from '../../data/content'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-accent border-t border-surface/10 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-surface/40">
          Tomás Lonati © {new Date().getFullYear()} — {t('footer.rights')}
        </p>
        <div className="flex items-center gap-4">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-surface/40 hover:text-surface transition-colors"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-surface/40 hover:text-surface transition-colors"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>
    </footer>
  )
}
