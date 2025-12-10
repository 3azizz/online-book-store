import { HttpClient } from '@angular/common/http';
import {inject ,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IChangePassword, IForgotPassword, ILoginRequest ,ILoginResponse, IRegisterResponse, IResetPassword } from './IAuth';



@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private http = inject(HttpClient);

  onLogin(data:ILoginRequest):Observable <ILoginResponse>{
    return this.http.post<ILoginResponse>('auth/login', data);
  }

  onRegister(data:IRegisterResponse):Observable <IRegisterResponse>{
    return this.http.post<IRegisterResponse>('auth/register', data);
  }

    onForgotPassword(data:IForgotPassword):Observable <IForgotPassword>{
    return this.http.post<IForgotPassword>('auth/forgot-password', data);
  }

     onResetPassword(data:IResetPassword):Observable <IResetPassword>{
    return this.http.post<IResetPassword>('auth/reset-password', data);
  }

   onChangePassword(data:IChangePassword):Observable <IChangePassword>{
    return this.http.post<IChangePassword>('auth/change-password', data);
  }

}
