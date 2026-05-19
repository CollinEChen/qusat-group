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
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Revolutionizing content distribution through next-generation satellite/space infrastructure, AI-powered blockchain, and transactional IoT connectivity
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
              <h3 className="text-2xl font-bold mb-6">QuSat Group — Satellite Communications & Blockchain Innovation</h3>
              <p className="text-xl mb-8">
                QuSat Group is actively seeking strategic partners to participate in the acquisition and retrofit of a fully integrated communications facility. This opportunity is structured to enable scalable revenue generation through a secure, collateral-backed investment model with collateral coverage of up to 1.5x to support the investment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Facility & Assets</h4>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">Secure, high-performance ex-Verizon data center</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">AT&T fiber hub with double redundancy and access to other carriers</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">Satellite ground station connecting GEO/MEO/LEO/VLEO constellations</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">13 satellite antennas (C-Band & Ku-Band) including 2 mobile uplink trucks</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">FCC-authorized spectrum licenses with global broadcasting reach</span>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-400 mb-4">Platform & Innovation</h4>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">Native Layer-1 blockchain and DeFi ecosystem with integrated on-chain services</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">Tokenization of Real-World Assets (RWAs) including infrastructure, services, and media</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">PLAT Token™ Credit Enhancement Program — platinum-backed digital asset for collateral</span>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 font-bold mr-3 mt-1">•</span>
                  <span className="text-lg">Global content distribution across OTA, OTT, and IPTV platforms</span>
                </div>
              </div>
            </div>
            
            <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold text-yellow-400 mb-4">Service Offering: Hybrid Communications Infrastructure & Integrated Services</h4>
              <p className="text-lg mb-4">
                QuSat is a global media and satellite communications company with a fully integrated hybrid infrastructure for network connectivity, content distribution, and secure cloud data center services. The platform is designed to deliver broadband internet, streaming, and digital media access across OTA, OTT, and IPTV platforms.
              </p>
              <p className="text-lg">
                QuSat's native Layer-1 blockchain and DeFi ecosystem directly supports the marketing, distribution, and monetization of yield-bearing tokenized real-world assets (RWAs), enabling immediate capital formation and early revenue generation through structured digital asset issuance in global markets.
              </p>
            </div>

            <div className="text-center">
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

      {/* Mission & Goal Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">COMPANY OVERVIEW</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Mission</h3>
              <p className="text-lg text-gray-600 mb-6">
                To empower individuals, content creators, streamers, and enterprises through a blockchain-powered ecosystem that enables seamless interaction, monetization, and global distribution of digital content and tokenized assets — securely, transparently, and without borders.
              </p>
              <h3 className="text-2xl font-bold mb-6">Goal</h3>
              <p className="text-lg text-gray-600 mb-6">
                Launch our fully integrated Communications Facility supported by our Blockchain Platform to generate immediate capital and revenue by tokenizing the new company, infrastructure capacity, services, and media rights, and by using tokenized Platinum as collateral and balance-sheet backing for its digital asset ecosystem.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6">Most Valuable Assets</h3>
              <div className="space-y-4">
                <p className="text-gray-700">
                  QuSat's most valuable assets are its U.S. FCC-authorized C-Band and Ku-Band spectrum licenses, which provide interference-protected satellite frequency allocations for high-capacity broadband, media distribution, and secure data services.
                </p>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <span className="text-gray-700"><strong>C-Band:</strong> 3.7 – 4.2 GHz downlink, 5.925 – 6.425 GHz uplink — 741 MHz total bandwidth, valid through 02/08/2027 (renewable)</span>
                </div>
                <div className="flex items-start">
                  <span className="text-blue-600 font-bold mr-3 mt-1">•</span>
                  <span className="text-gray-700"><strong>Ku-Band:</strong> Multiple licenses supporting high-throughput satellite connectivity for broadband internet, media streaming, and content distribution</span>
                </div>
                <p className="text-lg font-semibold text-blue-600 mt-4">
                  Interference-protected spectrum for mission-critical satellite communications
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Tokenization Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-3xl font-bold mb-8">TOKENIZING REAL-WORLD-ASSETS (RWAs)</h2>
            <p className="text-lg mb-8">
              QuSat, in partnership with Tekiesoft, has built a Native Layer-1 token-based blockchain infrastructure that enables Real-World Asset (RWA) tokenization with a DeFi ecosystem for tokenized yield-bearing assets. Facilitating real-time value exchange between connected devices through digital asset tokens and monetized services.
            </p>
            <div className="text-center mb-8">
              <p className="text-xl font-bold">
                QuSat: The first company to tokenize new private company assets, infrastructure, services, media content, and precious metals.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">1. Company Tokenization</h3>
                <p className="text-sm">
                  Digitizing ownership or economic rights into blockchain tokens representing equity interests, revenue share, profit participation, debt-like fixed repayment, or usage and capacity rights — all within a private-offering framework.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">2. Infrastructure Assets</h3>
                <p className="text-sm">
                  Tokenizing data center capacity (compute, storage, AI processing), satellite uplink/downlink bandwidth, spectrum usage rights (C-Band/Ku-Band), and fiber backhaul capacity for pre-sale of future capacity and leasing revenue.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">3. Services Tokens</h3>
                <p className="text-sm">
                  Six business units tokenized: Broadband Internet, Broadcasting, Streaming & Media Distribution, Digital Media Content, Secure Cloud Data Center Solutions, and RWA Tokenization — driving early customer commitment and recurring subscription revenue.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">4. Media Content & NFTs</h3>
                <p className="text-sm">
                  Tokenizing licensed media content, live broadcasts, and original productions as platinum/gold-backed NFTs for added security and value. Revenue from primary token/NFT sales, ongoing royalties, and advertising.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">5. RWA — PLAT Token</h3>
                <p className="text-sm">
                  Currently active: 1 token = 1 gram of Platinum, securely vaulted in a bonded warehouse in Germany (UBS). Tokens are auditable, programmable, redeemable, and priced to LBMA-referenced markets. Provides 1.5x collateral coverage for the ecosystem.
                </p>
              </div>
              <div className="bg-white bg-opacity-10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">Enhanced Collateral</h3>
                <p className="text-sm">
                  PLAT Token™ Credit Enhancement Program provides institutional-grade, platinum-backed digital assets. Benefits include institutional collateral backed 1:1 by physical platinum bullion, risk mitigation, and bank-ready structured control/escrow arrangements.
                </p>
              </div>
            </div>

            <div className="bg-white bg-opacity-10 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">Industry Endorsement</h3>
              <div className="space-y-3 text-sm">
                <p>
                  <strong>Larry Fink, CEO of BlackRock:</strong> "everything will be tokenized."
                </p>
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
      </section>

      {/* Video Section */}
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
            <p className="text-xl">Next-Generation Satellite Connectivity in the Global AI and Space Economy</p>
          </div>

          <div className="text-center mb-10">
            <p className="text-lg max-w-4xl mx-auto">
              Integrating Multi-Orbit Networks, Cloud-Native Infrastructure, and Blockchain Monetization. GEO, MEO, and LEO satellites integrated with 5G/6G NTN and cloud-native core platforms form a global orbital data network enabling reliable, scalable Satellite IoT and next-generation broadcasting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center mb-10">
            <div>
              <div className="text-4xl font-bold mb-2">13</div>
              <p className="text-lg">Satellite Antennas (C-Band & Ku-Band)</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Global</div>
              <p className="text-lg">Coverage Reach</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">First</div>
              <p className="text-lg">To Tokenize Satellite Assets</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">1.5x</div>
              <p className="text-lg">Platinum-Backed Collateral Coverage</p>
            </div>
          </div>

          <div className="bg-blue-800 bg-opacity-50 p-6 rounded-lg mb-10">
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Satellite Services Driving the $630B Space Economy</h3>
            <p className="text-lg">
              SpaceX, led by Elon Musk, plans to expand its Starlink LEO satellite network and launch Starlink mobile phones with direct-to-device (D2D) services, following a $17 billion acquisition of spectrum range 1.9–2 GHz for bandwidth capacity in 2025. QuSat integrates into this ecosystem as a cloud-native telecom infrastructure layer.
            </p>
          </div>

          <div className="text-center">
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