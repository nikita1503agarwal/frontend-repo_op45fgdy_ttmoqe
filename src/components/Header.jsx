import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/collections', label: 'Collections' },
  { to: '/about', label: 'About Us' },
  { to: '/custom', label: 'Custom Design' },
  { to: '/contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkBase = 'text-gray-700 hover:text-gray-900 transition-colors'
  const activeStyle = {
    color: '#C9A227',
  }

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/80 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 select-none">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-300 to-amber-500 ring-2 ring-amber-200" />
            <span className="font-serif text-xl tracking-wide" style={{ color: '#1a1a1a' }}>Niva Jewels</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `${linkBase} ${isActive ? 'font-semibold' : ''}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Link to="/cart" className="relative group">
              <ShoppingBag className="w-6 h-6 text-gray-700 group-hover:text-gray-900 transition-colors" />
              <span className="absolute -top-2 -right-2 text-[10px] bg-black text-white rounded-full px-1.5 py-0.5">0</span>
            </Link>
            <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Open menu">
              <Menu className="w-6 h-6 text-gray-800" />
            </button>
          </div>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-100 bg-white">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `block py-2 ${linkBase} ${isActive ? 'font-semibold' : ''}`}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
