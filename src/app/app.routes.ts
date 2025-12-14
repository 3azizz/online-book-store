import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { ForgetPasswordPage } from './forget-password-page/forget-password-page';
import { ResetPasswordPage } from './reset-password-page/reset-password-page';
import { ChangePasswordPage } from './change-password-page/change-password-page';
import { Dashboard } from './dashboard/dashboard';

export const routes: Routes = [
    {path: '' , component : LoginPage},
    {path : 'login', component : LoginPage},
    {path: 'register', component: RegisterPage},
    {path: 'forgetpassword' , component : ForgetPasswordPage },
    {path: 'resetpassword' , component : ResetPasswordPage },
    {path: 'changepassword' , component : ChangePasswordPage },
    {path: 'dashboard' , component : Dashboard },
    
    
];
