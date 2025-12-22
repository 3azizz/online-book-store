import { HttpClient } from '@angular/common/http';
import {inject ,Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  Category, IChangePassword, IForgotPasswordRequest, IForgotPasswordResponse, ILoginRequest ,ILoginResponse,IOneBookResponse,IRegisterRequest, IRegisterResponse, IResetPassword } from './IAuth';



@Injectable({
  providedIn: 'root',
})
export class Auth {
  
  private http = inject(HttpClient);

  onLogin(data:ILoginRequest):Observable <ILoginResponse>{
    return this.http.post<ILoginResponse>('auth/login', data);
  }

  onRegister(data:IRegisterRequest):Observable <IRegisterResponse>{
    return this.http.post<IRegisterResponse>('auth/register', data);
  }


  onForgotPassword(data:IForgotPasswordRequest):Observable <IForgotPasswordResponse>{
    return this.http.post<IForgotPasswordResponse>('auth/forgot-password', data);
  }
 
     onResetPassword(data:IResetPassword):Observable <IResetPassword>{
    return this.http.post<IResetPassword>('auth/reset-password', data);
  }

   onChangePassword(data:IChangePassword):Observable <IChangePassword>{
    return this.http.post<IChangePassword>('auth/change-password', data);
  }

   getBooks(): Observable<any> {
  return this.http.get('book');
}



 getOneBook(): Observable<any> {
  return this.http.get<IOneBookResponse>('book/671f8818ac86463f9ddda377');
}

getCategories(): Observable<any> {
  return this.http.get<Category>('category');

}
}
