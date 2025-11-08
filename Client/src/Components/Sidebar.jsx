import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { 
  User, 
  FileText, 
  Mail, 
  Search, 
  LogOut, 
  Menu, 
  X,
  Crown,
  Sparkles,
  PenTool
} from 'lucide-react'
import { logout } from '../utils/auth'

const Sidebar = ({ activeView, onViewChange }) => {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const menuItems = [
    { id: 'builder', label: 'Resume Builder', icon: PenTool, path: '/builder' },
    { id: 'resumes', label: 'My Resumes', icon: FileText, path: '/builder?view=resumes' },
    { id: 'account', label: 'Account', icon: User, path: '/builder?view=account' },
    { id: 'cover-letter', label: 'Cover Letter', icon: Mail, path: '/builder?view=cover-letter' },
    { 
      id: 'job-search', 
      label: 'Job Search Agent', 
      icon: Search, 
      path: '/builder?view=job-search',
      badge: 'Beta',
      premium: true
    },
  ]

  const isActive = (itemId) => {
    const params = new URLSearchParams(location.search)
    return params.get('view') === itemId || (itemId === 'builder' && !params.get('view'))
  }

  const handleItemClick = (itemId) => {
    onViewChange(itemId)
    setIsMobileOpen(false)
  }

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-neutral-800 rounded-lg text-white"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          fixed top-0 left-0 h-screen w-64 bg-neutral-900 border-r border-neutral-800 z-40
          transform transition-transform duration-300 ease-in-out
          ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        `}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-neutral-800">
            <Link to="/" className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-indigo-700 rounded-lg flex items-center justify-center">
                <Sparkles className="text-white" size={20} />
              </div>
              <span className="text-xl font-bold text-white">Resume AI</span>
            </Link>
          </div>

          {/* Navigation Items */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {menuItems.map((item) => {
              const Icon = item.icon
              const active = isActive(item.id)
              
              return (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`
                    w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
                    ${active 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-neutral-300 hover:bg-neutral-800 hover:text-white'
                    }
                    ${item.premium ? 'opacity-75' : ''}
                  `}
                >
                  <Icon size={20} />
                  <span className="flex-1 text-left font-medium">{item.label}</span>
                  {item.badge && (
                    <span className="px-2 py-0.5 text-xs bg-yellow-500/20 text-yellow-400 rounded-full border border-yellow-500/30">
                      {item.badge}
                    </span>
                  )}
                  {item.premium && (
                    <Crown className="text-yellow-400" size={16} />
                  )}
                </button>
              )
            })}
          </nav>

          {/* Logout Button */}
          <div className="p-4 border-t border-neutral-800">
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-neutral-300 hover:bg-red-600/10 hover:text-red-400 transition-colors"
            >
              <LogOut size={20} />
              <span className="font-medium">Logout</span>
            </button>
          </div>
        </div>

        {/* Mobile Overlay */}
        {isMobileOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 z-30"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </aside>
    </>
  )
}

export default Sidebar

