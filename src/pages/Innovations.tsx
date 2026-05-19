import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cloud, Cpu, Globe2 } from 'lucide-react';

const Innovations = () => {
  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://i.imgur.com/K5Q0Fky.png")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative Business Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Revolutionizing global connectivity through innovative satellite technology and AI-powered solutions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Integrated Infrastructure</h2>
              <p className="text-lg text-gray-600 mb-6">
                QuSat is a fully integrated infrastructure utility-based facility with global satellite, fiber, cloud, and spectrum hub operations.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Key Infrastructure Components</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Global satellite operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Fiber network integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Cloud computing facilities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Spectrum hub operations</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://i.imgur.com/W5NGRVe.jpeg"
                alt="Satellite Infrastructure"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="order-2 lg:order-1">
              <img
                src="https://i.imgur.com/Jvxp1HP.jpeg"
                alt="Blockchain Technology"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Blockchain Ecosystem</h2>
              <p className="text-lg text-gray-600 mb-6">
                Building a token-based AI-powered blockchain ecosystem platform that enables Real-World Asset (RWA) tokenization, facilitating real-time value exchange between connected devices through digital tokens and monetized services.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Platform Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Real-World Asset tokenization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>AI-powered operations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Digital token integration</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Monetized services platform</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-12 mb-20">
            <h2 className="text-3xl font-bold mb-6 text-center">Next-Generation Services</h2>
            <p className="text-lg text-gray-600 mb-8 text-center max-w-3xl mx-auto">
              Offering end-to-end services across broadcasting, broadband internet, streaming AI-powered data centers, and tokenized assets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Network className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Broadcasting</h3>
                <p className="text-gray-600">Next-gen live and on-demand broadcasting services</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Cloud className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Cloud Solutions</h3>
                <p className="text-gray-600">AI-powered data centers and cloud infrastructure</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Cpu className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">IoT Integration</h3>
                <p className="text-gray-600">Advanced IoT connectivity solutions</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Globe2 className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">Space Economy</h3>
                <p className="text-gray-600">Innovations in satellite-powered services</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Revolutionary Change</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              QuSat at the forefront of the transactional IoT revolution is radically shifting the power and ownership of media content delivery into the hands of the people.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innovations;