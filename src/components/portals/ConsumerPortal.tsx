import React, { useState } from 'react';
import { ShoppingCart, Star, MapPin, Award, Leaf, Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  farmer: string;
  price: number;
  unit: string;
  location: string;
  rating: number;
  image: string;
  organic: boolean;
  category: string;
}

const ConsumerPortal: React.FC = () => {
  const [cart, setCart] = useState<{[key: string]: number}>({});
  const [rewardPoints, setRewardPoints] = useState(1250);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products: Product[] = [
    {
      id: '1',
      name: 'Organic Tomatoes',
      farmer: 'Rajesh Singh',
      price: 60,
      unit: 'kg',
      location: 'Punjab',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/533280/pexels-photo-533280.jpeg?auto=compress&cs=tinysrgb&w=300',
      organic: true,
      category: 'vegetables'
    },
    {
      id: '2',
      name: 'Fresh Apples',
      farmer: 'Mohan Kumar',
      price: 120,
      unit: 'kg',
      location: 'Himachal Pradesh',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&w=300',
      organic: false,
      category: 'fruits'
    },
    {
      id: '3',
      name: 'Basmati Rice',
      farmer: 'Harpreet Kaur',
      price: 80,
      unit: 'kg',
      location: 'Punjab',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/3392048/pexels-photo-3392048.jpeg?auto=compress&cs=tinysrgb&w=300',
      organic: true,
      category: 'grains'
    },
    {
      id: '4',
      name: 'Fresh Spinach',
      farmer: 'Amit Sharma',
      price: 25,
      unit: 'kg',
      location: 'Haryana',
      rating: 4.6,
      image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=300',
      organic: true,
      category: 'vegetables'
    }
  ];

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'vegetables', name: 'Vegetables' },
    { id: 'fruits', name: 'Fruits' },
    { id: 'grains', name: 'Grains' },
    { id: 'dairy', name: 'Dairy' }
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  const addToCart = (productId: string) => {
    setCart({...cart, [productId]: (cart[productId] || 0) + 1});
    setRewardPoints(prev => prev + 10); // 10 points per item added
  };

  const cartTotal = Object.entries(cart).reduce((total, [productId, quantity]) => {
    const product = products.find(p => p.id === productId);
    return total + (product ? product.price * quantity : 0);
  }, 0);

  const cartItems = Object.keys(cart).filter(productId => cart[productId] > 0).length;

  return (
    <div className="space-y-8">
      {/* Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-xl text-white">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-green-100">Reward Points</p>
              <p className="text-3xl font-bold">{rewardPoints.toLocaleString()}</p>
            </div>
            <Award className="h-8 w-8 text-green-200" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Cart Items</p>
              <p className="text-2xl font-bold text-blue-600">{cartItems}</p>
            </div>
            <ShoppingCart className="h-8 w-8 text-blue-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">Cart Total</p>
              <p className="text-2xl font-bold text-orange-600">₹{cartTotal}</p>
            </div>
            <Star className="h-8 w-8 text-orange-500" />
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">CO₂ Saved</p>
              <p className="text-2xl font-bold text-green-600">2.4kg</p>
            </div>
            <Leaf className="h-8 w-8 text-green-500" />
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="bg-white p-6 rounded-xl shadow-lg">
        <h3 className="text-lg font-semibold mb-4">Shop by Category</h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg transition-colors duration-200 ${
                selectedCategory === category.id
                  ? 'bg-green-500 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 border border-gray-200">
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              {product.organic && (
                <div className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Organic
                </div>
              )}
              <button
                className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
                onClick={() => {/* Add to favorites */}}
              >
                <Heart className="h-4 w-4 text-gray-600" />
              </button>
            </div>
            <div className="p-5">
              <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-3">by {product.farmer}</p>
              
              <div className="flex items-center mb-3">
                <MapPin className="h-4 w-4 text-gray-400 mr-1" />
                <span className="text-sm text-gray-600">{product.location}</span>
                <div className="ml-auto flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 mr-1" />
                  <span className="text-sm font-semibold">{product.rating}</span>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-2xl font-bold text-green-600">₹{product.price}</span>
                  <span className="text-gray-600">/{product.unit}</span>
                </div>
                {cart[product.id] > 0 && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-semibold">
                    {cart[product.id]} in cart
                  </span>
                )}
              </div>

              <button
                onClick={() => addToCart(product.id)}
                className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold flex items-center justify-center space-x-2"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Shopping Cart Summary */}
      {cartItems > 0 && (
        <div className="fixed bottom-6 right-6 bg-white p-6 rounded-xl shadow-2xl border border-gray-200 max-w-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <ShoppingCart className="h-5 w-5 mr-2" />
            Cart Summary
          </h3>
          <div className="space-y-2 mb-4">
            {Object.entries(cart).map(([productId, quantity]) => {
              if (quantity === 0) return null;
              const product = products.find(p => p.id === productId);
              if (!product) return null;
              return (
                <div key={productId} className="flex justify-between text-sm">
                  <span>{product.name} x{quantity}</span>
                  <span>₹{product.price * quantity}</span>
                </div>
              );
            })}
          </div>
          <div className="border-t pt-4">
            <div className="flex justify-between font-bold text-lg mb-4">
              <span>Total:</span>
              <span>₹{cartTotal}</span>
            </div>
            <button className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition-colors duration-200 font-semibold">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConsumerPortal;