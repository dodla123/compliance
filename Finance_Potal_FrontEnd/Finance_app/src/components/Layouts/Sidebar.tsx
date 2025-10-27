import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatar from "../../assets/avatars/avatar-1.webp";
import { 
  LayoutDashboard, 
  FileText, 
  CreditCard, 
  Users, 
  FileBarChart, 
  Clock,
  LogOut
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

const Sidebar: React.FC = () => {
  const location = useLocation();
  const { logout } = useAuth();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col fixed left-0 top-0 z-20">
      <div className="p-6">
        <div className="flex items-center space-x-3">
          <img
            src={avatar}
            alt="Profile"
            className="w-16 h-16 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-800">Dodla Manasa</h3>
            <p className="text-sm text-gray-600">RPA Developer</p>
          </div>
        </div>
      </div>
      
      <nav className="flex-1 overflow-y-auto px-4 py-6">
        <div className="space-y-1">
          <Link
            to="/dashboard"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive('/dashboard')
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          
          <Link
            to="/invoices"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive('/invoices')
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <FileText className="mr-3 h-5 w-5" />
            Invoices
          </Link>
          
          <Link
            to="/payouts"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive('/payouts')
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <CreditCard className="mr-3 h-5 w-5" />
            Payouts
          </Link>
          
          <Link
            to="/clients"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive('/clients')
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <Users className="mr-3 h-5 w-5" />
            Clients
          </Link>

          <Link
            to="/attandance"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive('/attandance')
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <Clock className="mr-3 h-5 w-5" />
            Attendance
          </Link>

          <Link
            to="/compliance"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive('/compliance')
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <FileBarChart className="mr-3 h-5 w-5" />
            Compliance
          </Link>

          <Link
            to="/reports"
            className={`flex items-center px-3 py-2.5 text-sm font-medium rounded-lg transition-colors ${
              isActive('/reports')
                ? 'bg-blue-600 text-white'
                : 'text-black hover:bg-blue-50 hover:text-blue-600'
            }`}
          >
            <FileBarChart className="mr-3 h-5 w-5" />
            Reports
          </Link>
        </div>
      </nav>
      
      <div className="p-4">
        <button
          onClick={handleLogout}
          className="flex items-center px-3 py-2.5 text-sm font-medium text-black rounded-lg w-full transition-colors hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;