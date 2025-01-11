import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLogin:boolean = true; // After completion of project isLogin will be set to False.
  user:any = {};

  constructor() { }

}