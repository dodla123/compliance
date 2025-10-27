import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean; // <- Expose loading state
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    if (email === "admin@example.com" && password === "admin123") {
      const newUser = { id: "1", name: "Admin", email };
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      setIsAuthenticated(true);
    } else {
      throw new Error("Invalid email or password");
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};




















// import React, { createContext, useContext, useState, useEffect } from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [loading, setLoading] = useState(true); // Ensure proper loading behavior

//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//       setIsAuthenticated(true);
//     }
//     setLoading(false);
//   }, []);

//   const login = async (email: string, password: string) => {
//     await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay

//     if (email === "admin@example.com" && password === "admin123") {
//       const newUser = { id: "1", name: "Admin", email };
//       localStorage.setItem("user", JSON.stringify(newUser));
//       setUser(newUser);
//       setIsAuthenticated(true);
//     } else {
//       throw new Error("Invalid email or password");
//     }
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     setUser(null);
//     setIsAuthenticated(false);
//   };

//   if (loading) return <div>Loading...</div>; // Prevent flickering

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
























// import React, { createContext, useContext, useState, useEffect } from "react";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   password?: string; // Stored only for validation (not secure for production)
// }

// interface AuthContextType {
//   user: User | null;
//   isAuthenticated: boolean;
//   isLoginForm: boolean;
//   toggleForm: () => void;
//   login: (email: string, password: string) => Promise<void>;
//   signup: (name: string, email: string, password: string) => Promise<void>;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const useAuth = () => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error("useAuth must be used within an AuthProvider");
//   }
//   return context;
// };

// // Default admin user (for testing purposes)
// const DEFAULT_USER = {
//   id: "0",
//   name: "Admin",
//   email: "admin@example.com",
//   password: "admin123",
// };

// export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [user, setUser] = useState<User | null>(null);
//   const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
//   const [isLoginForm, setIsLoginForm] = useState<boolean>(true);

//   // Load authentication state and user from localStorage on mount
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     const storedAuth = localStorage.getItem("isAuthenticated");

//     if (storedUser && storedAuth === "true") {
//       setUser(JSON.parse(storedUser));
//       setIsAuthenticated(true);
//     }
//   }, []);

//   // Store authentication state in localStorage whenever it changes
//   useEffect(() => {
//     localStorage.setItem("isAuthenticated", String(isAuthenticated));
//   }, [isAuthenticated]);

//   const login = async (email: string, password: string) => {
//     await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
//     const storedUser = JSON.parse(localStorage.getItem("user") || "null");

//     if (storedUser && storedUser.email === email && storedUser.password === password) {
//       setUser(storedUser);
//       setIsAuthenticated(true);
//     } else if (email === DEFAULT_USER.email && password === DEFAULT_USER.password) {
//       localStorage.setItem("user", JSON.stringify(DEFAULT_USER));
//       setUser(DEFAULT_USER);
//       setIsAuthenticated(true);
//     } else {
//       throw new Error("Invalid email or password");
//     }

//     // Store last visited page to redirect after login
//     const lastPage = localStorage.getItem("lastPage") || "/dashboard";
//     window.location.href = lastPage; // Redirect to last visited page
//   };

//   const signup = async (name: string, email: string, password: string) => {
//     await new Promise(resolve => setTimeout(resolve, 500)); // Simulate API delay
//     const newUser: User = { id: "1", name, email, password };
//     localStorage.setItem("user", JSON.stringify(newUser));
//     setUser(newUser);
//     setIsAuthenticated(true);

//     window.location.href = "/dashboard"; // Redirect to dashboard after signup
//   };

//   const logout = () => {
//     localStorage.removeItem("user");
//     localStorage.removeItem("isAuthenticated");
//     localStorage.removeItem("lastPage");
//     setUser(null);
//     setIsAuthenticated(false);
//     window.location.href = "/login"; // Redirect to login after logout
//   };

//   const toggleForm = () => setIsLoginForm(prev => !prev);

//   return (
//     <AuthContext.Provider value={{ user, isAuthenticated, isLoginForm, toggleForm, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
