export interface AuthResponse {
    success: boolean;
    message: string;
    token: string; // This is the token received after successful login
    user: any; // This can be an object containing user details
    // Other relevant properties...
  }
  