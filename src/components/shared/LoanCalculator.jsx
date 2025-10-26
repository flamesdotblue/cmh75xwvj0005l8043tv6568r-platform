import React from 'react'

function formatINR(n) {
  if (!isFinite(n)) return '—'
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(n)
}

const Slider = ({ label, value, min, max, step, onChange, suffix }) => {
  return (
    <div className="space-y-3">
      <div className="flex items-end justify-between">
        <label className="text-sm tracking-wide uppercase">{label}</label>
        <div className="font-mono text-[18px]">{suffix ? `${value}${suffix}` : value}</div>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={e => onChange(Number(e.target.value))}
        className="w-full appearance-none bg-transparent"
        style={{ outline: 'none' }}
      />
      <div className="relative h-2">
        <div className="absolute inset-0 bg-[#E5E5E5]" />
        <div className="absolute h-2 bg-black" style={{ width: `${((value - min) / (max - min)) * 100}%` }} />
      </div>
      <div className="flex justify-between text-xs text-[#9E9E9E]">
        <span>{suffix ? `${min}${suffix}` : min}</span>
        <span>{suffix ? `${max}${suffix}` : max}</span>
      </div>
    </div>
  )
}

const Stat = ({ label, value }) => (
  <div className="bg-white border border-[#E5E5E5] rounded-md shadow-sm p-5" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
    <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">{label}</div>
    <div className="font-mono text-2xl">{value}</div>
  </div>
)

const LoanCalculator = () => {
  const [amount, setAmount] = React.useState(500000)
  const [term, setTerm] = React.useState(60)
  const [rateOld, setRateOld] = React.useState(18)
  const [rateNew, setRateNew] = React.useState(12)

  const emi = (P, annualRate, n) => {
    const r = annualRate / 12 / 100
    if (r === 0) return P / n
    const x = Math.pow(1 + r, n)
    return (P * r * x) / (x - 1)
  }

  const oldEmi = emi(amount, rateOld, term)
  const newEmi = emi(amount, rateNew, term)
  const monthlySave = Math.max(0, oldEmi - newEmi)
  const totalSave = monthlySave * term

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm space-y-8" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <Slider label="Loan Amount" value={amount} min={50000} max={2000000} step={10000} onChange={setAmount} />
          <Slider label="Term (months)" value={term} min={6} max={84} step={1} onChange={setTerm} />
          <Slider label="Current Rate" value={rateOld} min={8} max={30} step={0.5} onChange={setRateOld} suffix="%" />
          <Slider label="New Rate" value={rateNew} min={8} max={20} step={0.5} onChange={setRateNew} suffix="%" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            <Stat label="Current EMI" value={formatINR(oldEmi)} />
            <Stat label="New EMI" value={formatINR(newEmi)} />
            <Stat label="Monthly Savings" value={formatINR(monthlySave)} />
          </div>
        </div>

        <div className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm flex flex-col justify-between" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
          <div>
            <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Estimated Total Savings</div>
            <div className="font-mono text-3xl">{formatINR(totalSave)}</div>
            <p className="text-[#4A4A4A] text-sm leading-7 mt-4">Transparent pricing: interest 9–14% APR, processing 0.5–2%.</p>
          </div>
          <a href="#/solutions" className="mt-8 inline-flex items-center justify-center bg-black text-white px-6 py-3 text-sm hover:scale-[1.02] transition-transform" style={{borderRadius:0}}>
            Begin 6-step application
          </a>
        </div>
      </div>
    </div>
  )
}

export default LoanCalculator
