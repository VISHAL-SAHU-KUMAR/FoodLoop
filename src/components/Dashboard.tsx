import React, { useState } from 'react';
import type { UserRole } from '../App';
import FarmerPortal from './portals/FarmerPortal';
import ConsumerPortal from './portals/ConsumerPortal';
import RestaurantPortal from './portals/RestaurantPortal';
import AdminPortal from './portals/AdminPortal';
import Header from './shared/Header';

interface DashboardProps {
  userRole: UserRole;
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ userRole, onLogout }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const renderPortal = () => {
    switch (userRole) {
      case 'farmer':
        return <FarmerPortal />;
      case 'consumer':
        return <ConsumerPortal />;
      case 'restaurant':
        return <RestaurantPortal />;
      case 'admin':
        return <AdminPortal />;
      default:
        return <div>Invalid user role</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        userRole={userRole} 
        onLogout={onLogout}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />
      
      {/* Main content */}
      <main className="lg:pl-0 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {renderPortal()}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;