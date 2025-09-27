import React, { useState } from 'react';
import { TrendingUp, Users, Leaf, Award, BarChart3, PieChart, Activity, Globe } from 'lucide-react';

const AdminPortal: React.FC = () => {
  const [activeView, setActiveView] = useState<'dashboard' | 'analytics' | 'blockchain'>('dashboard');

  const stats = {
    totalFarmers: 10543,
    totalConsumers: 45632,
    totalRestaurants: 1234,
    wasteReduced: 75456, // kg
    revenueGenerated: 2543678, // rupees
    co2Saved: 15678 // kg
  };

  const recentActivity = [
    { id: 1, action: 'New farmer registration', user: 'Rajesh Singh', time: '2 mins ago', type: 'farmer' },
    { id: 2, action: 'Large order placed', user: 'Green Valley Restaurant', time: '5 mins ago', type: 'order' },
    { id: 3, action: 'Surplus food redistributed', user: 'City NGO Network', time: '12 mins ago', type: 'redistribution' },
    { id: 4, action: 'Consumer milestone reached', user: 'Priya Sharma', time: '18 mins ago', type: 'reward' }
  ];

  const topFarmers = [
    { name: 'Harpreet Kaur', revenue: 45600, location: 'Punjab' },
    { name: 'Mohan Kumar', revenue: 38900, location: 'Himachal Pradesh' },
    { name: 'Amit Sharma', revenue: 32100, location: 'Haryana' }
  ];

  const wasteData = [
    { month: 'Jan', predicted: 1200, actual: 890 },
    { month: 'Feb', predicted: 1100, actual: 760 },
    { month: 'Mar', predicted: 1300, actual: 920 },
    { month: 'Apr', predicted: 1000, actual: 650 }
  ];

  const blockchainTransactions = [
    { id: 'tx001', from: 'Farmer: Rajesh Singh', to: 'Consumer: Priya Sharma', item: 'Organic Tomatoes 5kg', timestamp: '2025-01-12 14:30', hash: '0x1a2b3c4d...' },
    { id: 'tx002', from: 'Restaurant: Green Garden', to: 'NGO: Food For All', item: 'Surplus Rice 10kg', timestamp: '2025-01-12 13:15', hash: '0x2b3c4d5e...' },
    { id: 'tx003', from: 'Farmer: Mohan Kumar', to: 'Restaurant: Taste Punjab', item: 'Fresh Apples 25kg', timestamp: '2025-01-12 12:45', hash: '0x3c4d5e6f...' }
  ];

  return (
    <div className="space-y-8">
      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'dashboard', name: 'Overview Dashboard', icon: BarChart3 },
              { id: 'analytics', name: 'Advanced Analytics', icon: PieChart },
              { id: 'blockchain', name: 'Blockchain Traceability', icon: Globe }
            ].map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveView(id as any)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeView === id
                    ? 'border-purple-500 text-purple-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="h-4 w-4" />
                <span>{name}</span>
              </button>
            ))}
          </nav>
        </div>

        <div className="p-6">
          {activeView === 'dashboard' && (
            <div className="space-y-8">
              {/* Key Metrics */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100">Total Platform Users</p>
                      <p className="text-3xl font-bold">{(stats.totalFarmers + stats.totalConsumers + stats.totalRestaurants).toLocaleString()}</p>
                    </div>
                    <Users className="h-10 w-10 text-blue-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-green-500 to-green-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100">Food Waste Reduced</p>
                      <p className="text-3xl font-bold">{stats.wasteReduced.toLocaleString()} kg</p>
                    </div>
                    <Leaf className="h-10 w-10 text-green-200" />
                  </div>
                </div>
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6 rounded-xl text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100">Platform Revenue</p>
                      <p className="text-3xl font-bold">₹{(stats.revenueGenerated / 100000).toFixed(1)}L</p>
                    </div>
                    <TrendingUp className="h-10 w-10 text-purple-200" />
                  </div>
                </div>
              </div>

              {/* Detailed Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-green-600">{stats.totalFarmers.toLocaleString()}</p>
                    <p className="text-gray-600">Registered Farmers</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-blue-600">{stats.totalConsumers.toLocaleString()}</p>
                    <p className="text-gray-600">Active Consumers</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-orange-600">{stats.totalRestaurants.toLocaleString()}</p>
                    <p className="text-gray-600">Partner Restaurants</p>
                  </div>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-emerald-600">{stats.co2Saved.toLocaleString()} kg</p>
                    <p className="text-gray-600">CO₂ Emissions Saved</p>
                  </div>
                </div>
              </div>

              {/* Recent Activity & Top Performers */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Recent Activity */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-blue-500" />
                    Recent Platform Activity
                  </h3>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <div>
                          <p className="font-medium text-gray-900">{activity.action}</p>
                          <p className="text-sm text-gray-600">{activity.user}</p>
                        </div>
                        <span className="text-sm text-gray-500">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Top Performers */}
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
                    <Award className="h-5 w-5 mr-2 text-yellow-500" />
                    Top Performing Farmers
                  </h3>
                  <div className="space-y-4">
                    {topFarmers.map((farmer, index) => (
                      <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                        <div>
                          <p className="font-bold text-gray-900">#{index + 1} {farmer.name}</p>
                          <p className="text-sm text-gray-600">{farmer.location}</p>
                        </div>
                        <span className="text-lg font-bold text-green-600">₹{farmer.revenue.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'analytics' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-8 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-4">AI-Powered Food Waste Analytics</h2>
                <p className="text-indigo-100">Advanced machine learning insights into food waste patterns and predictions</p>
              </div>

              {/* Waste Prediction Chart */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Waste Prediction vs Actual (Monthly)</h3>
                <div className="space-y-4">
                  {wasteData.map((data, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <span className="w-12 text-sm font-medium">{data.month}</span>
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Predicted: {data.predicted}kg</span>
                          <span className="text-sm text-red-600">{data.predicted}kg</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-red-500 h-2 rounded-full" style={{width: `${(data.predicted / 1500) * 100}%`}}></div>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600">Actual: {data.actual}kg</span>
                          <span className="text-sm text-green-600">{data.actual}kg</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-green-500 h-2 rounded-full" style={{width: `${(data.actual / 1500) * 100}%`}}></div>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-green-600">
                          -{((data.predicted - data.actual) / data.predicted * 100).toFixed(1)}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category-wise Analysis */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Waste by Category</h3>
                  <div className="space-y-3">
                    {[
                      { category: 'Vegetables', percentage: 35, amount: '26,410 kg' },
                      { category: 'Fruits', percentage: 28, amount: '21,128 kg' },
                      { category: 'Prepared Food', percentage: 22, amount: '16,600 kg' },
                      { category: 'Grains', percentage: 15, amount: '11,318 kg' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.category}</span>
                          <span>{item.amount}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full" style={{width: `${item.percentage}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Regional Performance</h3>
                  <div className="space-y-3">
                    {[
                      { region: 'Punjab', efficiency: 92, color: 'green' },
                      { region: 'Haryana', efficiency: 87, color: 'blue' },
                      { region: 'Himachal Pradesh', efficiency: 84, color: 'yellow' },
                      { region: 'Rajasthan', efficiency: 79, color: 'orange' }
                    ].map((item, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{item.region}</span>
                          <span>{item.efficiency}% efficiency</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className={`bg-${item.color}-500 h-2 rounded-full`} style={{width: `${item.efficiency}%`}}></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeView === 'blockchain' && (
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-xl text-white">
                <h2 className="text-2xl font-bold mb-4 flex items-center">
                  <Globe className="h-6 w-6 mr-2" />
                  Blockchain Food Traceability
                </h2>
                <p className="text-gray-300">Complete transparency and immutable records of all food transactions</p>
              </div>

              {/* Blockchain Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <p className="text-2xl font-bold text-blue-600">15,643</p>
                  <p className="text-gray-600">Total Transactions</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <p className="text-2xl font-bold text-green-600">99.9%</p>
                  <p className="text-gray-600">Traceability Rate</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <p className="text-2xl font-bold text-purple-600">3,421</p>
                  <p className="text-gray-600">Smart Contracts</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 text-center">
                  <p className="text-2xl font-bold text-orange-600">2.3s</p>
                  <p className="text-gray-600">Avg Block Time</p>
                </div>
              </div>

              {/* Recent Transactions */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Recent Blockchain Transactions</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="py-3 px-4 font-semibold text-gray-900">Transaction ID</th>
                        <th className="py-3 px-4 font-semibold text-gray-900">From</th>
                        <th className="py-3 px-4 font-semibold text-gray-900">To</th>
                        <th className="py-3 px-4 font-semibold text-gray-900">Item</th>
                        <th className="py-3 px-4 font-semibold text-gray-900">Timestamp</th>
                      </tr>
                    </thead>
                    <tbody>
                      {blockchainTransactions.map((tx) => (
                        <tr key={tx.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="py-3 px-4">
                            <span className="font-mono text-sm bg-gray-100 px-2 py-1 rounded">{tx.hash}</span>
                          </td>
                          <td className="py-3 px-4 text-sm">{tx.from}</td>
                          <td className="py-3 px-4 text-sm">{tx.to}</td>
                          <td className="py-3 px-4 text-sm font-medium">{tx.item}</td>
                          <td className="py-3 px-4 text-sm text-gray-600">{tx.timestamp}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Network Health */}
              <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-6">Network Health Indicators</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-4 bg-green-50 rounded-lg">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">98%</span>
                    </div>
                    <p className="font-semibold text-gray-900">Network Uptime</p>
                    <p className="text-sm text-gray-600">Last 30 days</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">1.2s</span>
                    </div>
                    <p className="font-semibold text-gray-900">Response Time</p>
                    <p className="text-sm text-gray-600">Average</p>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-white font-bold text-xl">45</span>
                    </div>
                    <p className="font-semibold text-gray-900">Active Nodes</p>
                    <p className="text-sm text-gray-600">Validator nodes</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminPortal;