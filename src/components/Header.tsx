import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'

interface HeaderProps {
  cartCount: number
  onCartClick: () => void
}

export default function Header({ cartCount, onCartClick }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-primary-600">
              TutorStore
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              Courses
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </a>
            <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-700 hover:text-primary-600 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                Courses
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                About
              </a>
              <a href="#" className="text-gray-700 hover:text-primary-600 transition-colors">
                Contact
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
