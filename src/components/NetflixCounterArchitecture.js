import React from 'react';
import { FaMobileAlt, FaDesktop, FaTv, FaServer, FaDatabase, FaProjectDiagram, FaExchangeAlt, FaCubes, FaChartLine } from 'react-icons/fa';
import { SiNetflix } from 'react-icons/si';

const NetflixCounterArchitecture = () => {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-red-500 to-red-700 text-transparent bg-clip-text">
            Netflix Distributed Counter Architecture
          </h1>
          <p className="text-gray-400">How Netflix built a scalable distributed counter system</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Client Layer */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-red-400 border-b border-red-500 pb-2">Client Layer</h2>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-red-500 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-red-900 bg-opacity-30 rounded-lg text-red-400">
                  <FaMobileAlt className="text-2xl" />
                </div>
                <h3 className="text-lg font-medium">Client Devices</h3>
              </div>
              <p className="text-gray-400 text-sm">
                Mobile, Web, and TV applications that interact with the Netflix service.
              </p>
              <div className="mt-4 flex justify-center space-x-4 text-gray-500">
                <FaMobileAlt className="text-xl" />
                <FaDesktop className="text-xl" />
                <FaTv className="text-xl" />
              </div>
            </div>
          </div>


          {/* API Layer */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-blue-400 border-b border-blue-500 pb-2">API Layer</h2>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-blue-900 bg-opacity-30 rounded-lg text-blue-400">
                  <FaServer className="text-2xl" />
                </div>
                <h3 className="text-lg font-medium">Netflix API Gateway</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Central entry point handling all client requests with load balancing and routing.
              </p>
              
              <div className="space-y-3 mt-6">
                <div className="bg-gray-700 bg-opacity-50 p-3 rounded text-sm">
                  <span className="text-blue-400">Increment Count</span>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-3 rounded text-sm">
                  <span className="text-blue-400">Decrement Count</span>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-3 rounded text-sm">
                  <span className="text-blue-400">Get Count</span>
                </div>
                <div className="bg-gray-700 bg-opacity-50 p-3 rounded text-sm">
                  <span className="text-blue-400">Clear Count</span>
                </div>
              </div>
            </div>
          </div>

          {/* Data Layer */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-purple-400 border-b border-purple-500 pb-2">Data Layer</h2>
            
            <div className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-colors">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-purple-900 bg-opacity-30 rounded-lg text-purple-400">
                  <SiNetflix className="text-2xl" />
                </div>
                <h3 className="text-lg font-medium">TimeSeries Abstraction</h3>
              </div>
              <p className="text-gray-400 text-sm mb-4">
                Handles event processing and time-based data aggregation.
              </p>
              
              <div className="mt-6 space-y-4">
                <div className="bg-gray-700 bg-opacity-50 p-3 rounded">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-400">Event Buckets</span>
                    <FaDatabase className="text-purple-400" />
                  </div>
                </div>
                
                <div className="bg-gray-700 bg-opacity-50 p-3 rounded">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-400">Rollup Pipeline</span>
                    <FaExchangeAlt className="text-purple-400" />
                  </div>
                </div>
                
                <div className="bg-gray-700 bg-opacity-50 p-3 rounded">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-400">Aggregation Layer</span>
                    <FaCubes className="text-purple-400" />
                  </div>
                </div>
              </div>
              
              <div className="mt-6 bg-gray-700 bg-opacity-50 p-3 rounded text-sm">
                <div className="flex items-center justify-between">
                  <span>Cassandra</span>
                  <FaDatabase className="text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Event Flow */}
        <div className="mt-12 bg-gray-800 rounded-lg p-6 border border-gray-700">
          <h2 className="text-xl font-semibold text-yellow-400 border-b border-yellow-500 pb-2 mb-6">Event Flow</h2>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="bg-red-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">1</div>
              <div className="ml-4">
                <h4 className="font-medium">Client Request</h4>
                <p className="text-sm text-gray-400">User action triggers a counter update</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-blue-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">2</div>
              <div className="ml-4">
                <h4 className="font-medium">API Processing</h4>
                <p className="text-sm text-gray-400">Request is validated and processed</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-purple-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">3</div>
              <div className="ml-4">
                <h4 className="font-medium">Event Processing</h4>
                <p className="text-sm text-gray-400">Event is processed through the TimeSeries pipeline</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="bg-green-500 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold">4</div>
              <div className="ml-4">
                <h4 className="font-medium">Data Storage</h4>
                <p className="text-sm text-gray-400">Data is stored in Cassandra and aggregated</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NetflixCounterArchitecture;
