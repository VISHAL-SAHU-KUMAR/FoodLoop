import React from 'react';
import { Leaf, TrendingUp, Users, Award, ChevronRight, Sprout, Recycle, Globe, LogIn } from 'lucide-react';
import type { UserRole } from '../App';

interface LandingPageProps {
  onLogin: (role: UserRole) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onLogin }) => {
  const sampleCredentials = [
    { role: 'farmer' as UserRole, email: 'farmer@foodloop.com', password: 'farmer123', name: 'Rajesh Singh' },
    { role: 'consumer' as UserRole, email: 'consumer@foodloop.com', password: 'consumer123', name: 'Priya Sharma' },
    { role: 'restaurant' as UserRole, email: 'restaurant@foodloop.com', password: 'restaurant123', name: 'Green Garden Restaurant' },
    { role: 'admin' as UserRole, email: 'admin@foodloop.com', password: 'admin123', name: 'System Admin' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-green-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="p-2 bg-green-500 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-gray-900">FoodLoop</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-green-600 font-medium transition-colors">How it Works</a>
              <a href="#impact" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Impact</a>
              <a href="#credentials" className="text-gray-700 hover:text-green-600 font-medium transition-colors">Demo Login</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-16 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connecting Farms to
              <span className="text-green-500 block">Zero Waste Future</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              FoodLoop revolutionizes food distribution by connecting farmers directly to consumers, 
              predicting food waste with AI, and creating sustainable communities through blockchain technology.
            </p>
            
            {/* Login Portals */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-16">
              {[
                { role: 'farmer' as UserRole, title: 'Farmer Portal', icon: Sprout, desc: 'List your produce' },
                { role: 'consumer' as UserRole, title: 'Consumer Portal', icon: Users, desc: 'Buy fresh food' },
                { role: 'restaurant' as UserRole, title: 'Restaurant/NGO', icon: Recycle, desc: 'Redistribute surplus' },
                { role: 'admin' as UserRole, title: 'Admin Dashboard', icon: TrendingUp, desc: 'Monitor & analyze' }
              ].map(({ role, title, icon: Icon, desc }) => (
                <button
                  key={role}
                  onClick={() => onLogin(role)}
                  className="group p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-100 hover:border-green-300 hover:scale-105"
                >
                  <Icon className="h-8 w-8 text-green-500 mx-auto mb-3 group-hover:text-green-600 transition-colors" />
                  <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                  <p className="text-sm text-gray-600">{desc}</p>
                  <ChevronRight className="h-4 w-4 text-green-500 mx-auto mt-2 group-hover:translate-x-1 transition-transform" />
                </button>
              ))}
            </div>

            {/* Quick Demo Access */}
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 max-w-2xl mx-auto border border-green-200">
              <div className="text-center mb-4">
                <LogIn className="h-6 w-6 text-green-500 mx-auto mb-2" />
                <h3 className="text-lg font-semibold text-gray-900">Quick Demo Access</h3>
                <p className="text-sm text-gray-600">Click any portal above to instantly access the demo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Transforming Food Systems</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform addresses every aspect of the food supply chain with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Users,
                title: 'Direct Farm-to-Consumer',
                description: 'Connect farmers directly with consumers, eliminating middlemen and ensuring fair prices for both parties.'
              },
              {
                icon: TrendingUp,
                title: 'AI Waste Prediction',
                description: 'Advanced machine learning algorithms predict food waste patterns and optimize distribution strategies.'
              },
              {
                icon: Award,
                title: 'Rewards & Sustainability',
                description: 'Earn rewards for sustainable choices and track your environmental impact in real-time.'
              },
              {
                icon: Globe,
                title: 'Blockchain Traceability',
                description: 'Complete transparency in the food supply chain with immutable blockchain technology.'
              },
              {
                icon: Recycle,
                title: 'Food Redistribution',
                description: 'Efficiently redistribute surplus food to NGOs and communities in need.'
              },
              {
                icon: Leaf,
                title: 'Environmental Impact',
                description: 'Monitor and reduce carbon footprint while supporting sustainable farming practices.'
              }
            ].map((feature, index) => (
              <div key={index} className="p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 transition-all duration-300 border border-green-100">
                <feature.icon className="h-12 w-12 text-green-500 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="py-20 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">How FoodLoop Works</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              A simple, transparent process that benefits everyone in the food ecosystem
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Farmers List Produce', desc: 'Upload fresh produce with pricing and availability' },
              { step: '02', title: 'AI Predicts Demand', desc: 'Machine learning forecasts demand and potential waste' },
              { step: '03', title: 'Consumers Purchase', desc: 'Direct ordering with transparent pricing and delivery' },
              { step: '04', title: 'Surplus Redistributed', desc: 'Excess food goes to NGOs and communities in need' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-green-500">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-green-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Credentials Section */}
      <section id="credentials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Demo Login Credentials</h2>
            <p className="text-xl text-gray-600">Use these sample credentials to explore different user roles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sampleCredentials.map((cred, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                <div className="text-center mb-4">
                  <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center ${
                    cred.role === 'farmer' ? 'bg-green-100' :
                    cred.role === 'consumer' ? 'bg-blue-100' :
                    cred.role === 'restaurant' ? 'bg-orange-100' : 'bg-purple-100'
                  }`}>
                    {cred.role === 'farmer' && <Sprout className="h-6 w-6 text-green-600" />}
                    {cred.role === 'consumer' && <Users className="h-6 w-6 text-blue-600" />}
                    {cred.role === 'restaurant' && <Recycle className="h-6 w-6 text-orange-600" />}
                    {cred.role === 'admin' && <TrendingUp className="h-6 w-6 text-purple-600" />}
                  </div>
                  <h3 className="font-bold text-gray-900 capitalize">{cred.role} Account</h3>
                  <p className="text-sm text-gray-600 mb-4">{cred.name}</p>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600">Email:</p>
                    <p className="font-mono text-gray-900">{cred.email}</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-600">Password:</p>
                    <p className="font-mono text-gray-900">{cred.password}</p>
                  </div>
                </div>
                <button
                  onClick={() => onLogin(cred.role)}
                  className={`w-full mt-4 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                    cred.role === 'farmer' ? 'bg-green-500 hover:bg-green-600 text-white' :
                    cred.role === 'consumer' ? 'bg-blue-500 hover:bg-blue-600 text-white' :
                    cred.role === 'restaurant' ? 'bg-orange-500 hover:bg-orange-600 text-white' :
                    'bg-purple-500 hover:bg-purple-600 text-white'
                  }`}
                >
                  Login as {cred.role.charAt(0).toUpperCase() + cred.role.slice(1)}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-blue-50 p-6 rounded-xl border border-blue-200">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">Demo Features Available</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-blue-800">
                <div>
                  <p>✅ Complete farmer marketplace with produce listings</p>
                  <p>✅ Consumer shopping with cart and rewards system</p>
                </div>
                <div>
                  <p>✅ Restaurant surplus food management & AI predictions</p>
                  <p>✅ Admin dashboard with analytics & blockchain tracking</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section id="impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Making Real Impact</h2>
            <p className="text-xl text-gray-600">Join thousands who are already making a difference</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '10,000+', label: 'Farmers Connected' },
              { number: '50,000+', label: 'Tons Food Saved' },
              { number: '2M+', label: 'Meals Redistributed' },
              { number: '30%', label: 'Waste Reduction' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-green-50 to-emerald-50">
                <div className="text-4xl font-bold text-green-500 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <div className="p-2 bg-green-500 rounded-xl">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">FoodLoop</span>
          </div>
          <div className="text-center text-gray-400">
            <p>&copy; 2025 FoodLoop. Building a sustainable future, one connection at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;