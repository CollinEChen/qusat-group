import React from 'react';
import { motion } from 'framer-motion';

const FCCLicenses = () => {
  return (
    <div>
      <section
        className="bg-cover bg-center bg-fixed text-white py-32"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://i.imgur.com/hIyYKNb.jpeg")',
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">FCC Licenses</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Most Valuable Asset Valuation
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-50 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold mb-6">FCC-Authorized C-Band and Ku-Band Spectrum Licenses</h2>
            <p className="text-lg text-gray-700 mb-8">
              QuSat's most valuable assets are its U.S. FCC-authorized C-Band and Ku-Band spectrum licenses, which provide interference-protected satellite frequency allocations for high-capacity broadband, media distribution, and secure data services. These licenses form the foundation of QuSat's satellite and hybrid broadband capabilities.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-3">C-Band Overview</h4>
                <p className="text-gray-700">
                  Offers robust, weather-resilient propagation characteristics, making it ideal for mission-critical communications, broadcasting, and secure data backhaul.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-3">Ku-Band Overview</h4>
                <p className="text-gray-700">
                  Supports high-throughput satellite connectivity optimized for broadband internet, media streaming, and content distribution.
                </p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-2xl font-bold mb-6">FCC Licenses Portfolio</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-bold mb-4 text-blue-800">C-Band License</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>License ID:</strong> SES–LIC–20111227-01502</li>
                    <li><strong>Call Sign:</strong> E120003</li>
                    <li><strong>Service:</strong> Fixed Satellite Service (FSS)</li>
                    <li><strong>Coverage:</strong> Global eastward and westward hemispheres</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg shadow">
                  <h4 className="text-lg font-bold mb-4 text-blue-800">Ku-Band Licenses</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>License 1:</strong> SES–LIC–20111104-01319</li>
                    <li><strong>License 2:</strong> SES–LIC–20130222-00194</li>
                    <li><strong>License 3:</strong> SES–LIC–20111104-01318</li>
                    <li><strong>Service:</strong> Fixed Satellite Service (FSS)</li>
                    <li><strong>Coverage:</strong> Global eastward and westward hemispheres</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4">C-Band License Overview and Valuation</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">License Overview</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Licensed Frequency Range:</strong> 3.7 GHz – 6.425 GHz</li>
                  <li><strong>C-Band Downlink:</strong> 3.7 – 4.2 GHz</li>
                  <li><strong>C-Band Uplink:</strong> 5.925 – 6.425 GHz</li>
                  <li><strong>Total Authorized Bandwidth:</strong> 741 MHz</li>
                  <li><strong>FCC License Valid Until:</strong> 02/08/2027 (renewable)</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">Antenna Infrastructure</h4>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>9.0m Harris Antenna</strong> with high-gain uplink/downlink capability</li>
                  <li><strong>5.5m Comtech Offset Antenna</strong> for mid-scale deployments</li>
                  <li><strong>Propagation Characteristics:</strong> Balances coverage and capacity, ideal for both urban and rural deployments</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-6">C-Band Spectrum Asset Valuation</h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-3">FCC Auction 107 (2020-2021)</h4>
                <p className="text-gray-700 mb-3">
                  The FCC auctioned 280 MHz of the C-Band spectrum, generating over <strong>$80 billion</strong>. Major telecom operators including Verizon, AT&T, and T-Mobile acquired licenses to enhance their 5G networks.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Spectrum Auctioned:</strong> 280 MHz in the 3.7–3.98 GHz range (C-Band)
                </p>
                <p className="text-gray-700 font-semibold">
                  Verizon Wireless paid $45.5 billion to acquire C-Band 3.7 GHz spectrum (zone restricted to USA utility applications).
                </p>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">QuSat's C-Band Spectrum Holdings</h4>
                <p className="text-gray-700 mb-4">
                  QuSat holds 741 MHz of FCC-licensed C-Band spectrum (uplink and downlink combined), which is 2.6x more bandwidth than the 280 MHz sold in Auction 107.
                </p>
                <div className="bg-white p-4 rounded mb-4">
                  <h5 className="font-bold mb-2">Conservative Valuation Calculation:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li>Auction 107 price per MHz: $80 billion ÷ 280 MHz = <strong>$285.7 million per MHz</strong></li>
                    <li>QuSat's 741 MHz valuation: 741 MHz × $285.7 million = <strong>$211.7 billion</strong></li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>Adjusted Conservative Estimate (25% discount for unlicensed satellite uplink spectrum):</strong>
                </p>
                <p className="text-gray-700 font-bold text-xl">
                  $211.7 billion × 0.75 = $158.8 billion
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">Alternative Valuation: Verizon's Acquisition</h4>
                <p className="text-gray-700 mb-4">
                  Verizon paid $45.5 billion for 160 MHz of C-Band spectrum in specific geographic zones.
                </p>
                <div className="bg-gray-100 p-4 rounded mb-4">
                  <h5 className="font-bold mb-2">Price per MHz Calculation:</h5>
                  <ul className="space-y-2 text-gray-700">
                    <li>Verizon's price per MHz: $45.5 billion ÷ 160 MHz = <strong>$284.4 million per MHz</strong></li>
                    <li>QuSat's 741 MHz valuation: 741 MHz × $284.4 million = <strong>$210.7 billion</strong></li>
                  </ul>
                </div>
                <p className="text-gray-700 mb-2">
                  <strong>Adjusted Conservative Estimate (25% discount):</strong>
                </p>
                <p className="text-gray-700 font-bold text-xl">
                  $210.7 billion × 0.75 = $158.0 billion
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">Summary: C-Band Spectrum Valuation</h4>
                <p className="text-gray-700 mb-4">
                  Based on both FCC Auction 107 and Verizon's acquisition, QuSat's 741 MHz of C-Band spectrum is conservatively valued at:
                </p>
                <p className="text-3xl font-bold text-green-800 text-center mb-4">
                  $158 billion to $211 billion
                </p>
                <p className="text-gray-700 text-center">
                  This represents the infrastructure's most valuable asset and positions QuSat as a significant player in the satellite communications and 5G infrastructure market.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg shadow">
                <h3 className="text-2xl font-bold mb-4">Ku-Band License Overview and Strategic Value</h3>
                <p className="text-gray-700 mb-6">
                  QuSat holds three FCC-authorized Ku-Band spectrum licenses, providing complementary coverage and capacity to its C-Band operations. Ku-Band represents a critical asset for high-throughput satellite internet services and premium media distribution applications.
                </p>

                <div className="bg-white p-4 rounded mb-6">
                  <h4 className="text-lg font-bold mb-4">Ku-Band Spectrum Characteristics</h4>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">•</span>
                      <span><strong>Higher Frequency Operation:</strong> Ku-Band operates at higher frequencies than C-Band, enabling smaller, more cost-effective satellite antennas while maintaining high data rates</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">•</span>
                      <span><strong>High-Throughput Optimization:</strong> Ideal for broadband internet, media streaming, and premium content distribution with superior capacity per satellite</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">•</span>
                      <span><strong>Global Coverage:</strong> Triple licensing across multiple bands ensures global eastward and westward hemisphere coverage with redundancy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 font-bold mr-2">•</span>
                      <span><strong>Revenue Diversification:</strong> Enables QuSat to serve diverse market segments including consumer broadband, enterprise connectivity, and broadcast media</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="text-lg font-bold mb-3">Market Applications</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>High-speed broadband internet for residential and enterprise customers</li>
                    <li>Premium media streaming and content distribution networks</li>
                    <li>Backup and redundancy for terrestrial networks</li>
                    <li>Remote and maritime connectivity solutions</li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow mb-8">
                <h3 className="text-2xl font-bold mb-4">Strategic Advantage and Service Enablement</h3>
                <p className="text-gray-700 mb-4">
                  QuSat's FCC licenses authorize the operation of Fixed Satellite Service (FSS) earth stations across the full protected C-Band uplink spectrum (5.925–6.425 GHz) and the full downlink band (3.7–4.2 GHz), ensuring uninterrupted satellite operations for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
                  <li>Satellite broadband delivery</li>
                  <li>Global media and content distribution</li>
                  <li>Secure enterprise and government data backhaul</li>
                  <li>Rural and underserved connectivity</li>
                </ul>

                <h4 className="text-xl font-bold mb-3">Terrestrial & Satellite Services - Market Expansion & Revenue Growth</h4>
                <p className="text-gray-700 mb-4">
                  Enabled by FCC-authorized C-Band and Ku-Band spectrum, NGSO (Non-Geostationary Satellite Orbit) interoperability rules, and advanced multi-band antenna technology, QuSat operates a unified hybrid infrastructure that can deliver both satellite-based and terrestrial broadband services. Satellite connectivity is seamlessly integrated with terrestrial networks such as fiber and last-mile access technologies to deliver broadband access, streaming services, and enterprise solutions to end users.
                </p>
                <p className="text-gray-700">
                  This architecture positions QuSat within the broader 5G-adjacent ecosystem, built on non-terrestrial network (NTN) infrastructure, enabling expanded market reach, diversified revenue growth while remaining fully compliant with FCC policy and without using satellite C-Band spectrum for terrestrial 5G deployment.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg shadow">
                <h4 className="text-xl font-bold mb-4">Key Differentiators</h4>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong>Global Reach:</strong> Unlike terrestrial 5G licenses that are geographically restricted, QuSat's satellite spectrum provides nationwide and global coverage.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong>Hybrid Infrastructure:</strong> Ability to deliver services via both satellite and terrestrial integration, maximizing market opportunities.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong>Future-Proof:</strong> Positioned for emerging 5G NTN (Non-Terrestrial Network) standards and satellite-to-smartphone connectivity.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-600 font-bold mr-2">•</span>
                    <span><strong>Renewable License:</strong> FCC license valid until 02/08/2027 with renewal capability, ensuring long-term operational rights.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FCCLicenses;
