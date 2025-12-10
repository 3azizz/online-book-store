export interface User {}

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
    profile: {
      _id: string;
      first_name: string;
      last_name: string;
      email: string;
      status: string;
      role: string;
      shipping_addresses: any[];
    };
  };
  code: number;
  status: string;
  timestamp: string;
}



export interface IRegisterResponse {
  message: string;
  data:{
  first_name: string;
  last_name: string;
  email: string;
  status: string;
  role: string;
  _id: string;
  shipping_addresses: any[];
  updatedAt: string;
  createdAt: string;
  __v: number;
};
  code: number;
  status: string;
  timestamp: string;
}

export interface IForgotPassword {
  message: string;
  code: number;
  status: string;
  timestamp: string;
}

export interface IResetPassword {
  code: number;
  status: string;
  message: string;
  timestamp: string;
}

export interface IChangePassword {
  code: number;
  status: string;
  message: string[];
  timestamp: string;
}