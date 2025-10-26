import React from 'react'

const formatPct = (v) => `${v}%`

const MicroSipSimulator = () => {
  const [percent, setPercent] = React.useState(5)
  const [income, setIncome] = React.useState(80000)

  const contrib = Math.round((income * percent) / 100)

  const points = Array.from({ length: 12 }, (_, i) => ({ x: i, y: Math.max(0, 100 - i * (percent / 1.5)) }))
  const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${10 + p.x * 25} ${110 - p.y}` ).join(' ')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <div className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm space-y-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div>
          <label className="block text-xs uppercase tracking-wide mb-1">Monthly Income (₹)</label>
          <input type="number" value={income} onChange={e => setIncome(Number(e.target.value) || 0)} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" />
        </div>
        <div>
          <div className="flex items-end justify-between mb-2">
            <label className="text-sm tracking-wide uppercase">Contribution Rate</label>
            <div className="font-mono text-[18px]">{formatPct(percent)}</div>
          </div>
          <input type="range" min={3} max={10} step={1} value={percent} onChange={e => setPercent(Number(e.target.value))} className="w-full appearance-none bg-transparent" />
          <div className="relative h-2 mt-2">
            <div className="absolute inset-0 bg-[#E5E5E5]" />
            <div className="absolute h-2 bg-black" style={{ width: `${((percent - 3) / (10 - 3)) * 100}%` }} />
          </div>
          <div className="flex justify-between text-xs text-[#9E9E9E] mt-1">
            <span>3%</span><span>10%</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white border border-[#E5E5E5] rounded-md p-4">
            <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Monthly Contribution</div>
            <div className="font-mono text-2xl">₹{contrib.toLocaleString('en-IN')}</div>
          </div>
          <div className="bg-white border border-[#E5E5E5] rounded-md p-4">
            <div className="text-xs uppercase tracking-wide text-[#4A4A4A] mb-1">Yearly Total</div>
            <div className="font-mono text-2xl">₹{(contrib*12).toLocaleString('en-IN')}</div>
          </div>
        </div>
        <button className="w-full bg-black text-white py-3 text-sm" style={{borderRadius:0}}>Configure & Link Bank</button>
      </div>

      <div className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="text-sm uppercase tracking-wide mb-3">Progress Projection (12 mo)</div>
        <svg viewBox="0 0 300 120" className="w-full h-48">
          <rect x="0" y="0" width="300" height="120" fill="white" />
          <path d={pathD} stroke="#000" strokeWidth="2" fill="none" />
          {points.map((p, i) => (
            <circle key={i} cx={10 + p.x * 25} cy={110 - p.y} r="3" fill="#000" />
          ))}
        </svg>
        <div className="mt-2 text-xs text-[#4A4A4A]">Black line indicates expected reduction trajectory based on current configuration.</div>
      </div>
    </div>
  )
}

export default MicroSipSimulator
