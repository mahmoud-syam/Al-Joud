
import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';
import { ForgetpassService } from 'src/app/Shared/services/forgetpass.service';


@Component({
  selector: 'app-forgepassword',
  templateUrl: './forgepassword.component.html',
  styleUrls: ['./forgepassword.component.css']
})
export class ForgepasswordComponent {
  step1: boolean = true;
  step2: boolean = false;
  email:string='';
  msgError:string='';
  isLoading: boolean = false;

  constructor(private _ForgetpassService: ForgetpassService , private _Router:Router) { }

//----------------------------------------------------------------------------- Step 1 
  forgetForm: FormGroup = new FormGroup({
    email: new FormControl(null, [ Validators.email]),
  });

  forgetPassword(): void {
    let userEmail = this.forgetForm.value // { email:value}
    this.email = userEmail.email;
    this._ForgetpassService.forgetPassword(userEmail).subscribe({
      next: (response) => {
        this.msgError= response.message;
        console.log('ForgetPassword:', response);
        this.step1 = false;
        this.step2 = true;
      },
      error: (error: HttpErrorResponse) => {
        this.msgError= error.error.message;
        // console.error('Error:', error);
      }
    });
  }
  








  //----------------------------------------------------------------------------- Step 2
  resetCodeForm: FormGroup = new FormGroup({
    // this.forgetPaswword.get('email')?.value 
    emailResetCode: new FormControl(null, [Validators.required, Validators.email]),
    code: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required])
  });
  resetCode(): void {
    let resetCode = this.resetCodeForm.value  // {resetCode : 564565654 }
    
    this._ForgetpassService.resetCode(resetCode).subscribe({
      next: (response) => {
        this.msgError = response.message

        console.log('ResetCode:', response);
        // this.step1 = false;
        // this.step2 = true;
      },
      error: (error: HttpErrorResponse) => {
        this.msgError= error.error.message;
        console.error('Error:', error);
      }
    })
   }
 
}
