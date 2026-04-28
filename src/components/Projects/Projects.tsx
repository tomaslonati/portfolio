import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { fadeUpVariant, containerVariant, slideLeftVariant } from '../../utils/animations'
import ProjectCard from './ProjectCard'

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

export default function Projects() {
  const { t } = useTranslation()
  const items = t('projects.items', { returnObjects: true }) as ProjectItem[]

  return (
    <section id="projects" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideLeftVariant}
          className="text-xs font-semibold uppercase tracking-widest text-muted mb-4"
        >
          {t('projects.section_label')}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="font-serif font-bold text-accent leading-tight mb-16"
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
        >
          {t('projects.section_label')}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
          className="grid md:grid-cols-2 gap-6"
        >
          {items.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
