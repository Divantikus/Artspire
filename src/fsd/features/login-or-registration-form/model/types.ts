export interface IFormData {
  email: string;
  password: string;
  username: string;
  checkPassword?: string;
}

export interface LoginFormProps {
  isSignIn: boolean;
}
