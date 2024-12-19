import { Component, OnInit } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';
import { Router } from '@angular/router';
import { SharedDataService } from '../../services/shared-data.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [allPrimeNGModules],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  propertiesData:any[] = [];
  responsiveOptions:any[] = [];
  propertiesCategory:any[] = [];
  multiShowProperties:any[] = [];
  multiPropertiesData:any[] = [];
  searchTabDataSource:any[] = [];

  constructor(private router: Router, private sharedDataService: SharedDataService) { }

  ngOnInit() {
    this.propData();
  }

  propData(){
    this.searchTabDataSource = [
      { title: 'BUY', content: 'Tab BUY' },
      { title: 'RENT / PG', content: 'Tab 2 Content' },
      { title: 'PROJECTS', content: 'Tab 3 Content' },
      { title: 'COMMERICAL', content: 'Tab 4 Content' },
      { title: 'DEALERS', content: 'Tab 5 Content' }
    ];
    
    this.propertiesData = this.sharedDataService.propertiesData;

    this.multiPropertiesData = this.sharedDataService.multiPropertiesData;

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 2,
          numScroll: 1
      },
      {
          breakpoint: '991px',
          numVisible: 1,
          numScroll: 1
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];

    this.propertiesCategory = [
      { proptitle: 'Top Trending', propData: this.propertiesData },
      { proptitle: 'Spotlights', propData: this.propertiesData },
    ]

    let multiPropDatas = [
      { parentTitle: 'Top New Project', data: this.multiPropertiesData },
      { parentTitle: 'Top New Project', data: this.multiPropertiesData },
      { parentTitle: 'Top New Project', data: this.multiPropertiesData },
      { parentTitle: 'Top New Project', data: this.multiPropertiesData },
      { parentTitle: 'Top New Project', data: this.multiPropertiesData },
      { parentTitle: 'Top New Project', data: this.multiPropertiesData },
    ]
    
    this.multiShowProperties = [
      { proptitle: 'Top New Projects', propData: multiPropDatas }
    ]

  }

  homeSearchClicked(tab:any, serchVal:any){
    this.router.navigate(['/showAll'], { queryParams: { tab: tab.title, searchValue: serchVal.value }});
  }
}
