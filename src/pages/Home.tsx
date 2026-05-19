import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe, Wifi, Server, Brain } from 'lucide-react';

const Home = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-fixed text-white py-48"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=2000")',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Powering the Future of Streaming and Digital Media
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Leading the next generation of satellite communications with AI-powered blockchain solutions and real-world asset tokenization
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/innovations"
                className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
                onClick={handleClick}
              >
                Innovations
              </Link>
              <Link
                to="/contact"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition"
                onClick={handleClick}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Executive Summary Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">EXECUTIVE SUMMARY</h2>
              <h3 className="text-2xl font-bold mb-6">QuSat Group - Satellite Communications & Blockchain Innovation</h3>
              <p className="text-xl mb-8">QuSat Group is positioned to revolutionize global satellite communications through innovative blockchain technology and real-world asset tokenization.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Our Infrastructure</h4>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">15,000-square-foot state-of-the-art data center facility</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">13 satellite antennas with C-Band and Ku-Band capabilities</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">US FCC licensed spectrum with global reach</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Our Innovation</h4>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">AI-powered blockchain ecosystem platform</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">Real-World Asset (RWA) tokenization capabilities</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">Global content distribution and streaming services</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <p className="text-lg mb-6">Transforming satellite communications through blockchain innovation and tokenized infrastructure services.</p>
              <Link
                to="/contact"
                className="inline-block bg-yellow-400 text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-yellow-300 transition text-lg"
                onClick={handleClick}
              >
                Learn More About QuSat
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">COMPANY OVERVIEW</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                QuSat Group is revolutionizing global satellite communications by delivering seamless, on-demand access to internet and television for users worldwide, especially benefiting those in underserved communities and remote regions.
              </p>
              <h3 className="text-2xl font-bold mb-6">Vision</h3>
              <p className="text-lg text-gray-600 mb-6">
                Our vision is to upgrade and enhance infrastructure with blockchain-based decentralized technology solutions, AI-powered applications, and next-generation services.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Technology Leadership</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  QuSat Group is backed by a highly capable executive team with decades of experience in telecommunications, satellite technology, and blockchain innovation.
                </p>
                <p className="text-gray-700">
                  We are the first company to tokenize satellite infrastructure assets, services, and media content through our proprietary blockchain platform.
                </p>
                <p className="text-lg font-semibold text-blue-600">
                  Leading the future of tokenized satellite communications
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-8">TOKENIZING REAL-WORLD-ASSETS (RWAs)</h2>
            <p className="text-lg mb-8">
              QuSat Group is building a token-based AI-powered blockchain ecosystem platform that enables Real-World Asset (RWA) tokenization, facilitating real-time value exchange between connected devices through digital tokens and monetized services. We offer cloud data center solutions, broadband internet, broadcasting, streaming, and digital media services to OTA networks, OTT and IPTV platforms, while advancing innovative business solutions providing next-generation on-demand applications of decentralized payment networks, Web3 ecosystems, IoT connectivity, and innovations across the satellite-powered space economy.
            </p>
 <div className="text-center">
              <p className="text-xl font-bold">
                QuSat: The first to tokenize satellite assets, services, and media content.
                
              </p>
            </div>
           
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 mt-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">1. Infrastructure Assets</h3>
                <p className="text-sm">
                  Tokenize our data center assets including virtual workspace, data storage, and AI computing power, along with satellite gateway assets and bandwidth spectrum for streaming usage. Our tokenization platform enables rapid deployment and scalable infrastructure access.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">2. Service Units</h3>
                <p className="text-sm">
                  Tokenize our comprehensive business service units including broadband internet, broadcasting, streaming & media delivery, digital media content, secure cloud data center solutions, and RWA tokenization services.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">3. Media Content</h3>
                <p className="text-sm">
                  Tokenize our licensed media content including videos, music, and live broadcasts. Our content is issued as asset-backed NFTs for added security and value benefits, generating multiple revenue streams.
                </p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Success Example</h3>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Example:</strong> In 2021 artist Tory Lanez converted his album into an NFT and in 56 seconds made $1 million. Most recently Sony is tokenizing one of Netflix's series and converting this into an NFT.
                </p>
                <div className="space-y-2">
                  <p><strong>Larry Fink, CEO of BlackRock:</strong> "everything will be tokenized."</p>
                  <p>
                    <strong>Wall Street CEO's:</strong> "Tokenization the NextGen of Global Financial Markets is Digital." 
                    <a href="https://globalleaderstoday.online/tokenization-the-nextgen-of-global-financial-markets-is-digital/" 
                       className="text-yellow-300 hover:text-yellow-100 underline ml-1" target="_blank" rel="noopener noreferrer">
                      Read more
                    </a>
                  </p>
                  <p>
                    <strong>Robinhood CEO:</strong> "Tokenization is a major innovation in capital markets." 
                    <a href="https://www.cnn.com/2025/07/09/business/video/robinhood-ceo-tokenization-tenev" 
                       className="text-yellow-300 hover:text-yellow-100 underline ml-1" target="_blank" rel="noopener noreferrer">
                      Watch interview
                    </a>
                  </p>
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </section>

     

      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              className="w-full h-[600px]"
              src="https://www.youtube.com/embed/oKAku0LLykQ"
              title="QuSat Group Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Leadership</h2>
            <p className="text-xl">Leading the future of satellite communications and blockchain innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">13</div>
              <p className="text-lg">Satellite Antennas</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Global</div>
              <p className="text-lg">Coverage Reach</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">First</div>
              <p className="text-lg">To Tokenize Satellite Assets</p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/innovations"
              className="inline-block bg-white text-blue-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
              onClick={handleClick}
            >
              Explore Our Innovations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;