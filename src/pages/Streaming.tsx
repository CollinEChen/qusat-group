import React from 'react';
import { motion } from 'framer-motion';

const Streaming = () => {
  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://i.imgur.com/X079gjB.jpeg")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Global Streaming Solutions</h1>
            <p className="text-xl max-w-3xl mx-auto">
              QuSat provides Global delivery of broadcasting and streaming content, voice, data, video, OTA, OTT, and IPTV media services to all users including underserved communities and remote regions, land and sea.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-black-600 font-bold mb-8">
              QuSat Group is democratizing global satellite communications by delivering seamless, on-demand access to internet and television for users around the world, especially benefiting those in underserved communities and remote regions where reliable content delivery is critical.
            </p>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Strategic Market Roll-Out</h2>
              <p className="text-gray-700 mb-6">
                Using our Utility-based infrastructure, Global Hubs and FCC C-Band spectrum license we will integrate into the 5G Network using 5G datacasting technology to provide both satellite and terrestrial telecommunications services across all IoT devices. Creating a hybrid network with seamless communication between satellites and terrestrial 5G networks offering wider coverage, especially in remote or challenging areas. 5G datacasting enables us to broadcast data to multiple receivers, excellent for video streaming, media delivery, and digital media content.
              </p>
              <p className="text-gray-700 mb-6">
                We will distribute our licensed content over LPTV stations across the USA. We will broadcast over the digital sub-channels available per TV station. We will share Ads as part of an Affiliate revenue sharing program. We will purchase available LPTV stations to broadcast our own licensed content, while producing our own content using our Production Studio.
              </p>
              <p className="text-gray-700">
                As we produce our own content for distribution, we will also partner with the Big Four TV Networks and the big Media Companies for revenue sharing.
              </p>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Market Support</h2>
              <p className="text-gray-700">
                The US FCC repurposing of C-Band spectrum usage up to 4.0 GHz for 5G network expansion will help enable the deployment of our business service units to deliver broadband internet and content distribution OTA, OTT, and IPTV using ATSC 3.0 standard and 5G datacasting technology.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-6">Enhanced Services</h2>
              <p className="text-gray-700">
                We will enhance our services with AI, Blockchain-based Decentralized network solutions and applications for next-gen internet, television, streaming and digital media services for a highly scalable entertainment and media ecosystem across all IoT devices.
              </p>
            </div>

            <h2 className="text-3xl font-bold mb-6">Use Cases</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">1. Live Streaming Services</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Process:</strong> Provide an on-demand streaming platform enabling event and content creators to pre-purchase spectrum bandwidth usage rights, to launch live content streaming globally, particularly in underserved communities and remote areas.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Objective:</strong> Deliver reliable, high-quality streaming services worldwide, with a strong emphasis on remote regions both on land and at sea.
                </p>
                <p className="text-gray-600">
                  <strong>Revenue Model:</strong> Flexible subscription plans and pay-per-use options.
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold mb-4">2. Financial Connectivity Solutions</h3>
                <p className="text-gray-600 mb-4">
                  <strong>Process:</strong> Deploy blockchain-based solutions, decentralized payment networks, Web3 ecosystem enhanced by AI powered applications to deliver secure IIN's bank cards for transaction processing, remittances and other financial services to banks and accountholders.
                </p>
                <p className="text-gray-600 mb-4">
                  <strong>Objective:</strong> Provide decentralized Web3 financial networks and scalable solutions to financial institutions through integrated cloud-based data centers and satellite connectivity.
                </p>
                <p className="text-gray-600">
                  <strong>Revenue Model:</strong> Licensing agreements, transactional fees, and recurring subscriptions.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-12">
              <h2 className="text-2xl font-bold mb-4">3. Web3 Ecosystems, IoT Connectivity, and Space Economy Partnerships</h2>
              <p className="text-gray-600">
                Integrate satellite-based, decentralized payment systems, Web3 solutions, and IoT connectivity through partnerships with Constellation Network providers.
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4">Remote Region - Timbuktu, West Africa</h3>
            <div className="mb-12">
              <video
                className="w-full rounded-lg shadow-lg"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://i.imgur.com/Cghz75h.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Streaming;