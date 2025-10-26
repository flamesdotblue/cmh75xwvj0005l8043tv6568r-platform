import React from 'react'

const currency = (n) => new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)

const Range = ({ label, value, min, max, step, onChange, suffix }) => (
  <div className="space-y-3">
    <div className="flex items-end justify-between">
      <label className="text-sm tracking-wide uppercase">{label}</label>
      <div className="font-mono text-[18px]">{suffix ? `${value}${suffix}` : value}</div>
    </div>
    <input type="range" min={min} max={max} step={step} value={value} onChange={e => onChange(Number(e.target.value))} className="w-full appearance-none bg-transparent" />
    <div className="relative h-2">
      <div className="absolute inset-0 bg-[#E5E5E5]" />
      <div className="absolute h-2 bg-black" style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
    </div>
    <div className="flex justify-between text-xs text-[#9E9E9E]"><span>{suffix ? `${min}${suffix}` : min}</span><span>{suffix ? `${max}${suffix}` : max}</span></div>
  </div>
)

const Card = ({ children }) => (
  <div className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>{children}</div>
)

const LoanTakeover = () => {
  const [amt, setAmt] = React.useState(500000)
  const [term, setTerm] = React.useState(60)
  const [oldR, setOldR] = React.useState(18)
  const [newR, setNewR] = React.useState(12)

  const emi = (P, annual, n) => {
    const r = annual / 12 / 100
    if (r === 0) return P / n
    const x = Math.pow(1 + r, n)
    return (P * r * x) / (x - 1)
  }
  const oldEmi = emi(amt, oldR, term)
  const newEmi = emi(amt, newR, term)
  const save = Math.max(0, oldEmi - newEmi)

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card>
        <div className="grid grid-cols-1 gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wide mb-1">Amount (₹)</label>
              <input className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="500000" value={amt} onChange={(e)=> setAmt(Number(e.target.value)||0)} />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-wide mb-1">Term (months)</label>
              <input className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="60" value={term} onChange={(e)=> setTerm(Number(e.target.value)||0)} />
            </div>
          </div>
          <Range label="Loan Amount" value={amt} min={50000} max={2000000} step={10000} onChange={setAmt} />
          <Range label="Term" value={term} min={6} max={84} step={1} onChange={setTerm} />
          <Range label="Current Rate" value={oldR} min={8} max={30} step={0.5} onChange={setOldR} suffix="%" />
          <Range label="New Rate" value={newR} min={8} max={20} step={0.5} onChange={setNewR} suffix="%" />
        </div>
      </Card>
      <Card>
        <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Current EMI</div>
        <div className="font-mono text-3xl">{currency(oldEmi)}</div>
        <div className="mt-6 text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">New EMI</div>
        <div className="font-mono text-3xl">{currency(newEmi)}</div>
      </Card>
      <Card>
        <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Monthly Savings</div>
        <div className="font-mono text-3xl">{currency(save)}</div>
        <p className="text-sm text-[#4A4A4A] leading-7 mt-4">Transparent pricing: interest 9–14% APR, processing 0.5–2%.</p>
        <button className="mt-6 w-full bg-black text-white py-3 text-sm hover:scale-[1.02] transition-transform" style={{borderRadius:0}}>Begin 6-step application</button>
      </Card>
    </div>
  )
}

const Consultation = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <div className="text-sm uppercase tracking-wide mb-3">Assessment</div>
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Monthly Income (₹)</label>
            <input type="number" className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="80000" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Total Debt (₹)</label>
            <input type="number" className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="1200000" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Avg Interest (%)</label>
            <input type="number" className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="18" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Goals</label>
            <textarea rows={3} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="Reduce EMI by 20%, clear card debt in 10 months" />
          </div>
          <button type="button" className="w-full bg-black text-white py-3 text-sm" style={{borderRadius:0}}>Generate Plan</button>
        </div>
      </Card>
      <Card>
        <div className="text-sm uppercase tracking-wide">Report Preview</div>
        <div className="border border-[#E5E5E5] p-4 mt-3">
          <h3 className="font-serif text-xl font-semibold">Personalized Debt Report</h3>
          <div className="mt-3 grid grid-cols-3 gap-3 text-sm">
            <div>
              <div className="text-[#4A4A4A]">EMI Target</div>
              <div className="font-mono text-lg">₹15,000</div>
            </div>
            <div>
              <div className="text-[#4A4A4A]">Tenor</div>
              <div className="font-mono text-lg">24 mo</div>
            </div>
            <div>
              <div className="text-[#4A4A4A]">Reduction</div>
              <div className="font-mono text-lg">20%</div>
            </div>
          </div>
          <div className="mt-4 text-sm leading-7 text-[#4A4A4A]">You will be matched with a consultant for a 30–45 minute session. PDF available post-call.</div>
        </div>
      </Card>
    </div>
  )
}

const MicroSIP = () => {
  const [income, setIncome] = React.useState(80000)
  const [pct, setPct] = React.useState(5)
  const contrib = Math.round((income * pct) / 100)
  const points = Array.from({ length: 12 }, (_, i) => ({ x: i, y: Math.max(0, 100 - i * (pct / 1.5)) }))
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${10 + p.x * 25} ${110 - p.y}`).join(' ')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card>
        <div className="space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Monthly Income (₹)</label>
            <input type="number" value={income} onChange={(e)=> setIncome(Number(e.target.value)||0)} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" />
          </div>
          <div>
            <div className="flex items-end justify-between mb-2">
              <label className="text-sm tracking-wide uppercase">Contribution Rate</label>
              <div className="font-mono text-[18px]">{pct}%</div>
            </div>
            <input type="range" min={3} max={10} step={1} value={pct} onChange={(e)=> setPct(Number(e.target.value))} className="w-full appearance-none bg-transparent" />
            <div className="relative h-2 mt-2">
              <div className="absolute inset-0 bg-[#E5E5E5]" />
              <div className="absolute h-2 bg-black" style={{ width: `${((pct - 3) / (10 - 3)) * 100}%` }} />
            </div>
            <div className="flex justify-between text-xs text-[#9E9E9E] mt-1"><span>3%</span><span>10%</span></div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white border border-[#E5E5E5] rounded-md p-4">
              <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Monthly Contribution</div>
              <div className="font-mono text-2xl">{currency(contrib)}</div>
            </div>
            <div className="bg-white border border-[#E5E5E5] rounded-md p-4">
              <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Yearly Total</div>
              <div className="font-mono text-2xl">{currency(contrib*12)}</div>
            </div>
          </div>
          <button className="w-full bg-black text-white py-3 text-sm" style={{borderRadius:0}}>Configure & Link Bank</button>
        </div>
      </Card>
      <Card>
        <div className="text-sm uppercase tracking-wide mb-3">Progress Projection (12 mo)</div>
        <svg viewBox="0 0 300 120" className="w-full h-48">
          <rect x="0" y="0" width="300" height="120" fill="white" />
          <path d={pathD} stroke="#000" strokeWidth="2" fill="none" />
          {points.map((p, i) => (
            <circle key={i} cx={10 + p.x * 25} cy={110 - p.y} r="3" fill="#000" />
          ))}
        </svg>
        <div className="mt-2 text-xs text-[#4A4A4A]">Black line indicates expected reduction trajectory based on current configuration.</div>
      </Card>
    </div>
  )
}

const Section = ({ id, title, description, children }) => (
  <section id={id} className="mb-12">
    <h2 className="text-[24px] font-medium">{title}</h2>
    {description && <p className="text-[#4A4A4A] mt-2 max-w-3xl leading-7">{description}</p>}
    <div className="mt-6">{children}</div>
  </section>
)

const SolutionsSection = () => {
  return (
    <div id="solutions">
      <Section title="Loan Takeover" description="Refinance high-interest debt into a smarter plan. Calculate savings and complete a clean 6-step application.">
        <LoanTakeover />
      </Section>
      <Section title="Targeted Debt Consultation" description="Personalized, 1-on-1 advisory. Start with a single-column assessment; receive serif-headed reports and pragmatic steps.">
        <Consultation />
      </Section>
      <Section title="Micro-SIP Auto-Repay" description="Automate small contributions (3–10%) from income. Configure your plan and track progress with stark line charts.">
        <MicroSIP />
      </Section>
    </div>
  )
}

export default SolutionsSection
