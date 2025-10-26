import React from 'react'

const Plan = ({ name, price, period, features }) => (
  <div className="bg-white border border-zinc-200 rounded-md p-6 shadow-sm shadow-black/5 hover:shadow-md hover:shadow-black/10 transition-transform hover:scale-[1.02]">
    <h3 className="font-serif text-2xl font-semibold">{name}</h3>
    <div className="mt-4 flex items-baseline gap-2">
      <div className="font-mono text-3xl">₹{price.toLocaleString('en-IN')}</div>
      <div className="text-zinc-600">/{period}</div>
    </div>
    <ul className="mt-6 space-y-3 text-sm text-zinc-700">
      {features.map((f, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="mt-1 h-1.5 w-1.5 bg-black inline-block" />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <button className="mt-8 w-full bg-white border-2 border-black text-black px-4 py-3 text-sm hover:bg-black hover:text-white transition-colors" style={{borderRadius:0}}>
      Choose {name}
    </button>
  </div>
)

const MicroPlan = ({ price }) => (
  <div className="bg-white border border-zinc-200 rounded-md p-6 shadow-sm shadow-black/5">
    <h3 className="font-serif text-2xl font-semibold">Micro-SIP Auto-Repay</h3>
    <p className="text-zinc-600 mt-2">Automate small contributions (3–10%) from income toward debt payoff.</p>
    <div className="mt-4 flex items-baseline gap-2">
      <div className="font-mono text-3xl">₹{price[0]}–₹{price[1]}</div>
      <div className="text-zinc-600">/month</div>
    </div>
    <div className="mt-6 grid grid-cols-3 gap-2">
      <div className="h-24 bg-white border border-zinc-200 flex items-center justify-center"><span className="font-mono">3%</span></div>
      <div className="h-24 bg-white border border-zinc-200 flex items-center justify-center"><span className="font-mono">7%</span></div>
      <div className="h-24 bg-white border border-zinc-200 flex items-center justify-center"><span className="font-mono">10%</span></div>
    </div>
    <button className="mt-8 w-full bg-black text-white px-4 py-3 text-sm hover:scale-[1.02] transition-transform" style={{borderRadius:0}}>
      Activate Auto-Repay
    </button>
  </div>
)

const Pricing = () => {
  return (
    <div id="pricing" className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h2 className="text-[24px] font-medium">Pricing</h2>
        <p className="text-zinc-600 mt-2 max-w-2xl">Clear numbers, no noise. Pay only for what creates value. Cancel anytime.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Plan
          name="Standard Consultation"
          price={999}
          period="month"
          features={[
            'Assessment in a single-column flow',
            'Personalized PDF report',
            'Monthly check-in (30 min)',
          ]}
        />
        <Plan
          name="Premium Consultation"
          price={2499}
          period="month"
          features={[
            'Priority scheduling',
            'Weekly touchpoint (30 min)',
            'Custom payoff strategy',
          ]}
        />
        <MicroPlan price={[99, 199]} />
      </div>
    </div>
  )
}

export default Pricing
