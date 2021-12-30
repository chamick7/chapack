export interface UserType {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface UserRegisterType {
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface UserLoginType {
  username: string;
  password: string;
}
