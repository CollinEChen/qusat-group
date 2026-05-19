import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Wallet, BarChart3, Globe } from 'lucide-react';

const Tokenization = () => {
  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1621761191319-c6fb62004040?auto=format&fit=crop&q=80&w=2000")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Real-World Asset (RWA) Tokenization</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Unlocking Infrastructure Through Tokenization
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">First Phase: Tokenizing Infrastructure Assets</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Objective</h3>
                <p className="text-gray-700">
                  Launch platform development and raise $50 million in capital by offering asset-backed tokens tied to infrastructure-based services.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Strategy Overview</h3>
                <p className="text-gray-700">
                  QuSat is launching an AI-powered blockchain ecosystem that tokenizes mission-critical real-world assets (RWA) into digital financial instruments.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Core Tokenized Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <Globe className="w-12 h-12" />,
                  title: "Satellite Spectrum",
                  description: "Reserve high-throughput channels for broadcast, broadband, and secure communications"
                },
                {
                  icon: <Coins className="w-12 h-12" />,
                  title: "Cloud & Edge Computing",
                  description: "Scale decentralized storage and computing on demand"
                },
                {
                  icon: <BarChart3 className="w-12 h-12" />,
                  title: "AI Workspaces",
                  description: "Secure, GPU-accelerated environments for AI development"
                },
                {
                  icon: <Wallet className="w-12 h-12" />,
                  title: "Enterprise VPN",
                  description: "Encrypted, token-authenticated network access"
                }
              ].map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-lg shadow-lg"
                >
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Second Phase: Community-Driven Tokens</h2>
            <p className="text-lg text-gray-700 mb-6">
              QuSat will tokenize our core services and the proprietary content of our clients. We will form strategic partnerships with content creators, artists, streamers, YouTubers, podcasters, and other digital innovators to convert their intellectual property into tokenized digital assets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Token Purpose</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Governance: Vote on network rules and protocol upgrades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Utility: Transaction fees and service access</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Revenue Generation</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Spectrum leasing and content distribution</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span>Enterprise-grade solutions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6">Example Use Case</h2>
            <p className="text-lg">
              Sony Tokenizes Netflix's The Seven Deadly Sins' TV as an NFT. License IP on the blockchain. This initiative marks a significant step in integrating mainstream anime intellectual property into the blockchain space.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Tokenization;