import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const handleLeadershipClick = () => {
    setTimeout(() => {
      const leadershipSection = document.getElementById('leadership');
      if (leadershipSection) {
        leadershipSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center">
              <img src="/qusat-icon.png" alt="QuSat Logo" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold">QuSat Group</span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Leading the future of global connectivity through innovative satellite technology and AI-powered solutions.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/streaming" className="text-gray-400 hover:text-white" onClick={handleClick}>Streaming</Link></li>
              <li><Link to="/data-centers" className="text-gray-400 hover:text-white" onClick={handleClick}>Data Centers</Link></li>
              <li><Link to="/tokenization" className="text-gray-400 hover:text-white" onClick={handleClick}>Tokenization</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white" onClick={handleClick}>About Us</Link></li>
              <li><Link to="/about#leadership" className="text-gray-400 hover:text-white" onClick={handleLeadershipClick}>Leadership</Link></li>
              <li><Link to="/partnerships" className="text-gray-400 hover:text-white" onClick={handleClick}>Partnerships</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <address className="not-italic text-gray-400">
              <p>3003 Moffett Ln.</p>
              <p>Missouri City, Texas 77489</p>
              <p className="mt-3">Email: <a href="mailto:contact@qusat.com" className="hover:text-white">contact@qusat.com</a></p>
              <p className="mt-1">Phone: <a href="tel:+18446555510" className="hover:text-white">+1 844-655-5510</a></p>
            </address>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} QuSat Group. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white text-sm" onClick={handleClick}>Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white text-sm" onClick={handleClick}>Terms of Service</Link>
            <Link to="/cookies" className="text-gray-400 hover:text-white text-sm" onClick={handleClick}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;