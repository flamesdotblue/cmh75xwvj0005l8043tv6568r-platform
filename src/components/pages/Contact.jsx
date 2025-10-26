import React from 'react'
import { Phone, Mail, MapPin } from 'lucide-react'

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-[28px] font-medium mb-6">Contact Us</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white border border-[#E5E5E5] rounded-md p-6 space-y-4">
          <div className="flex items-center gap-3 text-sm"><Phone size={18} /><span>+91 80 0000 0000</span></div>
          <div className="flex items-center gap-3 text-sm"><Mail size={18} /><span>hello@solvio.in</span></div>
          <div className="flex items-center gap-3 text-sm"><MapPin size={18} /><span> Bengaluru, India</span></div>
        </div>
        <form className="bg-white border border-[#E5E5E5] rounded-md p-6 space-y-4">
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Name</label>
            <input className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="Your name" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Email</label>
            <input type="email" className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-wide mb-1">Message</label>
            <textarea rows={4} className="w-full bg-white border border-black focus:border-2 p-3 outline-none placeholder-[#9E9E9E]" placeholder="How can we help?" />
          </div>
          <button type="submit" className="w-full bg-black text-white py-3 text-sm" style={{borderRadius:0}}>Send</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
