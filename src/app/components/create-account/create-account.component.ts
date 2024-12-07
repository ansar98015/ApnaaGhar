import { Component, OnInit } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
  standalone: true,
  imports: [allPrimeNGModules],
})
export class CreateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
