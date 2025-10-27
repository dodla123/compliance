export interface LoginCredentials {
    email: string;
    password: string;
  }
  
  export interface SignupData {
    name: string;
    email: string;
    password: string;
  }
  
  export interface AuthError {
    name?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
    general?: string;
  }