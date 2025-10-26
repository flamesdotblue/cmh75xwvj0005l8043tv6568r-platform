import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, CreditCard, FileText, BarChart3 } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.2 }}
    className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm"
    style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}
  >
    <div className="mb-4"><Icon size={24} strokeWidth={2} /></div>
    <h3 className="text-[18px] font-medium mb-2">{title}</h3>
    <p className="text-[#4A4A4A] text-sm leading-7">{desc}</p>
  </motion.div>
)

const Hero = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 pt-16 md:pt-24 pb-12 md:pb-16 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-semibold tracking-tight"
        >
          Debt freedom, engineered with monochrome precision
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05 }}
          className="mt-5 text-[#4A4A4A] text-[16px] leading-8 max-w-2xl mx-auto"
        >
          Solvio unifies loan takeover, targeted consultation, and micro-SIP auto-repay into a clean, high-contrast platform.
        </motion.p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#solutions" className="inline-flex items-center gap-2 bg-black text-white px-6 md:px-8 py-3 md:py-3.5 text-sm tracking-tight hover:scale-[1.02] transition-transform" style={{borderRadius:0}}>
            Explore Solutions <ArrowRight size={18} />
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-white border-2 border-black text-black px-6 md:px-8 py-3 md:py-3.5 text-sm tracking-tight hover:bg-black hover:text-white transition-colors" style={{borderRadius:0}}>
            View Pricing
          </a>
        </div>
      </div>

      <div id="solutions" className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Feature icon={CreditCard} title="Loan Takeover" desc="Refinance high-interest debt with a minimalist 6-step flow and transparent, competitive rates." />
        <Feature icon={FileText} title="1-on-1 Consultation" desc="Single-column assessments, elegant reports, and expert guidance with a clean calendar." />
        <Feature icon={BarChart3} title="Micro-SIP Auto-Repay" desc="Automated contributions from income with stark line charts and measurable progress." />
      </div>
    </section>
  )
}

export default Hero
