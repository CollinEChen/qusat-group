import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, TrendingUp, Shield, BarChart } from 'lucide-react';

const Investors = () => {
  const investmentHighlights = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Infrastructure Value",
      value: "$2.75B",
      description: "Total infrastructure value including FCC licenses and facilities"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Asset Coverage Ratio",
      value: "38:1",
      description: "Strong asset coverage providing excellent investment security"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Satellite Antennas",
      value: "13",
      description: "Strategic funding for expansion and technology enhancement"
    },
    {
      icon: <BarChart className="w-8 h-8" />,
      title: "Revenue Potential",
      value: "$12-15M",
      description: "Monthly revenue potential from content partnerships"
    }
  ];

  return (
    <div>
      <section 
        className="bg-cover bg-center text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?auto=format&fit=crop&q=80&w=2000")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Investor Relations</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Join us in revolutionizing global satellite communications with blockchain and AI integration
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                <div className="text-3xl font-bold text-blue-600 mb-2">{highlight.value}</div>
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
              <h2 className="text-3xl font-bold mb-6">Investment Opportunity</h2>
              <div className="space-y-4">
                <p className="text-lg text-gray-600">
                  QuSat Group presents a unique investment opportunity in the rapidly growing satellite communications industry. Our infrastructure and FCC licenses provide a strong foundation for future growth.
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
                    <span className="text-gray-600">Strong potential for expansion in emerging markets</span>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Contact Investor Relations</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 mb-6">
                  For detailed information about investment opportunities, please contact our investor relations team:
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

export default Investors;