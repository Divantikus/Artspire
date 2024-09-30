import { LoginData, RegisterData, TokenData } from "@shared/api/index";

import axios from "axios";

class AuthService {
  private baseUrl = `http://${process.env.NEXT_PUBLIC_DOMAIN_NAME}:${process.env.NEXT_PUBLIC_AUTH_PORT}/users/`;

  async registerUser(registerData: RegisterData) {
    const data = await axios.postForm(this.baseUrl + "register", registerData);
    console.log(data);
    return data;
  }

  async loginUser(loginData: LoginData) {
    const data = await axios.postForm<TokenData>(
      this.baseUrl + "login",
      loginData
    );
    console.log(data);
    return data;
  }

  async logoutUser() {
    const data = await axios.post(this.baseUrl + "logout", {});
    console.log(data);
    return data;
  }
}
export const authService = new AuthService();
