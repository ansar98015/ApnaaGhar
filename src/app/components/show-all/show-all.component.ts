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
  filerBtns:any[] = [];

  constructor() { }

  ngOnInit() {
    this.filerBtns = [
      {btnName: 'Residential', badgeVal: 1},
      {btnName: 'Price', badgeVal: 3},
      {btnName: 'BHK', badgeVal: 5},
      {btnName: 'Ownership', badgeVal: 0}
    ]
  }

  sidebartoggle(){
  }

}
