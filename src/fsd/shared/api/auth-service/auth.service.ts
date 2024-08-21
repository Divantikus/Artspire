import { LoginData, RegisterData } from "./authTypes";

import axios from "axios";

class AuthService {
  private baseUrl = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_PORT}/api/auth/`;

  async registerUser(registerData: RegisterData) {
    return await axios.post(this.baseUrl + "register", registerData);
  }

  async loginUser(loginData: LoginData) {
    return await axios.post(this.baseUrl + "login", loginData);
  }

  async logoutUser() {
    return await axios.post(this.baseUrl + "logout");
  }
}
export const authService = new AuthService();
