import React from 'react';
import { Leaf, LogOut, Menu, X, Home, BarChart3, Users, Package } from 'lucide-react';
import type { UserRole } from '../../App';

interface HeaderProps {
  userRole: UserRole;
  onLogout: () => void;
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({ userRole, onLogout, sidebarOpen, setSidebarOpen }) => {
  const getRoleTitle = (role: UserRole) => {
    switch (role) {
      case 'farmer': return 'Farmer Dashboard';
      case 'consumer': return 'Consumer Portal';
      case 'restaurant': return 'Restaurant/NGO Portal';
      case 'admin': return 'Admin Dashboard';
      default: return 'Dashboard';
    }
  };

  const getRoleColor = (role: UserRole) => {
    switch (role) {
      case 'farmer': return 'bg-green-500';
      case 'consumer': return 'bg-blue-500';
      case 'restaurant': return 'bg-orange-500';
      case 'admin': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getNavigationItems = (role: UserRole) => {
    const baseItems = [
      { name: 'Dashboard', icon: Home, active: true }
    ];

    switch (role) {
      case 'farmer':
        return [
          ...baseItems,
          { name: 'My Produce', icon: Package, active: false },
          { name: 'Orders', icon: BarChart3, active: false },
          { name: 'Analytics', icon: BarChart3, active: false }
        ];
      case 'consumer':
        return [
          ...baseItems,
          { name: 'Shop', icon: Package, active: false },
          { name: 'My Orders', icon: BarChart3, active: false },
          { name: 'Rewards', icon: Users, active: false }
        ];
      case 'restaurant':
        return [
          ...baseItems,
          { name: 'Surplus Food', icon: Package, active: false },
          { name: 'Predictions', icon: BarChart3, active: false },
          { name: 'Redistribution', icon: Users, active: false }
        ];
      case 'admin':
        return [
          ...baseItems,
          { name: 'Analytics', icon: BarChart3, active: false },
          { name: 'Users', icon: Users, active: false },
          { name: 'Blockchain', icon: Package, active: false }
        ];
      default:
        return baseItems;
    }
  };

  return (
    <>
      <header className="bg-white shadow-lg border-b border-gray-200 fixed w-full top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              >
                {sidebarOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <div className="p-2 bg-green-500 rounded-xl">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold text-gray-900">FoodLoop</span>
                <div className="text-sm text-gray-600">{getRoleTitle(userRole)}</div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {getNavigationItems(userRole).map((item, index) => (
                <button
                  key={index}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors duration-200 ${
                    item.active 
                      ? `${getRoleColor(userRole)} text-white` 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span className="text-sm font-medium">{item.name}</span>
                </button>
              ))}
            </nav>

            {/* User Info & Actions */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-3">
                <div className={`w-3 h-3 rounded-full ${getRoleColor(userRole)}`}></div>
                <span className="text-sm font-medium text-gray-700 capitalize">{userRole} Account</span>
              </div>
              <button
                onClick={onLogout}
                className="flex items-center space-x-2 px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setSidebarOpen(false)} />
          <div className="fixed top-0 left-0 w-64 h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-500 rounded-xl">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xl font-bold text-gray-900">FoodLoop</span>
                  <div className="text-sm text-gray-600">{getRoleTitle(userRole)}</div>
                </div>
              </div>
            </div>
            <nav className="p-6 space-y-2">
              {getNavigationItems(userRole).map((item, index) => (
                <button
                  key={index}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    item.active 
                      ? `${getRoleColor(userRole)} text-white` 
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  <item.icon className="h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;