import React, { useState } from 'react';
import { Upload, TrendingDown, Users, Clock, AlertTriangle, CheckCircle } from 'lucide-react';

interface FoodItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  expiryDate: string;
  status: 'surplus' | 'redistributed' | 'expired';
  restaurantName: string;
}

interface PredictionData {
  restaurant: string;
  predictedWaste: number;
  confidence: number;
  category: string;
  date: string;
}

const RestaurantPortal: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'upload' | 'predictions' | 'redistribution'>('upload');
  const [foodItems, setFoodItems] = useState<FoodItem[]>([
    {
      id: '1',
      name: 'Vegetable Curry',
      category: 'prepared',
      quantity: 5,
      unit: 'kg',
      expiryDate: '2025-01-13',
      status: 'surplus',
      restaurantName: 'Green Garden Restaurant'
    },
    {
      id: '2',
      name: 'Rice',
      category: 'grains',
      quantity: 10,
      unit: 'kg',
      expiryDate: '2025-01-14',
      status: 'redistributed',
      restaurantName: 'Taste of Punjab'
    }
  ]);

  const predictions: PredictionData[] = [
    { restaurant: 'Green Garden Restaurant', predictedWaste: 15.5, confidence: 87, category: 'vegetables', date: '2025-01-14' },
    { restaurant: 'Taste of Punjab', predictedWaste: 22.3, confidence: 91, category: 'prepared', date: '2025-01-14' },
    { restaurant: 'City Cafe', predictedWaste: 8.7, confidence: 78, category: 'dairy', date: '2025-01-14' },
    { restaurant: 'Royal Biryani House', predictedWaste: 12.1, confidence: 84, category: 'grains', date: '2025-01-15' }
  ];

  const [formData, setFormData] = useState({
    name: '',
    category: 'prepared',
    quantity: '',
    unit: 'kg',
    expiryDate: '',
    restaurantName: ''
  });

  const handleAddSurplus = () => {
    const newItem: FoodItem = {
      id: Date.now().toString(),
      ...formData,
      quantity: parseFloat(formData.quantity),
      status: 'surplus'
    };
    setFoodItems([...foodItems, newItem]);
    setFormData({
      name: '', category: 'prepared', quantity: '', unit: 'kg',
      expiryDate: '', restaurantName: ''
    });
  };

  const totalSurplus = foodItems.filter(item => item.status === 'surplus').length;
  const totalRedistributed = foodItems.filter(item => item.status === 'redistributed').length;
  const avgWastePrediction = predictions.reduce((acc, p) => acc + p.predictedWaste, 0) / predictions.length;

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Surplus Items</p>
              <p className="text-2xl font-bold text-orange-600">{totalSurplus}</p>
            </div>
            <Upload className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Redistributed</p>
              <p className="text-2xl font-bold text-green-600">{totalRedistributed}</p>
            </div>
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-red-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Avg. Predicted Waste</p>
              <p className="text-2xl font-bold text-red-600">{avgWastePrediction.toFixed(1)}kg</p>
            </div>
            <TrendingDown className="h-8 w-8 text-red-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">NGOs Connected</p>
              <p className="text-2xl font-bold text-blue-600">12</p>
            </div>
            <Users className="h-8 w-8 text-blue-500" />
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white rounded-xl shadow-lg border border-gray-200">
        <div className="border-b border-gray-200">
          <nav className="flex space-x-8 px-6">
            {[
              { id: 'upload', name: 'Upload Surplus Food', icon: Upload },
              { id: 'predictions', name: 'AI Waste Predictions', icon: TrendingDown },
              { id: 'redistribution', name: 'Redistribution Tracking', icon: Users }
            ].map(({ id, name, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id as any)}
                className={`flex items-center space-x-2 py-4 px-2 border-b-2 font-medium text-sm transition-colors duration-200 ${
                  activeTab === id
                    ? 'border-orange-500 text-orange-600'
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
          {activeTab === 'upload' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Food Item Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                    placeholder="e.g., Vegetable Curry"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="prepared">Prepared Food</option>
                    <option value="vegetables">Vegetables</option>
                    <option value="fruits">Fruits</option>
                    <option value="grains">Grains</option>
                    <option value="dairy">Dairy</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <input
                    type="number"
                    value={formData.quantity}
                    onChange={(e) => setFormData({...formData, quantity: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., 5"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
                  <select
                    value={formData.unit}
                    onChange={(e) => setFormData({...formData, unit: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="kg">Kg</option>
                    <option value="liters">Liters</option>
                    <option value="portions">Portions</option>
                    <option value="pieces">Pieces</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Restaurant Name</label>
                  <input
                    type="text"
                    value={formData.restaurantName}
                    onChange={(e) => setFormData({...formData, restaurantName: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                    placeholder="e.g., Green Garden Restaurant"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
                  <input
                    type="date"
                    value={formData.expiryDate}
                    onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500"
                  />
                </div>
              </div>
              <button
                onClick={handleAddSurplus}
                className="bg-orange-500 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition-colors duration-200 font-semibold"
              >
                Add Surplus Food Item
              </button>
            </div>
          )}

          {activeTab === 'predictions' && (
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <div className="flex items-center space-x-2">
                  <AlertTriangle className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-900">AI-Powered Waste Predictions</h3>
                </div>
                <p className="text-blue-700 mt-2">Our machine learning model analyzes historical data to predict potential food waste.</p>
              </div>
              
              <div className="grid gap-4">
                {predictions.map((prediction, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">{prediction.restaurant}</h3>
                        <p className="text-gray-600 capitalize">{prediction.category} category</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">{prediction.predictedWaste} kg</p>
                        <p className="text-sm text-gray-600">Predicted waste</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{new Date(prediction.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-200 rounded-full h-2 w-20">
                          <div 
                            className="bg-green-500 h-2 rounded-full" 
                            style={{width: `${prediction.confidence}%`}}
                          ></div>
                        </div>
                        <span className="text-sm font-semibold text-green-600">{prediction.confidence}% confidence</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'redistribution' && (
            <div className="space-y-6">
              <div className="grid gap-4">
                {foodItems.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <p className="text-gray-600">{item.restaurantName}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        item.status === 'surplus' ? 'bg-yellow-100 text-yellow-800' :
                        item.status === 'redistributed' ? 'bg-green-100 text-green-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                        {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Quantity:</span>
                        <p className="font-semibold">{item.quantity} {item.unit}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Category:</span>
                        <p className="font-semibold capitalize">{item.category}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Expiry:</span>
                        <p className="font-semibold">{new Date(item.expiryDate).toLocaleDateString()}</p>
                      </div>
                      <div>
                        <span className="text-gray-600">Action:</span>
                        {item.status === 'surplus' && (
                          <button className="bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600 transition-colors">
                            Find NGO
                          </button>
                        )}
                        {item.status === 'redistributed' && (
                          <span className="text-green-600 text-xs font-semibold">✓ Redistributed</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantPortal;