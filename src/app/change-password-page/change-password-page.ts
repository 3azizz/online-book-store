import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormField, MatLabel, MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Auth } from '../auth';

@Component({
  selector: 'app-change-password-page',
  imports: [ReactiveFormsModule, MatFormField, MatLabel ,FormsModule, MatFormFieldModule, MatInputModule,MatIconModule,MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-password-page.html',
  styleUrl: './change-password-page.scss',
})
export class ChangePasswordPage {

  changeForm = new FormGroup({
  password : new FormControl('',[Validators.required , Validators.minLength(6)]),
  newpassword : new FormControl('',[Validators.required , Validators.minLength(6)])
})

  hide = signal(true);
  authService = inject(Auth);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  onSubmit(changeForm : FormGroup){

    this.authService.onChangePassword(changeForm.value).subscribe({
      next:(response: any) =>{
        console.log(response);
        // toaster and navigate
      },
      error:(error: any)=>{
        console.log(error);
        
      }
    })
   console.log(changeForm.value)

  }

}
