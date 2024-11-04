import { LoginData, RegisterData, TokenData } from "@shared/api";

import axios from "axios";

class AuthService {
  private baseUrl = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_AUTH_PORT}/users/`;

  async registerUser(registerData: RegisterData) {
    return await axios.postForm(this.baseUrl + "register", registerData);
  }

  async loginUser(loginData: LoginData) {
    return await axios.postForm<TokenData>(
        this.baseUrl + "login",
        loginData
    );
  }

  async refreshToken() {
    return await axios.post<TokenData>(
      this.baseUrl + "refresh",
      {},
      { withCredentials: true }
    );
  }

  async logoutUser() {
    return await axios.post(this.baseUrl + "logout", {});
  }
}
export const authService = new AuthService();
