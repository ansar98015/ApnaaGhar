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
  badgeValue = 3;
  filerBtns:any[] = [];

  constructor() { }

  ngOnInit() {
    this.filerBtns = [
      {BtnName: 'Residential'},
      {BtnName: 'Price'},
      {BtnName: 'BHK'},
      {BtnName: 'Ownership'}
    ]
  }

  sidebartoggle(){
  }

}
