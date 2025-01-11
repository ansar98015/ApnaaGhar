import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  standalone: true,
  imports: [allPrimeNGModules, CommonModule, ReactiveFormsModule],
})

export class CreateAccountComponent implements OnInit {
  signUpForm!: FormGroup;
  pswdDetailsDialog:boolean = false;
  openWindowId!:any;
  invalidform:boolean = false;
  @Output() showLogin:EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder, private router:Router, private actRoute:ActivatedRoute,) { }

  ngOnInit() {
    this.signUpFormBuilder();
  }

  signUpFormBuilder(){
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required]],
      username: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      number: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      password: ['', [Validators.required, this.passwordValidator]],
      terms: [false, Validators.requiredTrue],
      member: ['', Validators.required],
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

  showPswdValidation(){
    this.pswdDetailsDialog = true;
  }

  onInput(e:any){
    this.invalidform = false;
  }

  onCreateAccount(){
    if(this.signUpForm['valid']){

    }else{
      this.invalidform = true;
    }
  }

  goToLogin(){
    this.showLogin.emit(true);
  }
}
