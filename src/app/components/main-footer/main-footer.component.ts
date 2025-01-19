import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Guid } from 'guid-typescript';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {
  topCityPropertyData:any[] = [];
  openWindowId:any;

  constructor(private router:Router) { }

  ngOnInit() {
    this.openWindowId = Guid.create();

    let cityNames = [
      { city: "Delhi",  },
      { city: "Mumbai",  },
      { city: "Gurgaon",  },
      { city: "Bangalore",  },
      { city: "Pune",  },
      { city: "Noida",  },
      { city: "Lucknow",  },
      { city: "Ghaziabad",  },
      { city: "Navi Mumbai",  },
      { city: "Greater Noida",  },
      { city: "Chennai",  },
      { city: "Thane",  },
      { city: "Ahmedabad",  },
      { city: "Jaipur",  },
      { city: "Hyderabad",  }
    ];

    this.topCityPropertyData = [
      { title: 'Property for Sale', type: 'Real estate', category:'buy', city: cityNames },
      { title: 'Flats for Sale', type: 'Flats', category:'buy', city: cityNames },
      { title: 'Flats for Rent', type: 'Flats for Rent', category:'rent', city: cityNames },
      { title: 'New Projects', type: 'New Projects', category:'projects', city: cityNames },
    ]
  }

  showSelectedData(category:string, type:string, cityname:string){
    this.router.navigate(['/showAll'],
      {queryParams:{ rfm:'footer', category: category, type: type, cityname: cityname, owid: this.openWindowId }}
    )
  }

  socialLinkClicked(linktype:string){
    switch(linktype){
      case 'facebook':{
        window.open('https://www.facebook.com/the.ansarkhan3', '_blank');
        break;
      }

      case 'instagram':{
        window.open('https://www.instagram.com/the.ansar3', '_blank');
        break;
      }

      case 'linkedin':{
        window.open('https://www.linkedin.com/in/ansar-khan-711973207', '_blank');
        break;
      }

      case 'twitter':{
        window.open('https://www.x.com/AnsarKhan881', '_blank');
        break;
      }

      case 'youtube':{
        window.open('https://www.youtube.com/@the.ansar3', '_blank');
        break;
      }

      default:{
        console.error('Invalid link');
        break;
      }
    }
  }
}
