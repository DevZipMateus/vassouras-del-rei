
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Menu, X, MapPin } from 'lucide-react';
import { useIsMobile } from '../../hooks/use-mobile';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg py-2' : 'bg-white/90 backdrop-blur-sm py-3'}`}>
      {/* Top Bar with Contact Info */}
      <div className="container-custom">
        <div className="flex flex-col md:flex-row md:justify-between items-center mb-2 md:mb-2">
          {/* Contact Information */}
          <div className="flex flex-col md:flex-row md:space-x-6 text-sm text-gray-600 mb-2 md:mb-0 items-center">
            <a href="mailto:vassourasnovadelrei@gmail.com" className="flex items-center hover:text-primary transition-colors duration-300 mb-1 md:mb-0">
              <Mail size={16} className="mr-2" />
              vassourasnovadelrei@gmail.com
            </a>
            <a href="tel:032988871570" className="flex items-center hover:text-primary transition-colors duration-300 whitespace-nowrap mb-1 md:mb-0">
              <Phone size={16} className="mr-2" />
              (032) 9 8887-1570
            </a>
            <div className="flex items-center text-gray-600">
              <MapPin size={16} className="mr-2" />
              Rua Conceição de Carvalho 385
            </div>
          </div>
        </div>
        
        {/* Main Navigation */}
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center transition-all duration-300 transform hover:scale-[1.02]">
            <img 
              src="/lovable-uploads/89b76823-8546-4d5b-ae4b-25ee417d88a9.png" 
              alt="Vassouras Nova Del Rei" 
              className="h-12 md:h-14 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <button onClick={() => scrollToSection('hero')} className="nav-link">Início</button>
            <button onClick={() => scrollToSection('about')} className="nav-link">Sobre</button>
            <button onClick={() => scrollToSection('services')} className="nav-link">Serviços</button>
            <button onClick={() => scrollToSection('plans')} className="nav-link">Planos</button>
            <button onClick={() => scrollToSection('testimonials')} className="nav-link">Depoimentos</button>
            <button onClick={() => scrollToSection('location')} className="nav-link">Localização</button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">Contato</button>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600 hover:text-primary focus:outline-none"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden transition-all duration-300 ease-in-out`}>
        <div className="container-custom py-4 flex flex-col space-y-3 border-t mt-4 bg-white/95">
          <button onClick={() => scrollToSection('hero')} className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-left">Início</button>
          <button onClick={() => scrollToSection('about')} className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-left">Sobre</button>
          <button onClick={() => scrollToSection('services')} className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-left">Serviços</button>
          <button onClick={() => scrollToSection('plans')} className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-left">Planos</button>
          <button onClick={() => scrollToSection('testimonials')} className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-left">Depoimentos</button>
          <button onClick={() => scrollToSection('location')} className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-left">Localização</button>
          <button onClick={() => scrollToSection('contact')} className="px-4 py-2 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-md text-left">Contato</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
