import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { allPrimeNGModules } from '../../services/primeNGShared';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, allPrimeNGModules],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  loginForm!: FormGroup;
  pswdDetailsDialog:boolean = false;
  openWindowId!:any;

  constructor(private fb: FormBuilder, private router:Router, private actRoute:ActivatedRoute, private authService: AuthService) { }

  ngOnInit() {
    this.loginFormBuilder();
  }

  ngAfterViewInit(){
    this.actRoute.queryParams.subscribe((params) => {
      // this.openWindowId = params['owid'];
    });
  }

  loginFormBuilder(){
    this.loginForm = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, this.passwordValidator]],
    });
  }

  passwordValidator(control: AbstractControl): { [key: string]: boolean } | null {
    const password = control.value;
    // Regex to check the password requirements
    const hasUpperCase = /[A-Z]/.test(password); // At least one uppercase letter
    const hasLowerCase = /[a-z]/.test(password); // At least one lowercase letter
    const hasNumeric = /[0-9]/.test(password); // At least one numeric digit
    const hasSpecialChar = /[@#$&]/.test(password); // At least one special character
    const isValidLength = password?.length >= 8; // Minimum length is 8

    if (hasUpperCase && hasLowerCase && hasNumeric && hasSpecialChar && isValidLength) {
      return null; // Valid password
    } else {
      return { passwordInvalid: true }; // Invalid password
    }
  }

  onLogin(){
    if(
      this.loginForm['valid'] 
      && (this.loginForm.value).username === 'ApnaaGhar' 
      && (this.loginForm.value).password === 'Aghar@123'
    ){
      this.authService.isLogin = true;
      this.authService.user = this.loginForm.value;
      this.router.navigate(['/home']);
    }
  }

  showPswdValidation(){
    this.pswdDetailsDialog = true;
  }

  createAccount(){
    this.router.navigate(['/createAccount']);
  }
}
