import React from 'react'
import { Menu } from 'lucide-react'

const Nav = () => {
  const links = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#resources', label: 'Resources' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]
  return (
    <header className="w-full bg-white border-b border-[#E5E5E5] sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 select-none">
          <div className="w-6 h-6 border-2 border-black" />
          <span className="text-xl tracking-tight">Solvio</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm">
          {links.map(l => (
            <a key={l.href} href={l.href} className="hover:underline underline-offset-4">{l.label}</a>
          ))}
        </nav>
        <button className="md:hidden p-2" aria-label="Open Menu">
          <Menu size={22} />
        </button>
      </div>
    </header>
  )
}

export default Nav
