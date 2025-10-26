import React from 'react'
import LoanCalculator from '../shared/LoanCalculator'
import LoanApplication from '../shared/LoanApplication'
import ConsultationAssessment from '../shared/ConsultationAssessment'
import MicroSipSimulator from '../shared/MicroSipSimulator'

const Section = ({ title, children, description }) => (
  <section className="bg-white border border-[#E5E5E5] rounded-md p-6 md:p-10 space-y-4 mb-10">
    <h2 className="text-[24px] font-medium">{title}</h2>
    {description && (<p className="text-[#4A4A4A] max-w-2xl leading-7">{description}</p>)}
    {children}
  </section>
)

const Solutions = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <Section title="Loan Takeover" description="Refinance high-interest debt into a smarter plan. Calculate savings and complete a clean 6-step application.">
        <div className="grid grid-cols-1 gap-8">
          <div className="bg-white border border-[#E5E5E5] rounded-md p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1">Amount (₹)</label>
                <input className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="500000" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-wide mb-1">Term (months)</label>
                <input className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="60" />
              </div>
            </div>
          </div>
          <LoanCalculator />
        </div>
        <div className="h-[1px] bg-[#E5E5E5]" />
        <LoanApplication />
      </Section>

      <Section title="Targeted Debt Consultation" description="Personalized, 1-on-1 advisory. Start with a single-column assessment; receive clear, serif-headed reports and pragmatic steps.">
        <ConsultationAssessment />
      </Section>

      <Section title="Micro-SIP Auto-Repay" description="Automate small contributions (3–10%) from income. Configure your plan, e-sign, and track progress with stark line charts.">
        <MicroSipSimulator />
      </Section>
    </div>
  )
}

export default Solutions
