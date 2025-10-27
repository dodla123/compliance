import React, { useState, useEffect } from 'react';
import avatar from "../../assets/avatars/avatar-1.webp";
import { Layout, Menu, Typography } from 'antd';
import {
  DashboardOutlined,
  FileTextOutlined,
  DollarOutlined,
  UsergroupAddOutlined,
  BarChartOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Navbar from './Navbar';

const { Sider, Content, Header } = Layout;
const { Text } = Typography;

const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (mobile) setCollapsed(true);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const menuItems = [
    { key: '/dashboard', icon: <DashboardOutlined />, label: 'Dashboard' },
    { key: '/invoices', icon: <FileTextOutlined />, label: 'Invoices' },
    { key: '/payouts', icon: <DollarOutlined />, label: 'Payouts' },
    { key: '/clients', icon: <UsergroupAddOutlined />, label: 'Clients' },  
    { key: '/compliance', icon: <CheckCircleOutlined />, label: 'Compliance' },
    { key: '/attandance', icon: <CalendarOutlined />, label: 'Attendance' },
    { key: '/reports', icon: <BarChartOutlined />, label: 'Reports' },
  ];

  const siderWidth = collapsed ? 80 : 200;

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onMouseEnter={() => !isMobile && setCollapsed(false)}
        onMouseLeave={() => !isMobile && setCollapsed(true)}
        width={200}
        breakpoint="md"
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          zIndex: 1000,
          background: '#ffffff',
          borderRight: '1px solid #f0f0f0',
        }}
      >
        <div className="flex items-center p-4 group">
          <img
            src={avatar}
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          {!collapsed && (
            <div className="ml-3 flex flex-col">
              {/* The name and designation are hidden initially, and displayed on hover */}
              <Text className="text-black group-hover:block whitespace-nowrap">Dodla Manasa</Text>
              <Text className="text-secondary text-sm group-hover:block whitespace-nowrap">
                RPA Developer
              </Text>
            </div>
          )}
        </div>

        <Menu
          mode="inline"
          theme="light"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={(e) => navigate(e.key)}
        />
      </Sider>

      <Layout style={{ marginLeft: siderWidth, transition: 'all 0.3s ease' }}>
        <Header
          style={{
            height: 64,
            background: '#ffffff',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            position: 'sticky',
            top: 0,
            zIndex: 999,
            boxShadow: '0 2px 8px #f0f1f2',
          }}
        >
          <Navbar />
        </Header>

        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;











// import React, { useState, useEffect } from 'react';
// import { Layout } from 'antd';
// import { Outlet } from 'react-router-dom';
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import { Menu as MenuFold, Menu as MenuUnfold } from 'lucide-react';

// const { Content } = Layout;

// const AppLayout: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  
//   useEffect(() => {
//     const checkIfMobile = () => {
//       setIsMobile(window.innerWidth < 768);
//       if (window.innerWidth < 768 && !collapsed) {
//         setCollapsed(true);
//       }
//     };
    
//     window.addEventListener('resize', checkIfMobile);
//     checkIfMobile();
    
//     return () => {
//       window.removeEventListener('resize', checkIfMobile);
//     };
//   }, [collapsed]);
  
//   const toggleSidebar = () => {
//     setCollapsed(!collapsed);
//   };
  
//   return (
//     <Layout className="min-h-screen">
//       <Sidebar collapsed={collapsed} onCollapse={setCollapsed} />
//       <Layout className="relative">
//         <div className="fixed top-0 right-0 left-0 z-10 bg-white">
//           <Navbar />
//         </div>
//         <div 
//           className="toggle-button fixed left-0 bottom-4 z-30 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-r-lg shadow-md cursor-pointer flex items-center justify-center transition-all duration-300"
//           onClick={toggleSidebar}
//           style={{
//             transform: collapsed ? 'translateX(80px)' : 'translateX(240px)',
//           }}
//         >
//           {collapsed ? (
//             <MenuUnfold size={20} />
//           ) : (
//             <MenuFold size={20} />
//           )}
//         </div>
//         <Content className="mt-16 m-6 p-6 bg-white rounded-lg shadow-sm">
//           <Outlet />
//         </Content>
//       </Layout>
//     </Layout>
//   );
// };

// export default AppLayout;