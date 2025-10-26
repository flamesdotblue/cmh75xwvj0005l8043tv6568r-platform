import React from 'react'
import { Menu } from 'lucide-react'

const Nav = () => {
  return (
    <header className="w-full bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 select-none">
          <div className="w-6 h-6 border-2 border-black" />
          <span className="text-xl tracking-tight">Solvio</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:underline underline-offset-4" href="#loan">Loan Takeover</a>
          <a className="hover:underline underline-offset-4" href="#consult">Consultation</a>
          <a className="hover:underline underline-offset-4" href="#micro">Micro-SIP</a>
          <a className="hover:underline underline-offset-4" href="#pricing">Pricing</a>
        </nav>
        <button className="md:hidden p-2" aria-label="Open Menu">
          <Menu size={24} />
        </button>
      </div>
    </header>
  )
}

export default Nav
