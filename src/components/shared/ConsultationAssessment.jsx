import React from 'react'

const Row = ({ label, placeholder, type = 'text' }) => (
  <div>
    <label className="block text-xs uppercase tracking-wide mb-1">{label}</label>
    <input type={type} placeholder={placeholder} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" />
  </div>
)

const ConsultationAssessment = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      <form className="bg-white border border-[#E5E5E5] rounded-md p-6 space-y-4 shadow-sm" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="text-sm uppercase tracking-wide">Assessment</div>
        <Row label="Monthly Income (₹)" placeholder="80000" type="number" />
        <Row label="Total Debt (₹)" placeholder="1200000" type="number" />
        <Row label="Avg Interest (%)" placeholder="18" type="number" />
        <div>
          <label className="block text-xs uppercase tracking-wide mb-1">Goals</label>
          <textarea rows={3} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="E.g., reduce EMI by 20%, clear card debt in 10 months" />
        </div>
        <button type="button" className="w-full bg-black text-white py-3 text-sm" style={{borderRadius:0}}>Generate Plan</button>
      </form>

      <div className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm space-y-4" style={{ boxShadow: '0 2px 8px rgba(0,0,0,0.04)' }}>
        <div className="text-sm uppercase tracking-wide">Report Preview</div>
        <div className="border border-[#E5E5E5] p-4">
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
          <div className="mt-4 text-sm leading-7 text-[#4A4A4A]">You will be matched with a consultant for a 30–45 minute session to finalize the plan. PDF available post-call.</div>
        </div>
      </div>
    </div>
  )
}

export default ConsultationAssessment
