import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../auth';

@Component({
  selector: 'app-forget-password-page',
  imports: [ReactiveFormsModule, MatFormField, MatLabel ,FormsModule, MatFormFieldModule, MatInputModule,MatIconModule,MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './forget-password-page.html',
  styleUrl: './forget-password-page.scss',
})
export class ForgetPasswordPage {

  ForgotForm = new FormGroup({
  email : new FormControl('',[ Validators.required , Validators.email]),
})

  hide = signal(true);
  authService = inject(Auth);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  onSubmit(ForgotForm : FormGroup){

    this.authService.onForgotPassword(ForgotForm.value).subscribe({
      next:(response: any) =>{
        console.log(response);
        // toaster and navigate
      },
      error:(error: any)=>{
        console.log(error);
        
      }
    })
   console.log(ForgotForm.value)

  }
}
