import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Compliance from './components/main/Compliance';
import Navbar from './components/main/Navbar';
import Sidebar from './components/main/Sidebar';
import StatusDetails from './pages/Compliance/StatusDetails';
import { AuthProvider } from './contexts/AuthContext'; // Ensure correct import

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="flex min-h-screen bg-gray-50">
    <Sidebar />
    <div className="flex-1 flex flex-col">
      <Navbar />
      <main className="flex-1 p-8">{children}</main>
    </div>
  </div>
);

function App() {
  return (
    <AuthProvider> {/* Wrap everything in AuthProvider */}
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/compliance" />} />
          <Route
            path="/compliance"
            element={
              <MainLayout>
                <Compliance />
              </MainLayout>
            }
          />
          <Route
            path="/status-details"
            element={
              <div className="min-h-screen bg-gray-50 p-8">
                <StatusDetails />
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;


















