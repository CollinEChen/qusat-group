import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const executives = [
    {
      name: "Dr. Frank Honore, PhD",
      title: "Chief Executive Officer",
      education: "PhD in Electrical Engineering and Computer Science from MIT",
      description: "25+ years of experience driving innovation in wireless technologies, embedded systems, and medical devices.",
      image: "https://i.imgur.com/6WpiSR0.png" // Replace with actual image URL
    },
    {
      name: "Marco Barfield",
      title: "Managing Director",
      description: "25+ years of experience in telecommunications, cloud computing, and fintech sectors.",
      image: "https://i.imgur.com/1pssVgq.jpeg" // Replace with actual image URL
    },
    {
      name: "Arthur 'AJ' Honore",
      title: "Managing Director",
      description: "Experienced CEO and CFO with expertise in financial services and technology sector.",
      image: "https://i.imgur.com/Roj7N7t.png" // Replace with actual image URL
    },
    {
      name: "Mark Mayo",
      title: "Chief Technology Officer",
      description: "25+ years of experience in media and television industry operations.",
      image: "https://i.imgur.com/GzVB4wr.png" // Replace with actual image URL
    },
    {
      name: "Armond Honore",
      title: "Chief Technology Innovation Officer",
      education: "BS in Computer Engineering from Clemson University",
      description: "Skilled technology entrepreneur and IT consultant specializing in AI and software architecture.",
      image: "https://i.imgur.com/geVs19y.png" // Replace with actual image URL
    },
    {
      name: "Rotimi Ibrahim",
      title: "Chief Operating Officer",
      description: "Experienced Satellite Broadcast Engineer specializing in troubleshooting VSAT systems, encoders, and RF uplink equipment for seamless global operations.",
      image: "https://i.imgur.com/iT25U1n.png" // Replace with actual image URL
    },
    {
      name: "Sathya Prakash",
      title: "Blockchain Architect | Satellite Blockchain Innovator | Web3 Investment Banker",
      description: "8+ years in blockchain architecture & product leadership.",
      image: "https://i.imgur.com/RMMBBzF.png" // Professional headshot placeholder
    }
  ];

  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-56"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.5)), url("https://i.imgur.com/K5d0VG3.png")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About QuSat Group</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Formerly known as World Teleport, QuSat Group is revolutionizing global connectivity through innovative satellite technology and AI-powered solutions.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
               To empower content creators, streamers, fans, and enterprises through a blockchain-powered ecosystem where they can interact, monetize, and distribute media securely, transparently, and without borders.
              </p>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600">
                Our vision is to upgrade and enhance our infrastructure with Blockchain-based decentralized technology solutions, AI-powered applications, and Next-generation services.
              </p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Key Facts</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>13 satellite antennas and 2 mobile antennas (C & Ku-band)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>15,000-square-foot data center facility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>US FCC C-Band & Ku-Band spectrum licenses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 font-bold mr-2">•</span>
                  <span>Global EASTWARD and WESTWARD HEMISPHERE coverage</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="leadership" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Executive Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {executives.map((exec, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <div className="mb-4">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-24 h-24 rounded-full mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2">{exec.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{exec.title}</p>
                {exec.education && (
                  <p className="text-gray-600 text-sm mb-3">{exec.education}</p>
                )}
                <p className="text-gray-600">{exec.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;