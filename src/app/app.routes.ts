import { Routes } from '@angular/router';
import { LoginPage } from './login-page/login-page';
import { RegisterPage } from './register-page/register-page';
import { ForgetPasswordPage } from './forget-password-page/forget-password-page';
import { ResetPasswordPage } from './reset-password-page/reset-password-page';
import { ChangePasswordPage } from './change-password-page/change-password-page';
import { Dashboard } from './dashboard/dashboard';
import { NewRealeseSection } from './new-realese-section/new-realese-section';
import { DiscountSection } from './discount-section/discount-section';
import { LatestArticlesSection } from './latest-articles-section/latest-articles-section';
import { Footer } from './footer/footer';
import { ListingPage } from './listing-page/listing-page';
import { Header } from './header/header';
import { Navbar } from './navbar/navbar';


export const routes: Routes = [
    {path: '' , component : LoginPage},
    {path : 'login', component : LoginPage},
    {path: 'register', component: RegisterPage},
    {path: 'forgetpassword' , component : ForgetPasswordPage },
    {path: 'resetpassword' , component : ResetPasswordPage },
    {path: 'changepassword' , component : ChangePasswordPage },
    {path: 'dashboard' , component : Dashboard },
    {path: 'newrelease' , component : NewRealeseSection },
    {path: 'discount' , component : DiscountSection },
    {path: 'latestarticles' , component :LatestArticlesSection  },
    {path: 'footer' , component : Footer },
    {path: 'listing' , component : ListingPage },
    {path: 'header' , component : Header},
    {path: 'navbar', component : Navbar}
    
    
];
