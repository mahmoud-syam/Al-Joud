import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// Programming router
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private _AuthService: AuthService, private _Router: Router) { }
  msgError: string = '';
  isLoading: boolean = false;

  // Form validation
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
    password_confirmation: new FormControl(null, [Validators.required])
  });

  // Btn
  handleForm(): void {
    // console.log(this.registerForm.value);

    // Hayklm El Api
    if (this.registerForm.valid) {
      this.isLoading = true;
      this._AuthService.setRegister(this.registerForm.value).subscribe({
        next: (response) => {
          if (response.message == 'Registration successful.') {
            this._Router.navigate(['/login',])
            this.isLoading = true;
          }

          console.log(response);

        },
        error: (err: HttpErrorResponse) => {
          this.isLoading = false;
          this.msgError = err.error.message
          console.log(err.error.message);

        }
      }

      )
    }
    // alert('Syam')
  }
}
