import React from 'react';
import { motion } from 'framer-motion';
import { Podcast as Broadcast, Wifi, Server, Brain, Coins, Globe2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      icon: <Broadcast className="w-12 h-12" />,
      title: "Global Broadcasting and Streaming",
      description: "Next-generation on-demand broadcasting and content delivery worldwide, supporting IPTV, OTT, and traditional broadcasting channels.",
      features: [
        "400+ IPTV channels",
        "4K/8K live sports streaming",
        "Pay-per-view events",
        "Content syndication"
      ],
      link: "/streaming"
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      title: "Broadband Internet",
      description: "High-speed satellite internet solutions for remote regions and maritime vessels, ensuring global connectivity.",
      features: [
        "150Mbps broadband speeds",
        "Maritime/Aviation networks",
        "Remote area coverage",
        "Low latency connection"
      ]
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Data Centers",
      description: "15,000-square-foot state-of-the-art data center facility with advanced security and redundancy.",
      features: [
        "AI-powered infrastructure",
        "Quantum-resistant encryption",
        "15 MW capacity",
        "Disaster recovery solutions"
      ],
      link: "/data-centers"
    },
    {
      icon: <Brain className="w-12 h-12" />,
      title: "AI Solutions",
      description: "Advanced artificial intelligence and machine learning solutions for content delivery and network optimization.",
      features: [
        "Smart content curation",
        "Automated ad placement",
        "Viewer retention analysis",
        "Network optimization"
      ]
    },
    {
      icon: <Coins className="w-12 h-12" />,
      title: "Tokenization",
      description: "Convert real-world assets and infrastructure into tradable digital tokens for seamless value exchange.",
      features: [
        "Infrastructure tokenization",
        "Digital asset management",
        "Smart contracts",
        "Blockchain integration"
      ],
      link: "/tokenization"
    },
    {
      icon: <Globe2 className="w-12 h-12" />,
      title: "Global Coverage",
      description: "Comprehensive satellite coverage across both Eastern and Western hemispheres with C-Band and Ku-Band capabilities.",
      features: [
        "13 satellite antennas",
        "2 mobile antennas",
        "FCC licensed spectrum",
        "Global reach"
      ]
    }
  ];

  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-48"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1516849677043-ef67c9557e16?auto=format&fit=crop&q=80&w=2000")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Comprehensive satellite solutions powered by cutting-edge technology and innovation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">QuSat - Business Service Units</h2>
            <p className="text-lg text-gray-700 mb-6">
              By leveraging our infrastructure and hub operations we will provide:
            </p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span>Broadband Internet</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span>Broadcasting</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span>Streaming & Media Delivery</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span>Digital Media Content</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span>Secure Cloud Data Center Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-600 mr-2">•</span>
                <span>Real World Asset's (RWA's) Tokenization</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">SERVICE OFFERING</h2>
            
            <p className="text-lg text-gray-700 mb-6">
              QuSat is a global media and satellite communications company providing network connectivity, content distribution, and secure cloud data center solutions.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              We deliver seamless broadband internet, streaming, and digital media services to OTA networks, and OTT and IPTV platforms.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Content Distribution</h3>
                <p className="text-gray-700 mb-6">
                  We provide a hybrid broadcasting solution for voice, data, and video content across mobile phones, CTVs, computers, and tablets.
                </p>

                <h3 className="text-2xl font-bold mb-4">Content Delivery Services</h3>
                <p className="text-gray-700 mb-4">Our content is delivered through:</p>
                <ul className="space-y-3 text-gray-700">
                  <li><strong>OTA Networks</strong> – Television programming via Traditional TV networks and radio broadcasts.</li>
                  <li><strong>OTT Streaming Platforms</strong> – Live and on-demand news, shows, music, movies and media content direct to users via Internet-based services like YouTube, Netflix, Amazon, Hulu, Podcasts, Spotify.</li>
                  <li><strong>IPTV Digital Media Platform</strong> – Live and on-demand TV news, shows, music, movies and media content via Internet subscription-based services such as YouTube TV, Hulu +, Live TV, FuboTV, Sling TV, IPTVGREAT, IPTV Unlock, and IPTV GEAR.</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">Who We Serve</h3>
                <p className="text-gray-700 mb-6">
                  We serve a community of Enterprises and content creators worldwide, including underserved, rural and remote regions.
                </p>
                <p className="text-gray-700">
                  Through QuSat, enterprises, content creators, streamers, fans and users alike can own, lease, or stake bandwidth, AI compute, distribute media content securely, engage and monetize anytime, anywhere.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">INNOVATIVE BUSINESS SOLUTIONS</h2>
            
           
            
            <p className="text-lg text-gray-700 mb-6">
              QuSat is a fully integrated infrastructure utility-based facility that includes a cloud data center, fiber distribution, global satellite and spectrum hub operations. Providing a Token-based AI-powered blockchain ecosystem platform offering Next-gen live and on-demand broadband internet, broadcasting, streaming, digital media services, and robust cloud data center solutions, while advancing applications of decentralized payment networks, Web3 ecosystems, IoT connectivity, and innovations across the satellite-powered space economy.
            </p>
            
            <p className="text-lg text-gray-700 mb-6 font-semibold">
              QuSat will Tokenize Assets - Tokenize services – Tokenize media content
            </p>
            
            <p className="text-lg text-gray-700 font-bold">
              QuSat at the forefront of the transactional IoT revolution is radically shifting the power and ownership of media content delivery into the hands of the people.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="text-blue-600 mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="text-blue-600 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {service.link && (
                    <Link
                      to={service.link}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                      onClick={handleClick}
                    >
                      Read More →
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;