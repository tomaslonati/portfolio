import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ExternalLink, X, ChevronLeft, ChevronRight, Images } from 'lucide-react'
import { GithubIcon } from '../SocialIcons'
import { fadeUpVariant } from '../../utils/animations'
import { PROJECT_IMAGES } from '../../data/content'

interface ProjectItem {
  id: string
  name: string
  short: string
  description: string
  stack: string[]
  link: string | null
  github: string | null
  category: string
}

interface Props {
  project: ProjectItem
}

// Thumbnail con efecto Dribbble: scroll de top a bottom al hover (para full-page screenshots)
function ScrollPreview({
  src,
  alt,
  onClick,
}: {
  src: string
  alt: string
  onClick: () => void
}) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseEnter = () => {
    if (ref.current) ref.current.style.backgroundPosition = 'bottom center'
  }
  const handleMouseLeave = () => {
    if (ref.current) ref.current.style.backgroundPosition = 'top center'
  }

  return (
    <div
      ref={ref}
      role="button"
      aria-label={`Ver imágenes de ${alt}`}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="h-56 w-full cursor-pointer"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: '100% auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        transition: 'background-position 5s ease-in-out',
      }}
    />
  )
}

// Thumbnail normal para imágenes tipo viewport
function StaticPreview({
  src,
  alt,
  onClick,
}: {
  src: string
  alt: string
  onClick: () => void
}) {
  return (
    <div
      className="h-56 overflow-hidden cursor-pointer group"
      onClick={onClick}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
      />
    </div>
  )
}

export default function ProjectCard({ project }: Props) {
  const { t } = useTranslation()
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIdx, setLightboxIdx] = useState(0)

  const images = PROJECT_IMAGES[project.id]
  const hasImages = images && images.thumb !== ''
  const gallery = images?.gallery ?? []

  const openLightbox = (idx: number) => {
    setLightboxIdx(idx)
    setLightboxOpen(true)
  }

  const prev = () => setLightboxIdx((i) => (i - 1 + gallery.length) % gallery.length)
  const next = () => setLightboxIdx((i) => (i + 1) % gallery.length)

  const categoryIsAcademic =
    project.category === 'Académico' || project.category === 'Academic'

  const currentImage = gallery[lightboxIdx]

  return (
    <>
      <motion.article
        variants={fadeUpVariant}
        whileHover={{ y: -4, boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}
        transition={{ duration: 0.2 }}
        className="bg-surface border border-border rounded-2xl overflow-hidden flex flex-col"
      >
        {/* Thumbnail */}
        <div className="relative">
          {hasImages ? (
            images.thumbFullPage ? (
              <ScrollPreview src={images.thumb} alt={project.name} onClick={() => openLightbox(0)} />
            ) : (
              <StaticPreview src={images.thumb} alt={project.name} onClick={() => openLightbox(0)} />
            )
          ) : (
            <div className="h-56 bg-accent/5 flex items-center justify-center">
              <span className="text-5xl font-serif font-bold text-accent/20">{project.name[0]}</span>
            </div>
          )}

          {/* Overlay badges */}
          <div className="absolute top-3 left-3 right-3 flex items-start justify-between pointer-events-none">
            <span
              className={`text-xs font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${
                categoryIsAcademic
                  ? 'bg-purple-100/90 text-purple-700'
                  : 'bg-white/90 text-green-700'
              }`}
            >
              {project.category}
            </span>
            {gallery.length > 1 && (
              <span className="flex items-center gap-1 text-xs text-white bg-black/50 rounded-full px-2.5 py-1 backdrop-blur-sm">
                <Images size={11} />
                {gallery.length}
              </span>
            )}
          </div>

          {/* Scroll hint for full-page images */}
          {hasImages && images.thumbFullPage && (
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-white bg-black/40 rounded-full px-3 py-1 backdrop-blur-sm pointer-events-none opacity-70">
              hover to scroll
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6 flex flex-col flex-1">
          <h3 className="text-lg font-semibold text-accent mb-2">{project.name}</h3>
          <p className="text-sm font-light text-muted leading-relaxed mb-4 flex-1">
            {project.short}
          </p>

          {/* Stack */}
          <div className="flex flex-wrap gap-2 mb-5">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs font-medium text-muted bg-bg border border-border rounded-full px-2.5 py-0.5"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex gap-3 flex-wrap">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-surface bg-accent rounded-full px-4 py-2 hover:opacity-80 transition-opacity"
              >
                {t('projects.view_project')}
                <ExternalLink size={12} />
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-accent border border-border rounded-full px-4 py-2 hover:bg-accent hover:text-surface hover:border-accent transition-all"
              >
                <GithubIcon size={12} />
                {t('projects.view_github')}
              </a>
            )}
            {hasImages && gallery.length > 0 && (
              <button
                onClick={() => openLightbox(0)}
                className="flex items-center gap-1.5 text-xs font-semibold text-muted border border-border rounded-full px-4 py-2 hover:bg-bg transition-colors"
              >
                <Images size={12} />
                {gallery.length} {gallery.length === 1 ? 'imagen' : 'imágenes'}
              </button>
            )}
          </div>
        </div>
      </motion.article>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && gallery.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setLightboxOpen(false)}
          >
            {/* Close */}
            <button
              className="absolute top-4 right-4 text-white/60 hover:text-white z-10 p-2"
              onClick={() => setLightboxOpen(false)}
              aria-label="Cerrar"
            >
              <X size={24} />
            </button>

            {/* Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-white/50 text-sm z-10">
              {lightboxIdx + 1} / {gallery.length}
            </div>

            {/* Image container */}
            <motion.div
              key={lightboxIdx}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="relative flex items-center justify-center px-14 w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {currentImage.fullPage ? (
                /* Full-page: scrollable container */
                <div
                  className="overflow-y-auto rounded-xl"
                  style={{ maxHeight: '88vh', maxWidth: 'min(1100px, 90vw)' }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={currentImage.src}
                    alt={`${project.name} ${lightboxIdx + 1}`}
                    className="w-full h-auto block"
                    draggable={false}
                  />
                </div>
              ) : (
                /* Viewport screenshot: fit in screen */
                <img
                  src={currentImage.src}
                  alt={`${project.name} ${lightboxIdx + 1}`}
                  className="rounded-xl object-contain"
                  style={{ maxHeight: '88vh', maxWidth: 'min(1100px, 90vw)' }}
                  draggable={false}
                />
              )}

              {/* Scroll hint */}
              {currentImage.fullPage && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-white/40 pointer-events-none">
                  scroll para ver la página completa
                </div>
              )}
            </motion.div>

            {/* Navigation arrows */}
            {gallery.length > 1 && (
              <>
                <button
                  onClick={(e) => { e.stopPropagation(); prev() }}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors z-10"
                  aria-label="Anterior"
                >
                  <ChevronLeft size={22} />
                </button>
                <button
                  onClick={(e) => { e.stopPropagation(); next() }}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 rounded-full p-3 text-white transition-colors z-10"
                  aria-label="Siguiente"
                >
                  <ChevronRight size={22} />
                </button>
              </>
            )}

            {/* Dot indicators */}
            {gallery.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {gallery.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIdx(i) }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === lightboxIdx ? 'bg-white scale-125' : 'bg-white/30'
                    }`}
                    aria-label={`Imagen ${i + 1}`}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
