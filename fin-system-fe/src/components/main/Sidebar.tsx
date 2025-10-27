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
    <div className="w-72 bg-white border-r border-gray-200 h-screen flex flex-col">
      <div className="p-4">
        <div className="flex items-center space-x-4 ml-auto">
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
      
      <nav className="mt-10 flex-1">
        <div className="px-2 space-y-1 mb-4">
          <Link
            to="/dashboard"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              isActive('/dashboard')
                ? 'bg-blue-600 text-white'
                : 'text-black-600 hover:bg-blue-100 hover:text-blue-600"}'
            }`}
          >
            <LayoutDashboard className="mr-3 h-5 w-5" />
            Dashboard
          </Link>
          
          <Link
            to="/invoices"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              isActive('/invoices')
                ? 'bg-blue-600 text-white'
                : 'text-black-600 hover:bg-blue-100 hover:text-blue-600"}'
            }`}
          >
            <FileText className="mr-3 h-5 w-5" />
            Invoices
          </Link>
          
          <Link
            to="/payouts"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              isActive('/payouts')
                ? 'bg-blue-600 text-white'
                : 'text-black-600 hover:bg-blue-100 hover:text-blue-600"}'
            }`}
          >
            <CreditCard className="mr-3 h-5 w-5" />
            Payouts
          </Link>
          
          <Link
            to="/clients"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              isActive('/clients')
                ? 'bg-blue-600 text-white'
                : 'text-black-600 hover:bg-blue-100 hover:text-blue-600"}'
            }`}
          >
            <Users className="mr-3 h-5 w-5" />
            Clients
          </Link>

          <Link
            to="/attandance"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              isActive('/attandance')
                ? 'bg-blue-600 text-white'
                : 'text-black-600 hover:bg-blue-100 hover:text-blue-600"}'
            }`}
          >
            <Clock className="mr-3 h-5 w-5" />
            Attandance
          </Link>

          <Link
            to="/compliance"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              isActive('/compliance')
                ? 'bg-blue-600 text-white'
                : 'text-black-600 hover:bg-blue-100 hover:text-blue-600"}'
            }`}
          >
            <FileBarChart className="mr-3 h-5 w-5" />
            Compliance
          </Link>

          <Link
            to="/reports"
            className={`flex items-center px-4 py-3 text-sm font-medium rounded-md ${
              isActive('/reports')
                ? 'bg-blue-600 text-white'
                : 'text-black-600 hover:bg-blue-100 hover:text-blue-600"}'
            }`}
          >
            <FileBarChart className="mr-3 h-5 w-5" />
            Reports
          </Link>
        </div>
      </nav>
      
      <div className="p-4 border-gray-200">
        <button
          onClick={handleLogout}
          className="flex items-center px-4 py-3 text-sm font-medium text-black-600 rounded-md"
        >
          <LogOut className="mr-3 h-5 w-5" />
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;