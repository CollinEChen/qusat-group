import React from 'react';
import { motion } from 'framer-motion';
import { Server, Cpu, DollarSign, TrendingUp } from 'lucide-react';

const DataCenters = () => {
  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">AI Cloud Data Center Infrastructure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Infrastructure Tokenization & AI Compute Monetization
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Market Roll-Out</h2>
              <p className="text-lg text-gray-600 mb-6">
                QuSat will tokenize AI-ready data center capacity to meet soaring global demand for high-performance compute (HPC). By converting physical power and compute resources into tradable digital units, QuSat enables investors and enterprises to access and scale AI workloads on-demand.
              </p>
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">Infrastructure Features</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Server className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <span>High-performance compute clusters</span>
                  </li>
                  <li className="flex items-start">
                    <Cpu className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <span>AI-optimized hardware</span>
                  </li>
                  <li className="flex items-start">
                    <DollarSign className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <span>Tokenized compute resources</span>
                  </li>
                  <li className="flex items-start">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-1 mr-2" />
                    <span>Scalable on-demand access</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <img
                src="https://i.imgur.com/Jvxp1HP.jpeg"
                alt="Data Center Infrastructure"
                className="rounded-lg shadow-xl w-full h-[400px] object-cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Revenue Potential</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Pivot from Crypto to AI Compute</h3>
                <p className="text-gray-600">
                  Former Bitcoin mining facilities now deliver up to 10x higher revenue per MW through AI applications, with 90%+ EBITDA margins.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">Tokenized AI Infrastructure Access</h3>
                <p className="text-gray-600">
                  Monetize idle capacity by selling pre-paid tokenized compute to enterprises, developers, and AI startups seeking scalable, cost-effective resources.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-xl font-bold mb-4">U.S.-Owned AI Infrastructure Era</h3>
                <p className="text-gray-600">
                  As global economies shift toward "earning and spending in AI dollars," QuSat positions itself as a next-gen digital infrastructure leader—where owning compute equals owning the future.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">The AI-Dollar Era</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-bold">
              "We're entering an AI-Dollar era: The world will earn and spend USD through U.S. owned AI infrastructure."
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataCenters;