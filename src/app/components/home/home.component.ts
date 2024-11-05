import { Component, OnInit } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [allPrimeNGModules],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
