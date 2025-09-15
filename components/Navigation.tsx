"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"

interface NavigationProps {
  currentPage?: string
  variant?: 'default' | 'newspaper'
}

export default function Navigation({ currentPage, variant = 'default' }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const menuItems = [
    { href: "/", label: "Главная" },
    { href: "/history", label: "История" },
    { href: "/honor-board", label: "Доска\u00A0почёта" },
    { href: "/menu", label: "Меню" },
    { href: "/menu-18", label: "18+" }
  ]

  const getLinkClassName = (href: string, isMobile: boolean = false) => {
    const isActive = currentPage === href
    const baseClasses = isMobile 
      ? "text-lg font-bold transition-colors"
      : "text-xl lg:text-2xl xl:text-3xl font-bold transition-colors"
    
    if (variant === 'newspaper') {
      return `${baseClasses} text-white hover:text-yellow-300`
    }
    
    return `${baseClasses} ${isActive ? 'text-blue-600' : 'text-black hover:text-blue-600'}`
  }

  const getMobileLinkClassName = (href: string) => {
    const isActive = currentPage === href
    const baseClasses = "text-xs font-bold transition-colors"
    
    if (variant === 'newspaper') {
      return `${baseClasses} text-white hover:text-yellow-300`
    }
    
    return `${baseClasses} ${isActive ? 'text-blue-600' : 'text-black hover:text-blue-600'}`
  }

  if (variant === 'newspaper') {
    return (
      <nav className="bg-black/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-center h-16">
            <div className="flex space-x-6 md:space-x-8">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={getLinkClassName(item.href)}
                  style={{ fontFamily: 'TrixieCyr, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    )
  }

  return (
    <>
      {/* Mobile menu button */}
      <div className="md:hidden absolute top-4 right-4 z-50">
        <button onClick={toggleMenu} className="bg-white/80 backdrop-blur-sm p-2 rounded-lg shadow-lg">
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40">
          <div className="absolute top-16 right-4 bg-white rounded-lg shadow-xl p-6 min-w-[200px]">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link 
                  key={item.href}
                  href={item.href} 
                  className={getLinkClassName(item.href, true)}
                  style={{ fontFamily: 'TrixieCyr, sans-serif' }}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Desktop navigation - controlled by parent (page.tsx) */}
      <footer className="hidden md:block">
        <nav className="flex justify-center space-x-12 lg:space-x-20 xl:space-x-16">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={getLinkClassName(item.href)}
              style={{ fontFamily: 'TrixieCyr, sans-serif' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>


      {/* Mobile navigation */}
      <footer className="md:hidden pb-4">
        <nav className="flex justify-center space-x-3 px-2">
          {menuItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={getMobileLinkClassName(item.href)}
              style={{ fontFamily: 'TrixieCyr, sans-serif' }}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </footer>
    </>
  )
}
