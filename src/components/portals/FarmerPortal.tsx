import React, { useState } from 'react';
import { Plus, Package, TrendingUp, Users, Truck, Clock } from 'lucide-react';

interface Produce {
  id: string;
  name: string;
  category: string;
  quantity: number;
  unit: string;
  pricePerUnit: number;
  location: string;
  harvestDate: string;
  expiryDate: string;
  status: 'available' | 'sold' | 'expired';
}

const FarmerPortal: React.FC = () => {
  const [showAddForm, setShowAddForm] = useState(false);
  const [produces, setProduces] = useState<Produce[]>([
    {
      id: '1',
      name: 'Organic Tomatoes',
      category: 'vegetables',
      quantity: 50,
      unit: 'kg',
      pricePerUnit: 60,
      location: 'Punjab Farm #1',
      harvestDate: '2025-01-10',
      expiryDate: '2025-01-17',
      status: 'available'
    },
    {
      id: '2',
      name: 'Fresh Apples',
      category: 'fruits',
      quantity: 100,
      unit: 'kg',
      pricePerUnit: 120,
      location: 'Himachal Orchard',
      harvestDate: '2025-01-08',
      expiryDate: '2025-02-08',
      status: 'sold'
    },
    {
      id: '3',
      name: 'Basmati Rice',
      category: 'grains',
      quantity: 200,
      unit: 'kg',
      pricePerUnit: 80,
      location: 'Punjab Farm #2',
      harvestDate: '2025-01-05',
      expiryDate: '2025-06-05',
      status: 'available'
    },
    {
      id: '4',
      name: 'Fresh Spinach',
      category: 'vegetables',
      quantity: 25,
      unit: 'kg',
      pricePerUnit: 40,
      location: 'Haryana Farm',
      harvestDate: '2025-01-11',
      expiryDate: '2025-01-16',
      status: 'available'
    },
    {
      id: '5',
      name: 'Organic Carrots',
      category: 'vegetables',
      quantity: 75,
      unit: 'kg',
      pricePerUnit: 50,
      location: 'Punjab Farm #1',
      harvestDate: '2025-01-09',
      expiryDate: '2025-01-25',
      status: 'sold'
    }
  ]);

  const [formData, setFormData] = useState({
    name: '',
    category: 'vegetables',
    quantity: '',
    unit: 'kg',
    pricePerUnit: '',
    location: '',
    harvestDate: '',
    expiryDate: ''
  });

  const handleAddProduce = () => {
    const newProduce: Produce = {
      id: Date.now().toString(),
      ...formData,
      quantity: parseInt(formData.quantity),
      pricePerUnit: parseFloat(formData.pricePerUnit),
      status: 'available'
    };
    setProduces([...produces, newProduce]);
    setFormData({
      name: '', category: 'vegetables', quantity: '', unit: 'kg',
      pricePerUnit: '', location: '', harvestDate: '', expiryDate: ''
    });
    setShowAddForm(false);
  };

  const totalRevenue = produces.filter(p => p.status === 'sold').reduce((acc, p) => acc + (p.quantity * p.pricePerUnit), 0);
  const activeListings = produces.filter(p => p.status === 'available').length;
  const totalSold = produces.filter(p => p.status === 'sold').length;

  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-green-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Total Revenue</p>
              <p className="text-2xl font-bold text-green-600">₹{totalRevenue.toLocaleString()}</p>
            </div>
            <TrendingUp className="h-8 w-8 text-green-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-blue-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Active Listings</p>
              <p className="text-2xl font-bold text-blue-600">{activeListings}</p>
            </div>
            <Package className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Products Sold</p>
              <p className="text-2xl font-bold text-orange-600">{totalSold}</p>
            </div>
            <Users className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-purple-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600 text-sm">Pending Orders</p>
              <p className="text-2xl font-bold text-purple-600">3</p>
            </div>
            <Truck className="h-8 w-8 text-purple-500" />
          </div>
        </div>
      </div>

      {/* Header with Add Button */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">My Produce Listings</h2>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 shadow-lg"
        >
          <Plus className="h-5 w-5" />
          <span>Add New Produce</span>
        </button>
      </div>

      {/* Add Produce Form */}
      {showAddForm && (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-6">Add New Produce</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                placeholder="e.g., Organic Tomatoes"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
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
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="e.g., 50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Unit</label>
              <select
                value={formData.unit}
                onChange={(e) => setFormData({...formData, unit: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              >
                <option value="kg">Kg</option>
                <option value="tons">Tons</option>
                <option value="pieces">Pieces</option>
                <option value="boxes">Boxes</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Price per Unit (₹)</label>
              <input
                type="number"
                value={formData.pricePerUnit}
                onChange={(e) => setFormData({...formData, pricePerUnit: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="e.g., 60"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Farm Location</label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
                placeholder="e.g., Punjab Farm #1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Harvest Date</label>
              <input
                type="date"
                value={formData.harvestDate}
                onChange={(e) => setFormData({...formData, harvestDate: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Expiry Date</label>
              <input
                type="date"
                value={formData.expiryDate}
                onChange={(e) => setFormData({...formData, expiryDate: e.target.value})}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500"
              />
            </div>
          </div>
          <div className="flex justify-end space-x-4 mt-8">
            <button
              onClick={() => setShowAddForm(false)}
              className="px-6 py-3 text-gray-600 border border-gray-300 rounded-lg hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleAddProduce}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
            >
              Add Produce
            </button>
          </div>
        </div>
      )}

      {/* Produce Listings */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {produces.map((produce) => (
          <div key={produce.id} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-gray-900">{produce.name}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  produce.status === 'available' ? 'bg-green-100 text-green-800' :
                  produce.status === 'sold' ? 'bg-blue-100 text-blue-800' :
                  'bg-red-100 text-red-800'
                }`}>
                  {produce.status.charAt(0).toUpperCase() + produce.status.slice(1)}
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Quantity:</span>
                  <span className="font-semibold">{produce.quantity} {produce.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price:</span>
                  <span className="font-semibold text-green-600">₹{produce.pricePerUnit}/{produce.unit}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Location:</span>
                  <span className="font-semibold">{produce.location}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Expiry:</span>
                  <span className="font-semibold flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {new Date(produce.expiryDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerPortal;