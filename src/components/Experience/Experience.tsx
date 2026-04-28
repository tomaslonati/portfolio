import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { fadeUpVariant, containerVariant, slideLeftVariant } from '../../utils/animations'

interface Job {
  id: string
  role: string
  company: string
  type: string
  period: string
  description: string
}

const TYPE_COLORS: Record<string, string> = {
  'Part-time': 'bg-blue-50 text-blue-700 border border-blue-200',
  'Freelance': 'bg-green-50 text-green-700 border border-green-200',
  'Temporario': 'bg-amber-50 text-amber-700 border border-amber-200',
  'Seasonal': 'bg-amber-50 text-amber-700 border border-amber-200',
}

export default function Experience() {
  const { t } = useTranslation()
  const jobs = t('experience.jobs', { returnObjects: true }) as Job[]

  return (
    <section id="experience" className="py-24 bg-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={slideLeftVariant}
          className="text-xs font-semibold uppercase tracking-widest text-muted mb-4"
        >
          {t('experience.section_label')}
        </motion.p>
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeUpVariant}
          className="font-serif font-bold text-accent leading-tight mb-16"
          style={{ fontSize: 'clamp(28px, 3.5vw, 48px)' }}
        >
          {t('experience.section_label')}
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Animated vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            style={{ transformOrigin: 'top' }}
            className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={containerVariant}
            className="flex flex-col gap-12"
          >
            {jobs.map((job) => (
              <motion.div
                key={job.id}
                variants={fadeUpVariant}
                className="md:pl-10 relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-1.5 top-1.5 w-3 h-3 rounded-full bg-accent hidden md:block" />

                <div className="flex flex-wrap items-start gap-3 mb-2">
                  <span
                    className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
                      TYPE_COLORS[job.type] ?? 'bg-gray-50 text-gray-700 border border-gray-200'
                    }`}
                  >
                    {job.type}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-accent mb-0.5">{job.role}</h3>
                <p className="text-sm font-medium text-accent/70 mb-1">{job.company}</p>
                <p className="text-xs text-muted mb-3">{job.period}</p>
                <p className="text-sm font-light text-muted leading-relaxed max-w-2xl">
                  {job.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
