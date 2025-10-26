import React from 'react'

const Item = ({ title, desc }) => (
  <div className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
    <h3 className="text-[18px] font-medium">{title}</h3>
    <p className="text-sm text-[#4A4A4A] mt-2 leading-7">{desc}</p>
  </div>
)

const Resources = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-[28px] font-medium mb-6">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Item title="Debt reduction playbook" desc="Practical strategies to lower interest burden while maintaining liquidity." />
        <Item title="EMI optimization" desc="When to refinance vs. prepay: a first-principles breakdown." />
        <Item title="Micro-contributions" desc="Leveraging tiny, consistent payments for accelerated payoff." />
      </div>
    </div>
  )
}

export default Resources
