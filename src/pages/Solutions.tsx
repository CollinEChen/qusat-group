import React from 'react';
import { motion } from 'framer-motion';
import { Network, Cloud, Lock, Cpu } from 'lucide-react';

const Solutions = () => {
  const solutions = [
    {
      title: "Blockchain Integration",
      description: "Secure, decentralized payment networks and smart contracts for automated content distribution and royalty management.",
      image: "https://i.imgur.com/h3cfZc2.jpeg",
      features: [
        "Automated royalty distribution",
        "Smart contract implementation",
        "Decentralized payment processing",
        "Transparent transaction tracking"
      ]
    },
    {
      title: "AI-Powered Infrastructure",
      description: "Advanced artificial intelligence solutions for network optimization, content delivery, and predictive maintenance.",
      image: "https://i.imgur.com/HcROoaj.png",
      features: [
        "Machine learning optimization",
        "Predictive maintenance",
        "Automated content curation",
        "Network performance analysis"
      ]
    },
    {
      title: "Quantum-Secure Systems",
      description: "Next-generation encryption and security measures to protect against emerging cyber threats.",
      image: "https://i.imgur.com/Q82HRjb.png",
      features: [
        "Quantum-resistant encryption",
        "Secure data transmission",
        "Advanced threat protection",
        "Real-time security monitoring"
      ]
    }
  ];

  return (
    <div>
      <section 
        className="bg-cover bg-center text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Innovative Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Cutting-edge technology solutions for the next generation of satellite communications
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
              >
                <div className={index % 2 === 0 ? "order-1 lg:order-1" : "order-1 lg:order-2"}>
                  <h2 className="text-3xl font-bold mb-6">{solution.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{solution.description}</p>
                  <ul className="space-y-4">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className={index % 2 === 0 ? "order-2 lg:order-2" : "order-2 lg:order-1"}>
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="rounded-lg shadow-xl w-full h-[300px] object-cover"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Solutions;