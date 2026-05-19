import React from 'react';
import { motion } from 'framer-motion';

const Infrastructure = () => {
  const infrastructureItems = [
    {
      title: "Data Center Hub",
      description: "An ex-Verizon Tier III data center with 3.33 MW power source. A centralized facility that hosts your cloud computing, data storage, and digital media delivery infrastructure, enabling secure, scalable, and high-speed processing and distribution of broadband, streaming, and telecommunications services across global satellite and terrestrial networks. A Power source to power at least medium size Data Center with direct connection to the City's power grid for scalability."
    },
    {
      title: "Cloud-based Backhaul",
      description: "A high-capacity virtualized network layer that securely transports data between the satellite ground stations, data centers, and terrestrial networks, optimizing connectivity, reducing latency, and ensuring seamless global content and service delivery."
    },
    {
      title: "Fiber Distribution Hub",
      description: "Double Redundancy Feeds Connected to carrier's Fiber Backbone."
    },
    {
      title: "Satellite Ground Station Hub Facility",
      description: "Gateway Links for Data Transmission Connecting and Delivering All Forms of Telecommunications Across Satellite and some Terrestrial Networks."
    },
    {
      title: "Satellite Antennas and Uplink Mobile Trucks",
      description: "Satellite Antennas and Uplink Mobile Trucks (C & KU-bands) for IPTV Live Streaming."
    },
    {
      title: "U.S. FCC C-Band and Ku-Band Spectrum Licenses",
      description: "Critical satellite frequency allocations authorized by the Federal Communications Commission (FCC), enabling QuSat to deliver high-capacity, interference-protected broadband, broadcasting, and data services. QuSat's licensed access to C-Band (ideal for robust, weather-resilient communications) and Ku-Band (optimized for high-throughput media and internet services) position QuSat at the core of the global satellite and telecommunications ecosystem."
    },
    {
      title: "Global Satellite Reach",
      description: "A Satellite infrastructure that provides seamless global coverage across continents, enabling continuous, reliable connectivity for broadband, broadcasting, streaming, and digital communications across global markets."
    },
    {
      title: "Network Operating Center (NOC)",
      description: "A centralized facility that monitors, manages, and maintains the performance, security, and reliability of your satellite, cloud, and terrestrial network operations, ensuring 24/7 service availability and rapid issue resolution across all connected platforms."
    },
    {
      title: "Production Studio",
      description: "Live news and content production for distribution."
    },
    {
      title: "Mobile Virtual Network Operator (MVNO)",
      description: "QuSat will pursue a working agreement to rent the towers and data capacity from big wireless carriers to offer cheaper or niche plans to consumers on a national level."
    },
    {
      title: "Constellation Network Operators",
      description: "QuSat will pursue working agreements with Starlink and other Constellation network operators to tap into their LEO satellites and KA Band frequency networks for telecommunication services collaboration."
    },
    {
      title: "5G Datacasting Technology",
      description: "Application of datacasting using our utility-based infrastructure and FCC C-Band spectrum license to integrate into the 5G Network using 5G datacasting technology to provide both satellite and terrestrial telecommunications services across all IoT devices. Creating a hybrid network with seamless communication between satellites and terrestrial 5G networks offering wider coverage, especially in remote or challenging areas. 5G datacasting enables us to broadcast data to multiple receivers, excellent for video streaming, media delivery, and digital media content."
    },
    {
      title: "Content Licenses",
      description: "QuSat has access to acquire a 10-year content licensing agreements for 7000 hours plus of content genres that can air in some of the LPTV stations as part of an affiliate revenue sharing program."
    },
    {
      title: "Token-based AI and Blockchain Ecosystem Platform",
      description: "QuSat will use our token base platform to tokenize assets, services and content issued NFT's that is asset backed."
    }
  ];

  return (
    <div>
      <section
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://i.imgur.com/rr6R8qI.jpeg")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Infrastructure</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Utility-based Infrastructure that provides hybrid connectivity across satellite and some terrestrial networks for all mediums of telecommunication services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://i.imgur.com/f83lJmN.jpeg"
                alt="Data Center Infrastructure"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Data Center Hub</h3>
                <p className="text-gray-600 text-sm">15,000-square-foot state-of-the-art data center facility with 3.33 MW power source</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://i.imgur.com/hIyYKNb.jpeg"
                alt="Satellite Dish Array"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Satellite Antennas</h3>
                <p className="text-gray-600 text-sm">13 satellite antennas and 2 mobile antennas with C-Band and Ku-Band capabilities</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://i.imgur.com/Jvxp1HP.jpeg"
                alt="Network Operations Center"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Network Operations Center</h3>
                <p className="text-gray-600 text-sm">24/7 monitoring and management of satellite, cloud, and terrestrial networks</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://i.imgur.com/uDaajKp.jpeg"
                alt="Fiber Distribution Hub"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Fiber Distribution Hub</h3>
                <p className="text-gray-600 text-sm">Double redundancy feeds connected to carrier's fiber backbone</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://i.imgur.com/goyl4BY.jpeg"
                alt="Production Studio"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Production Studio</h3>
                <p className="text-gray-600 text-sm">Live news and content production facility for global distribution</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src="https://i.imgur.com/bF1mllK.png"
                alt="Mobile Uplink Trucks"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2">Mobile Uplink Trucks</h3>
                <p className="text-gray-600 text-sm">Mobile satellite uplink vehicles for IPTV live streaming and remote broadcasting</p>
              </div>
            </motion.div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <ol className="space-y-6">
              {infrastructureItems.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex"
                >
                  <span className="text-blue-600 font-bold text-lg mr-4 mt-1 min-w-[2rem]">
                    {index + 1}.
                  </span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Infrastructure;
