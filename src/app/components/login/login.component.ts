import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _AuthService: AuthService, private _Router: Router) { }
  msgError: string = '';
  isLoading: boolean = false;

  // Form validation
  loginForm: FormGroup = new FormGroup({
    
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    
  });

  // Btn
  handleForm(): void {
    // console.log(this.loginForm.value);

    // Hayklm El Api
    if (this.loginForm.valid) {
      this.isLoading = true;
      this._AuthService.setLogin(this.loginForm.value).subscribe({
        next: (response) => {
          
          if (response && response.token) { 
            sessionStorage.setItem('eToken', response.token); 
            this._AuthService.saveUserData(response.user);   
            this._Router.navigate(['/home']);                
            this.isLoading = false;                          
          } else {
            console.error("Unexpected response format", response);
          }
        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.msgError = err.error.message || "An error occurred"; 
          console.log(err.error.message);
        }
      });
      
    // alert('Syam')
  }
}
}
