import React from 'react'
import { motion } from 'framer-motion'

const Plan = ({ name, price, period, features, inverted }) => (
  <motion.div whileHover={{ scale: 1.02 }} className={`rounded-md p-6 border ${inverted ? 'bg-black text-white border-black' : 'bg-white text-black border-[#E5E5E5]'} shadow-sm`} style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
    <h3 className="font-serif text-2xl font-semibold">{name}</h3>
    <div className="mt-4 flex items-baseline gap-2">
      <div className="font-mono text-3xl">₹{price.toLocaleString('en-IN')}</div>
      <div className={inverted ? 'text-[#E5E5E5]' : 'text-[#4A4A4A]'}>/{period}</div>
    </div>
    <ul className={`mt-6 space-y-3 text-sm ${inverted ? 'text-[#E5E5E5]' : 'text-[#4A4A4A]'}`}>
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className={`mt-1 h-1.5 w-1.5 ${inverted ? 'bg-white' : 'bg-black'} inline-block`} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className={`mt-8 w-full px-4 py-3 text-sm transition-transform hover:scale-[1.02]`} style={{borderRadius:0, borderWidth: 2, borderColor: inverted ? 'white' : 'black', background: inverted ? 'white' : 'transparent', color: inverted ? 'black' : 'black'}}>
      Choose {name}
    </button>
  </motion.div>
)

const Micro = () => (
  <motion.div whileHover={{ scale: 1.02 }} className="rounded-md p-6 border bg-white text-black border-[#E5E5E5] shadow-sm" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
    <h3 className="font-serif text-2xl font-semibold">Micro-SIP Auto-Repay</h3>
    <p className="text-[#4A4A4A] mt-2">Automate small contributions (3–10%) from income toward debt payoff.</p>
    <div className="mt-4 flex items-baseline gap-2">
      <div className="font-mono text-3xl">₹99–₹199</div>
      <div className="text-[#4A4A4A]">/month</div>
    </div>
    <div className="mt-6 grid grid-cols-3 gap-2">
      <div className="h-24 bg-white border border-[#E5E5E5] flex items-center justify-center"><span className="font-mono">3%</span></div>
      <div className="h-24 bg-white border border-[#E5E5E5] flex items-center justify-center"><span className="font-mono">7%</span></div>
      <div className="h-24 bg-white border border-[#E5E5E5] flex items-center justify-center"><span className="font-mono">10%</span></div>
    </div>
    <button className="mt-8 w-full bg-black text-white px-4 py-3 text-sm hover:scale-[1.02] transition-transform" style={{borderRadius:0}}>
      Activate Auto-Repay
    </button>
  </motion.div>
)

const PricingSection = () => {
  return (
    <div id="pricing">
      <div className="mb-8">
        <h2 className="text-[24px] font-medium">Pricing</h2>
        <p className="text-[#4A4A4A] mt-2 max-w-2xl leading-7">Clear numbers, no noise. Pay only for what creates value. Cancel anytime.</p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Plan name="Standard Consultation" price={999} period="month" features={[ 'Assessment in a single-column flow', 'Personalized report', 'Monthly check-in (30 min)' ]} />
        <Plan name="Premium Consultation" price={2499} period="month" features={[ 'Priority scheduling', 'Weekly touchpoint (30 min)', 'Custom payoff strategy' ]} inverted />
        <Micro />
      </div>
    </div>
  )
}

export default PricingSection
