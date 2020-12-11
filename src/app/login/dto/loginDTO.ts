export interface LoginDTO {
  login: string;
  password: string;
}

export interface LoginData extends LoginDTO {
  autoLogIn?: boolean;
}
