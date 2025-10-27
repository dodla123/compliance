import { BellOutlined } from '@ant-design/icons';
import SearchIcon from '../../assets/icons/searchIcon';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="flex justify-between items-center h-16 px-4">
        {/* Search Bar */}
        <div className="relative flex-1 max-w-md">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon height={20} width={20} color="black" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
            placeholder="Search..."
          />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-4 ml-4">
          {/* Notification Bell */}
          <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            {/* <BellIcon height={20} width={20} color="black" /> */}
            <BellOutlined className="text-2xl" />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
              4
            </span> 
          </button>
          
          {/* FMS Text */}
          <span className="hidden sm:inline-block font-bold text-gray-800">
            FMS
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
