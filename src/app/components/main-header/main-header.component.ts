import { Component, OnInit } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [allPrimeNGModules],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  headerItems: any[] | undefined;
  constructor() { }

  ngOnInit() {
    this.headerItems = [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'Contact Us', icon: 'pi pi-envelope' }
    ]
  }

}
