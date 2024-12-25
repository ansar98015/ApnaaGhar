import { AfterViewInit, Component, OnInit } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';
import { SharedDataService } from '../../services/shared-data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-propertyDetails',
  templateUrl: './propertyDetails.component.html',
  styleUrls: ['./propertyDetails.component.css'],
  standalone: true,
  imports: [allPrimeNGModules],
})
export class PropertyDetailsComponent implements OnInit, AfterViewInit {
  propertyId:any;
  routerFrom:any;


  constructor(private sharedDataService: SharedDataService, private router:Router, private actRoute:ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    this.actRoute.queryParams.subscribe((params) => {
      this.propertyId = params['id'];
      this.routerFrom = params['rfm'];
    });
  }
}
