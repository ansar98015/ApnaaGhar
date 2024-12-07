import { Component, OnInit } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';

@Component({
  selector: 'app-show-all',
  templateUrl: './show-all.component.html',
  styleUrls: ['./show-all.component.css'],
  standalone: true,
  imports: [allPrimeNGModules],
})
export class ShowAllComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
