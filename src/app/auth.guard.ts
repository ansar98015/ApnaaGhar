import { inject, Injectable } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AccessPermission{

  constructor(private router:Router){}

  navigateToLoginPage(){
    this.router.navigate(['/login'])
  }
}

export const AuthGuard: CanActivateFn = (route, state) => {
  let islogin = inject(AuthService).isLogin;

  if(islogin){
    return true;
  }else{
    inject(AccessPermission).navigateToLoginPage();
    return false
  }
};