export interface LoginData {
  username: string;
  password: string;
}

export interface RegisterData extends LoginData {
  email: string;
}

export interface TokenData {
  token_type: string;
  access_token: string;
  refresh_token: string;
}
