import React, { useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);
  const [showMobileServicesDropdown, setShowMobileServicesDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setShowServicesDropdown(true);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    const relatedTarget = e.relatedTarget as Element | null;
    if (relatedTarget && !dropdownRef.current?.contains(relatedTarget)) {
      setShowServicesDropdown(false);
    }
  };

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
    setIsOpen(false);
    setShowServicesDropdown(false);
    setShowMobileServicesDropdown(false);
  };

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link to="/" className="flex-shrink-0 flex items-center" onClick={() => window.scrollTo(0, 0)}>
              <img className="h-8 w-auto" src="/qusat-icon.png" alt="QuSat Logo" />
              <span className="ml-2 text-xl font-bold text-gray-900">QuSat Group</span>
            </Link>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/about" className="text-gray-700 hover:text-blue-600" onClick={() => window.scrollTo(0, 0)}>About</Link>
            <Link to="/infrastructure" className="text-gray-700 hover:text-blue-600" onClick={() => window.scrollTo(0, 0)}>Infrastructure</Link>
            <Link to="/fcc-licenses" className="text-gray-700 hover:text-blue-600" onClick={() => window.scrollTo(0, 0)}>FCC Licenses</Link>
            <div 
              ref={dropdownRef}
              className="relative group"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="text-gray-700 hover:text-blue-600 flex items-center"
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
              >
                Services
                <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div
                className={`absolute -mt-2 pt-2 w-48 bg-transparent ${
                  showServicesDropdown ? 'block' : 'hidden'
                }`}
              >
                <div className="bg-white rounded-md shadow-lg py-1">
                  <Link
                    to="/services"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavigation('/services')}
                  >
                    All Services
                  </Link>
                  <Link
                    to="/streaming"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavigation('/streaming')}
                  >
                    Streaming
                  </Link>
                  <Link
                    to="/data-centers"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavigation('/data-centers')}
                  >
                    Data Centers
                  </Link>
                  <Link
                    to="/tokenization"
                    className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    onClick={() => handleNavigation('/tokenization')}
                  >
                    Tokenization
                  </Link>
                </div>
              </div>
            </div>
            <Link to="/innovations" className="text-gray-700 hover:text-blue-600" onClick={() => window.scrollTo(0, 0)}>Innovations</Link>
            <Link to="/partnerships" className="text-gray-700 hover:text-blue-600" onClick={() => window.scrollTo(0, 0)}>Partnerships</Link>
            <Link to="/market-revenue" className="text-gray-700 hover:text-blue-600" onClick={() => window.scrollTo(0, 0)}>Market & Revenue</Link>
            <Link to="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700" onClick={() => window.scrollTo(0, 0)}>
              Contact Us
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleNavigation('/about')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              About
            </button>
            <button
              onClick={() => handleNavigation('/infrastructure')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Infrastructure
            </button>
            <button
              onClick={() => handleNavigation('/fcc-licenses')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              FCC Licenses
            </button>
            <div>
              <button
                onClick={() => setShowMobileServicesDropdown(!showMobileServicesDropdown)}
                className="flex items-center w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                Services
                <ChevronDown className={`ml-2 w-4 h-4 transform transition-transform ${showMobileServicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showMobileServicesDropdown && (
                <div className="pl-6">
                  <button
                    onClick={() => handleNavigation('/services')}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    All Services
                  </button>
                  <button
                    onClick={() => handleNavigation('/streaming')}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    Streaming
                  </button>
                  <button
                    onClick={() => handleNavigation('/data-centers')}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    Data Centers
                  </button>
                  <button
                    onClick={() => handleNavigation('/tokenization')}
                    className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                  >
                    Tokenization
                  </button>
                </div>
              )}
            </div>
            <button
              onClick={() => handleNavigation('/innovations')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Innovations
            </button>
            <button
              onClick={() => handleNavigation('/partnerships')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Partnerships
            </button>
            <button
              onClick={() => handleNavigation('/market-revenue')}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
            >
              Market & Revenue
            </button>
            <button
              onClick={() => handleNavigation('/contact')}
              className="block w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;