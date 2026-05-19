import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, BarChart } from 'lucide-react';

const Partnerships = () => {
  const investmentHighlights = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Satellite Antennas",
      value: "14",
      description: "Advanced C-Band and Ku-Band satellite antennas for global coverage"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Data Center",
      value: "15,000",
      description: "Square feet of state-of-the-art data center facility"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "FCC Licensed",
      value: "C & Ku Band",
      description: "US FCC licensed spectrum with global reach capabilities"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Global Coverage",
      value: "Worldwide",
      description: "Eastern and Western hemisphere satellite coverage"
    }
  ];

  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://i.imgur.com/y77NBvz.jpeg")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Strategic Partnerships</h1>
            <p className="text-xl max-w-3xl mx-auto">
             Building a global network of strategic partnerships to revolutionize satellite communications
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Network Integration</h2>
            <p className="text-lg text-gray-700 mb-6">
              Our Utility-based infrastructure will seamlessly integrate with other networks and companies Starlink, Oneweb, Amazon's Kuiper Viasat, Hughesnet, AST Spacemobile, Taara technologies, Helium Network and other Network companies. Our Satellite Ground Station Hub will seamlessly connect to Constellation Network of satellites, Decentralized networks and equipment's to deliver Satellite and Terrestrial Telecommunication services.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Helium Network Partnership - Real World Use Case</h2>
            <p className="text-lg text-gray-700 mb-6">
              The first Token-based decentralized wireless infrastructure powered by blockchain. It enables devices like IoT sensors, GPS trackers, smart meters, and more to connect to the internet using low-power, long-range wireless technology, now expanding to 5G and Wi-Fi.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Core Technology</h3>
                <p className="text-gray-700 mb-4">
                  Proof-of-Coverage (PoC) incentivizes users to deploy Hotspots with HNT Tokens. Users earn crypto tokens for providing Hotspots coverage and transferring data.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Ecosystem Tokens</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• HNT (Helium Network Token)</li>
                  <li>• MOBILE (5G service incentive token)</li>
                  <li>• IOT (LoRaWAN device data token)</li>
                </ul>
                <p className="mt-4 text-gray-700">Uses CBRS spectrum in the U.S.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-blue-600 mb-4 flex justify-center">
                  {highlight.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{highlight.title}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">13</div>
                <p className="text-gray-600">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Partnership Opportunities</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  QuSat Group offers unique partnership opportunities in the rapidly growing satellite communications industry. Our infrastructure and FCC licenses provide a strong foundation for strategic collaborations.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-600">US FCC C-Band & Ku-Band spectrum licenses with global reach</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-600">15,000-square-foot state-of-the-art data center facility</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-600">Blockchain and AI integration for next-generation services</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 font-bold mr-2">•</span>
                    <span className="text-gray-600">First-to-market tokenization of satellite infrastructure</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Our Team</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6">
                  For detailed information about partnership opportunities, please contact our team:
                </p>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Marco Barfield</h3>
                    <p className="text-gray-600">Managing Director</p>
                    <div className="space-y-1">
                      <a href="tel:+18323457512" className="block text-blue-600 hover:text-blue-800">
                        +1 832-345-7512
                      </a>
                      <a href="mailto:marco@qusat.com" className="block text-blue-600 hover:text-blue-800">
                        marco@qusat.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold">Arthur "AJ" Honore</h3>
                    <p className="text-gray-600">Managing Director</p>
                    <div className="space-y-1">
                      <a href="tel:+18323197000" className="block text-blue-600 hover:text-blue-800">
                        +1 832-319-7000
                      </a>
                      <a href="mailto:aj@qusat.com" className="block text-blue-600 hover:text-blue-800">
                        aj@qusat.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnerships;