import React from 'react'
import { ArrowRight, CreditCard, FileText, BarChart3 } from 'lucide-react'

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="bg-white border border-zinc-200 shadow-sm shadow-black/5 rounded-md p-6 hover:shadow-md hover:shadow-black/10 transition-transform duration-200 will-change-transform hover:scale-[1.02]">
    <div className="mb-4"><Icon size={24} strokeWidth={2} /></div>
    <h3 className="text-[18px] font-medium mb-2">{title}</h3>
    <p className="text-zinc-600 text-sm leading-7">{desc}</p>
  </div>
)

const Hero = () => {
  return (
    <section className="px-6 md:px-10 lg:px-20 pt-20 md:pt-28 pb-16 md:pb-24 bg-white border-b border-zinc-200">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="font-serif text-[40px] md:text-[56px] leading-[1.1] font-semibold tracking-tight">
          Debt freedom, engineered with monochrome precision
        </h1>
        <p className="mt-5 text-zinc-600 text-[16px] leading-8 max-w-2xl mx-auto">
          Solvio unifies loan takeover, targeted consultation, and micro-SIP auto-repay into one
          elegant, distraction-free platform. Swiss banking meets Apple minimalism.
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <a href="#loan" className="inline-flex items-center gap-2 bg-black text-white px-6 md:px-8 py-3 md:py-3.5 text-sm tracking-tight hover:scale-[1.02] transition-transform" style={{borderRadius:0}}>
            Start Loan Takeover <ArrowRight size={18} />
          </a>
          <a href="#pricing" className="inline-flex items-center gap-2 bg-white border-2 border-black text-black px-6 md:px-8 py-3 md:py-3.5 text-sm tracking-tight hover:bg-black hover:text-white transition-colors" style={{borderRadius:0}}>
            View Pricing
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
        <Feature icon={CreditCard} title="Loan Takeover" desc="Refinance high-interest debt with a minimalist 6-step flow and transparent, competitive rates." />
        <Feature icon={FileText} title="1-on-1 Consultation" desc="Single-column assessments, elegant PDF reports, and expert guidance with clean calendars." />
        <Feature icon={BarChart3} title="Micro-SIP Auto-Repay" desc="Automated contributions from income with stark line charts and measurable progress." />
      </div>
    </section>
  )
}

export default Hero
