import React, { useState } from 'react';
import { Droplets, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (section) => {
    setMenuOpen(false); // Close menu on selection
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Droplets className="h-8 w-8 text-blue-400" />
            <span className="text-2xl font-bold text-white">AQUABOND</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" onClick={() => handleNavigation('home')} className="text-white hover:text-blue-300 transition-colors">
              Home
            </Link>
            <Link to="/solutions" onClick={() => handleNavigation('services')} className="text-white hover:text-blue-300 transition-colors">
              Solutions
            </Link>
            <Link to="/impact" onClick={() => handleNavigation('impact')} className="text-white hover:text-blue-300 transition-colors">
              Impact
            </Link>
            <Link to="/about" onClick={() => handleNavigation('about')} className="text-white hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link to="/contact" onClick={() => handleNavigation('contact')} className="text-white hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white focus:outline-none">
              {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="mt-4 space-y-4 md:hidden">
            <Link to="/solutions" onClick={() => handleNavigation('services')} className="block text-white hover:text-blue-300 transition-colors">
              Solutions
            </Link>
            <Link to="/impact" onClick={() => handleNavigation('impact')} className="block text-white hover:text-blue-300 transition-colors">
              Impact
            </Link>
            <Link to="/about" onClick={() => handleNavigation('about')} className="block text-white hover:text-blue-300 transition-colors">
              About
            </Link>
            <Link to="/contact" onClick={() => handleNavigation('contact')} className="block text-white hover:text-blue-300 transition-colors">
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;