import React from 'react';
import avatar from '../../assets/avatars/avatar-1.webp'
import { Input, Avatar, Badge, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { 
  SearchOutlined,
  BellOutlined,
  SettingOutlined,
  UserOutlined,
  QuestionCircleOutlined,
  LogoutOutlined
} from '@ant-design/icons';

const { Search } = Input;

const userMenuItems: MenuProps['items'] = [
  {
    key: 'profile',
    label: 'Profile',
    icon: <UserOutlined />,
  },
  {
    key: 'settings',
    label: 'Settings',
    icon: <SettingOutlined />,
  },
  {
    key: 'help',
    label: 'Help & Support',
    icon: <QuestionCircleOutlined />,
  },
  {
    type: 'divider',
  },
  {
    key: 'logout',
    label: 'Log Out',
    icon: <LogoutOutlined />,
    danger: true,
  },
];

const Navbar: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-between">
      {/* Left: Search bar */}
      <div className="flex-1 max-w-md hidden sm:block mt-8">
        <Search
          placeholder="Search..."
          prefix={<SearchOutlined className="text-gray-400" />}
          className="w-full"
        />
      </div>

      {/* Mobile Search Icon */}
      <div className="sm:hidden">
        <SearchOutlined className="text-lg text-gray-600" />
      </div>

      {/* Right: Notification + Avatar */}
      <div className="flex items-center gap-6 ml-auto">
        <Badge count={5} size="small">
          <BellOutlined className="text-xl text-gray-600 cursor-pointer hover:text-gray-800 transition-colors" />
        </Badge>

        <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" arrow>
          <Avatar 
            src={avatar}
            size={40}
            className="cursor-pointer"
          />
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;




































// import React from 'react';
// import { BellOutlined, SearchOutlined } from '@ant-design/icons';

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 right-0 left-72 bg-white h-16 border-b border-gray-200 z-10">
//       <div className="flex justify-between items-center h-full px-6">
//         {/* Search bar */}
//         <div className="w-72">
//           <div className="relative">
//             <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
//               <SearchOutlined className="text-gray-400 text-lg" />
//             </div>
//             <input
//               type="text"
//               placeholder="Search..."
//               className="block w-full pl-10 pr-3 py-2 border border-black rounded-lg bg-gray-50 text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
//             />
//           </div>
//         </div>
        
//         {/* Right section */}
//         <div className="flex items-center space-x-4 ml-4">
//           {/* Notification Bell */}
//           <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full">
//             <BellOutlined className="text-2xl" />
//             <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
//               4
//             </span>
//           </button>
          
//           {/* FMS Text */}
//           <span className="hidden sm:inline-block font-bold text-gray-800">
//             FMS
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;