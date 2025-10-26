import React from 'react'
import { motion } from 'framer-motion'

const StepHeader = ({ step, total, title }) => (
  <div>
    <div className="h-1 bg-black mb-3" style={{ width: `${(step / total) * 100}%` }} />
    <div className="flex items-center justify-between">
      <div className="text-sm uppercase tracking-wide">Step {step} of {total}</div>
      <div className="text-sm">{title}</div>
    </div>
  </div>
)

const Field = ({ label, type = 'text', placeholder, value, onChange }) => (
  <div>
    <label className="block text-xs uppercase tracking-wide mb-1">{label}</label>
    {type === 'textarea' ? (
      <textarea rows={3} value={value} onChange={e => onChange(e.target.value)} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder={placeholder} />
    ) : (
      <input type={type} value={value} onChange={e => onChange(e.target.value)} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder={placeholder} />
    )}
  </div>
)

const Upload = () => (
  <div className="border-2 border-dotted border-black p-10 text-center">
    <div className="text-sm">Drag & drop documents here</div>
    <div className="text-xs text-[#4A4A4A] mt-1">PDF, JPG, PNG</div>
  </div>
)

const ReviewRow = ({ k, v }) => (
  <div className="flex items-center justify-between py-2 border-b border-[#E5E5E5]">
    <div className="text-sm text-[#4A4A4A]">{k}</div>
    <div className="font-mono">{v || '—'}</div>
  </div>
)

const LoanApplication = () => {
  const total = 6
  const [step, setStep] = React.useState(1)

  const [personal, setPersonal] = React.useState({ name: '', email: '', phone: '' })
  const [loan, setLoan] = React.useState({ amount: '', purpose: '' })
  const [kyc, setKyc] = React.useState({ pan: '', aadhaar: '' })
  const [income, setIncome] = React.useState({ employer: '', monthly: '' })

  const next = () => setStep(s => Math.min(total, s + 1))
  const back = () => setStep(s => Math.max(1, s - 1))

  return (
    <div className="bg-white border border-[#E5E5E5] rounded-md p-6 shadow-sm" style={{ boxShadow: '0 4px 16px rgba(0,0,0,0.08)' }}>
      <StepHeader step={step} total={total} title={['Personal','Loan Details','KYC','Income','Upload','Review'][step-1]} />

      <motion.div key={step} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="mt-6 space-y-4">
        {step === 1 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Field label="Full Name" value={personal.name} onChange={v => setPersonal({ ...personal, name: v })} placeholder="John Doe" />
            <Field label="Email" type="email" value={personal.email} onChange={v => setPersonal({ ...personal, email: v })} placeholder="john@example.com" />
            <Field label="Phone" value={personal.phone} onChange={v => setPersonal({ ...personal, phone: v })} placeholder="99999 99999" />
          </div>
        )}
        {step === 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Loan Amount (₹)" value={loan.amount} onChange={v => setLoan({ ...loan, amount: v })} placeholder="500000" />
            <Field label="Purpose" value={loan.purpose} onChange={v => setLoan({ ...loan, purpose: v })} placeholder="Consolidation / Balance transfer" />
          </div>
        )}
        {step === 3 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="PAN" value={kyc.pan} onChange={v => setKyc({ ...kyc, pan: v })} placeholder="ABCDE1234F" />
            <Field label="Aadhaar (last 4)" value={kyc.aadhaar} onChange={v => setKyc({ ...kyc, aadhaar: v })} placeholder="1234" />
          </div>
        )}
        {step === 4 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field label="Employer" value={income.employer} onChange={v => setIncome({ ...income, employer: v })} placeholder="Company Pvt Ltd" />
            <Field label="Monthly Income (₹)" value={income.monthly} onChange={v => setIncome({ ...income, monthly: v })} placeholder="75000" />
          </div>
        )}
        {step === 5 && (
          <Upload />
        )}
        {step === 6 && (
          <div>
            <ReviewRow k="Name" v={personal.name} />
            <ReviewRow k="Email" v={personal.email} />
            <ReviewRow k="Phone" v={personal.phone} />
            <ReviewRow k="Loan Amount" v={loan.amount} />
            <ReviewRow k="Purpose" v={loan.purpose} />
            <ReviewRow k="PAN" v={kyc.pan} />
            <ReviewRow k="Aadhaar" v={kyc.aadhaar} />
            <ReviewRow k="Employer" v={income.employer} />
            <ReviewRow k="Monthly Income" v={income.monthly} />
          </div>
        )}
      </motion.div>

      <div className="flex items-center justify-between mt-6">
        <button onClick={back} disabled={step===1} className={`px-5 py-2 text-sm border-2 ${step===1 ? 'border-[#E5E5E5] text-[#9E9E9E]' : 'border-black text-black hover:bg-black hover:text-white'} transition-colors`} style={{borderRadius:0}}>Back</button>
        {step < total ? (
          <button onClick={next} className="px-5 py-2 text-sm bg-black text-white hover:scale-[1.02] transition-transform" style={{borderRadius:0}}>Next</button>
        ) : (
          <button className="px-5 py-2 text-sm bg-black text-white" style={{borderRadius:0}}>Submit & E-sign</button>
        )}
      </div>
    </div>
  )
}

export default LoanApplication
