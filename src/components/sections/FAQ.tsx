// components/sections/FAQ.tsx
'use client'

import { motion } from 'framer-motion'
import SectionHeading from '@/components/common/SectionHeading'
import Accordion from '@/components/ui/Accordion'

const faqs = [
  {
    id: '1',
    title: 'What industries does The Aethon Group specialize in?',
    content: 'We work across multiple industries including technology, financial services, healthcare, manufacturing, and consumer goods. Our diverse team brings deep expertise in various sectors, allowing us to provide tailored solutions for each client\'s unique challenges.',
  },
  {
    id: '2',
    title: 'How long does a typical engagement last?',
    content: 'Engagement duration varies based on scope and complexity. Strategic planning projects typically run 8-12 weeks, while comprehensive transformation initiatives may span 6-18 months. We work with you to define clear milestones and deliverables from the outset.',
  },
  {
    id: '3',
    title: 'What is your approach to client collaboration?',
    content: 'We believe in true partnership. Our consultants work alongside your team, transferring knowledge and building capabilities. We maintain open communication through regular check-ins, progress reports, and executive briefings to ensure alignment throughout the engagement.',
  },
  {
    id: '4',
    title: 'How do you measure the success of an engagement?',
    content: 'Success metrics are defined collaboratively at the start of each engagement. We track both quantitative KPIs (revenue growth, cost reduction, efficiency gains) and qualitative outcomes (capability building, organizational alignment). We conduct post-engagement reviews to measure long-term impact.',
  },
  {
    id: '5',
    title: 'Do you offer ongoing support after a project concludes?',
    content: 'Yes, we offer various post-engagement support options including implementation assistance, progress reviews, and retainer arrangements for ongoing advisory services. Many clients continue working with us on new initiatives as their businesses evolve.',
  },
  {
    id: '6',
    title: 'How do you ensure confidentiality?',
    content: 'Confidentiality is paramount. All team members sign comprehensive NDAs, and we maintain strict information security protocols. We never share client information across engagements and have robust data protection measures in place.',
  },
]

export default function FAQ() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              tagline="FAQ"
              title="Frequently Asked Questions"
              description="Find answers to common questions about our services, approach, and what to expect when working with The Aethon Group."
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 p-6 bg-primary-50 rounded-2xl"
            >
              <h4 className="font-semibold text-primary-900 mb-2">
                Still have questions?
              </h4>
              <p className="text-primary-700 text-sm mb-4">
                Our team is here to help. Reach out for a personalized conversation.
              </p>
              <a
                href="/contact"
                className="text-primary-600 font-medium hover:text-primary-700 transition-colors"
              >
                Contact Us →
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Accordion items={faqs} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}