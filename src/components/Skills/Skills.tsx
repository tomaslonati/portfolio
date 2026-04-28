import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { fadeUpVariant, containerVariant, slideLeftVariant } from '../../utils/animations'

interface SkillCategory {
  name: string
  items: string[]
}

export default function Skills() {
  const { t } = useTranslation()
  const categories = t('skills.categories', { returnObjects: true }) as SkillCategory[]

  return (
    <section id="skills" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideLeftVariant}
          className="text-xs font-semibold uppercase tracking-widest text-muted mb-4"
        >
          {t('skills.section_label')}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="font-serif font-bold text-accent leading-tight mb-16"
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
        >
          {t('skills.section_label')}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
          className="grid md:grid-cols-3 gap-8"
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={fadeUpVariant}>
              <h3 className="text-sm font-semibold text-accent mb-4 uppercase tracking-wider">
                {cat.name}
              </h3>
              <motion.div
                variants={containerVariant}
                className="flex flex-wrap gap-2"
              >
                {cat.items.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={fadeUpVariant}
                    className="text-sm font-medium text-accent bg-bg border border-border rounded-full px-3 py-1.5"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
