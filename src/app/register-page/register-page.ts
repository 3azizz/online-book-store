import { Component, inject, Inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatLabel, MatFormField, MatFormFieldModule } from "@angular/material/form-field";
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import {ChangeDetectionStrategy} from '@angular/core';
import { MatSelectModule, MatSelect, MatOption } from '@angular/material/select';
import { Auth } from '../auth';



@Component({
  selector: 'app-register-page',
  imports: [MatFormFieldModule, ReactiveFormsModule, MatFormField, MatLabel, FormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatButtonModule, MatSelect, MatOption],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './register-page.html',
  styleUrl: './register-page.scss',
})
export class RegisterPage {

registerForm = new FormGroup({
  first_name : new FormControl('',[ Validators.required]),
  last_name : new FormControl('',[ Validators.required]),
  email : new FormControl('',[ Validators.required , Validators.email]),
  password : new FormControl('',[Validators.required]),
  role : new FormControl('',[Validators.required])
})
  
  hide = signal(true);
    authService = inject(Auth);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }


  onSubmit(registerForm : FormGroup){


    this.authService.onRegister(registerForm.value).subscribe({
       next:(response: any) =>{
        console.log(response);
       
      },
      error:(error: any)=>{
        console.log(error);
        
      }
    })

    console.log(registerForm.value);
    
  }

}
