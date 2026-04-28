import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GraduationCap, Award } from 'lucide-react'
import { fadeUpVariant, containerVariant, slideLeftVariant } from '../../utils/animations'

interface EducationItem {
  id: string
  title: string
  institution: string
  period: string
  detail: string
}

const ICONS: Record<string, React.ReactNode> = {
  uade: <GraduationCap size={24} />,
  aws: <Award size={24} />,
}

export default function Education() {
  const { t } = useTranslation()
  const items = t('education.items', { returnObjects: true }) as EducationItem[]

  return (
    <section id="education" className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideLeftVariant}
          className="text-xs font-semibold uppercase tracking-widest text-muted mb-4"
        >
          {t('education.section_label')}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="font-serif font-bold text-accent leading-tight mb-16"
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
        >
          {t('education.section_label')}
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={containerVariant}
          className="flex flex-col gap-6"
        >
          {items.map((item) => (
            <motion.div
              key={item.id}
              variants={fadeUpVariant}
              className="bg-surface border border-border rounded-2xl p-8 flex gap-6 items-start"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center text-accent">
                {ICONS[item.id] ?? <GraduationCap size={24} />}
              </div>
              <div>
                <h3 className="text-base font-semibold text-accent mb-1">{item.title}</h3>
                <p className="text-sm font-medium text-muted mb-1">{item.institution}</p>
                <p className="text-xs text-muted mb-3">{item.period}</p>
                <p className="text-sm font-light text-muted">{item.detail}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
