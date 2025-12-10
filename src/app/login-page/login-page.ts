
import { Component, inject, Inject } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {ChangeDetectionStrategy, signal} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { error, log } from 'console';
import { Auth } from '../auth';




@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule, MatFormField, MatLabel ,FormsModule, MatFormFieldModule, MatInputModule,MatIconModule,MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage {
loginForm = new FormGroup({
  email : new FormControl('',[ Validators.required , Validators.email]),
  password : new FormControl('',[Validators.required , Validators.minLength(6)])
})

  hide = signal(true);
  authService = inject(Auth);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  onSubmit(loginForm : FormGroup){

    this.authService.onLogin(loginForm.value).subscribe({
      next:(response: any) =>{
        console.log(response);
        // toaster and navigate
      },
      error:(error: any)=>{
        console.log(error);
        
      }
    })
   console.log(loginForm.value)

  }
}
