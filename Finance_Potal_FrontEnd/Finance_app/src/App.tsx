import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './components/main/Dashboard';
import Invoices from './components/main/Invoices';
import Payouts from './components/main/Payouts';
import Clients from './components/main/Clients';
import Reports from './components/main/Reports';
import Compliance from './components/main/Compliance';
import ViewDetails from './pages/Compliance/ViewDetails';
import Attandance from './components/main/Attendance';
import InvoiceDetails from './pages/Invoices/invoiceDetails';
import PayoutDetails from './pages/Payouts/PayoutDetailsPage';
import ClientDetails from './pages/Client/ClientDetailsPage';
import LoginPage from './components/main/Login';
import AppLayout from './components/Layouts/AppLayout';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function App() {
  const { isAuthenticated } = useAuth();

  // Get the current path from localStorage on mount or default to dashboard
  const getCurrentPath = () => {
    return localStorage.getItem('currentPath') || '/dashboard';
  };

  // Save the current path whenever it changes
  useEffect(() => {
    const savePath = () => {
      localStorage.setItem('currentPath', window.location.pathname);
    };

    window.addEventListener('popstate', savePath);
    return () => window.removeEventListener('popstate', savePath);
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? (
              <Navigate to={getCurrentPath()} replace />
            ) : (
              <LoginPage />
            )
          }
        />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }
        >
          {/* Redirect root to the last visited path or dashboard */}
          <Route index element={<Navigate to={getCurrentPath()} replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="invoices" element={<Invoices />} />
          <Route path="invoices/:id" element={<InvoiceDetails />} />
          <Route path="clients" element={<Clients />} />
          <Route path="clients/:id" element={<ClientDetails />} />
          <Route path="client/:clientId" element={<PayoutDetails />} />
          <Route path="payouts" element={<Payouts />} />
          <Route path="compliance" element={<Compliance />} />
          <Route path="status-details" element={<ViewDetails />} />
          <Route path="attandance" element={<Attandance />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </Router>
  );
}

function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}

export default AppWrapper;





















// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
// // import Sidebar from './components/Layouts/Sidebar';
// // import Navbar from './components/Layouts/Navbar';
// import AppLayout from './components/Layouts/AppLayout';
// import Dashboard from './components/main/Dashboard';
// import Invoices from './components/main/Invoices';
// import Payouts from './components/main/Payouts';
// import Clients from './components/main/Clients';
// import Reports from './components/main/Reports';
// import Compliance from './components/main/Compliance';
// import ViewDetails from './pages/Compliance/ViewDetails';
// import Attandance from './components/main/Attendance';
// import InvoiceDetails from './pages/Invoices/invoiceDetails';
// import PayoutDetails from './pages/Payouts/PayoutDetailsPage';
// import ClientDetails from './pages/Client/ClientDetailsPage';
// import LoginPage from './components/main/Login';
// import ProtectedRoute from './components/ProtectedRoute';
// import { AuthProvider, useAuth } from './contexts/AuthContext';

// // Layout component with sidebar and navbar
// // const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
// //   <div className="flex min-h-screen bg-gray-50">
// //     {/* Fixed sidebar */}
// //     <div className="fixed left-0 top-0 h-screen z-30">
// //       <Sidebar />
// //     </div>
// //     {/* Main content area with fixed navbar and scrollable content */}
// //     <div className="flex-1 ml-64"> {/* Adjust ml-64 based on your sidebar width */}
// //       {/* Fixed navbar */}
// //       <div className="fixed top-0 right-0 left-64 z-20 bg-white"> {/* Adjust left-64 based on your sidebar width */}
// //         <Navbar />
// //       </div>
// //       {/* Main content - this will scroll */}
// //       <main className="pt-20 px-10 pb-8 min-h-screen"> {/* Adjust pt-16 based on your navbar height */}
// //         {children}
// //       </main>
// //     </div>
// //   </div>
// // );

// // Fullscreen layout for pages without sidebar/navbar
// const FullscreenLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
//   <div className="min-h-screen p-8 bg-gray-50">{children}</div>
// );

// // Component that applies the correct layout
// function LayoutWrapper({ children }: { children: React.ReactNode }) {
//   const location = useLocation();
//   const { isAuthenticated } = useAuth();

//   // If not authenticated, redirect to login
//   if (!isAuthenticated) {
//     return <Navigate to="/login" replace />;
//   }

//   // Check if route needs fullscreen layout (No Sidebar, No Navbar)
//   const isFullscreenRoute = location.pathname.startsWith('/client/') || location.pathname === '/status-details';

//   return isFullscreenRoute ? (
//     <FullscreenLayout>{children}</FullscreenLayout>
//   ) : (
//     <MainLayout>{children}</MainLayout>
//   );
// }

// function App() {
//   const { isAuthenticated } = useAuth();

//   return (
//     <Router>
//       <Routes>
//         {/* Public route - Redirect to dashboard if already authenticated */}
//         <Route
//           path="/login"
//           element={
//             isAuthenticated ? (
//               <Navigate to="/dashboard" replace />
//             ) : (
//               <LoginPage />
//             )
//           }
//         />

//         {/* Protected routes */}
//         <Route
//           path="/"
//           element={
//             <ProtectedRoute>
//               <AppLayout />
//             </ProtectedRoute>
//           }
//         />
//         <Route
//           path="/dashboard"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <Dashboard />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/invoices"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <Invoices />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/payouts"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <Payouts />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/clients"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <Clients />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/reports"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <Reports />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/attandance"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <Attandance />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/compliance"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <Compliance />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/invoices/:id"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <InvoiceDetails />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/client/:clientId"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <PayoutDetails />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/clients/:id"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <ClientDetails />
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />

//         <Route
//           path="/status-details"
//           element={
//             <ProtectedRoute>
//               <LayoutWrapper>
//                 <FullscreenLayout>
//                   <ViewDetails />
//                 </FullscreenLayout>  
//               </LayoutWrapper>
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </Router>
//   );
// }

// // Wrap the app with AuthProvider
// function AppWrapper() {
//   return (
//     <AuthProvider>
//       <App />
//     </AuthProvider>
//   );
// }

// export default AppWrapper;


