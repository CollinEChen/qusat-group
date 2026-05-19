import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, DollarSign, Target, Rocket } from 'lucide-react';

const MarketRevenue = () => {
  const phases = [
    {
      title: "First Phase",
      icon: <Target className="w-8 h-8" />,
      description: "Token-based AI and Blockchain platform development and asset tokenization",
      timeline: "2 months",
      details: [
        "Our token-based AI and Blockchain platform can be developed within 2 months",
        "We can start the tokenization of our assets to rise to $50 million",
        "The $15 million investment can be paid back within 1 year",
        "Roll-out our 10-year content licensing agreements for 7000 hours of content"
      ]
    },
    {
      title: "Second Phase",
      icon: <DollarSign className="w-8 h-8" />,
      description: "Service tokenization and revenue generation",
      details: [
        "Start to tokenize our services (6 business service units)",
        "Continue to provide revenue and working capital"
      ]
    },
    {
      title: "Third Phase",
      icon: <TrendingUp className="w-8 h-8" />,
      description: "Content production and NFT tokenization",
      details: [
        "Activate our production studio to develop our own content for OTA and OTT content distribution",
        "Mobilize our two Mobile Uplink Trucks for IPTV streaming",
        "Tokenize our own content issued NFT's and asset backed with gold or silver for additional security and added value benefits generating multiple streams of revenue"
      ]
    },
    {
      title: "Fourth Phase",
      icon: <Rocket className="w-8 h-8" />,
      description: "Strategic partnerships and datacasting deployment",
      details: [
        "Pursue working agreements with Mobile Carriers for MVNO partnerships",
        "Pursue working agreements with Starlink and other Constellation network operators to tap into their LEO satellites and KA Band frequency networks for telecommunication services collaboration",
        "Deploy Datacasting technologies for additional revenue streams"
      ]
    }
  ];

  return (
    <div>
      <section 
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=2000")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Market & Revenue Strategy</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Strategic market roll-out and revenue generation through tokenization and content distribution
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Market Roll-out Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">USA TV Market Statistics</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-blue-600 font-bold mr-3">210</span>
                    <span>TV markets in the USA</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 font-bold mr-3">15</span>
                    <span>Average Low-Powered TV (LPTV) stations per market</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 font-bold mr-3">8</span>
                    <span>TV channels per LPTV station</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 font-bold mr-3">35</span>
                    <span>Mile radius viewership per LPTV station tower</span>
                  </li>
                  <li className="flex items-center">
                    <span className="text-blue-600 font-bold mr-3">25,200</span>
                    <span>TV channels that air programming</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Content Licensing</h3>
                <p className="text-gray-700 mb-4">
                  We have access to content licenses that can air in some of these LPTV stations as part of an affiliate revenue sharing program.
                </p>
                <p className="text-gray-700">
                  Access to a 10-year licensing deal for over 7000 hours of Entertainment, Sports, Lifestyle, Extreme Sports, Car racing/Autos, Bio's for World famous leaders/Movie Stars, Sports heroes, Many movies, kids animation, Fashion, Health, Weird & Wacky, History, Space Exploration, Music, Science, Inventions & more.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Revenue Potential</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">7,000+</h3>
                <p className="text-gray-600">Hours of licensed content available</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">7-10</h3>
                <p className="text-gray-600">Digital networks planned for development</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold text-blue-600 mb-2">Global</h3>
                <p className="text-gray-600">Distribution license coverage</p>
              </div>
            </div>
            <p className="text-lg text-gray-700 mt-6">
              The plan is to build 7-10 (24/7) digital networks for global content distribution. All content will be distributed through QuSat's satellite infrastructure with global licensing coverage.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">Market Expansion Timeline</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">First Year</h3>
                <p className="text-gray-700">
                  Create an affiliate revenue program for 10 TV channels to support programming of our content license.
                </p>
              </div>
              <div className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-xl font-bold mb-2">Second Year</h3>
                <p className="text-gray-700">
                  Expand programming into 20 TV channels. Including the acquisition of up to 5 LPTV stations in major markets. We have access to 30 LPTV stations available to purchase in the top 100 markets.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <h2 className="text-3xl font-bold text-center mb-12">Strategic Implementation Phases</h2>
            {phases.map((phase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-blue-600 mr-4">
                      {phase.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{phase.title}</h3>
                      <p className="text-gray-600">{phase.description}</p>
                      {phase.timeline && (
                        <p className="text-blue-600 font-semibold">Timeline: {phase.timeline}</p>
                      )}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {phase.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start">
                        <span className="text-blue-600 mr-2 mt-1">•</span>
                        <span className="text-gray-700">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="bg-blue-50 p-8 rounded-lg mt-16">
            <h2 className="text-3xl font-bold mb-6">NFT Success Examples</h2>
            <div className="space-y-4">
              <p className="text-gray-700">
                <strong>Example:</strong> In 2021 artist Tory Lanez converted his album into an NFT and in 56 seconds made $1 million. Most recently Sony is tokenizing one of Netflix's series and converting this into an NFT.
              </p>
              <p className="text-gray-700 font-semibold">
                QuSat is the first company to tokenize satellite assets, services and content as asset-backed NFTs.
              </p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mt-16">
            <h2 className="text-3xl font-bold mb-6">Datacasting Revenue Opportunity</h2>
            <p className="text-gray-700 mb-4">
              We will deploy datacasting technologies for additional revenue streams. Datacasting offers broadcasters a powerful economic model and revenue source.
            </p>
            <a 
              href="https://tvnewscheck.com/business/article/the-15-billion-broadcast-opportunity-why-datacasting-deserves-our-attention/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Learn More About Datacasting Opportunities
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketRevenue;