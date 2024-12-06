import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './main-footer.component.html',
  styleUrls: ['./main-footer.component.css']
})
export class MainFooterComponent implements OnInit {
  topCityPropertyData:any[] = [];

  constructor() { }

  ngOnInit() {
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
      { title: 'Property for Sale', type: 'Real estate', city: cityNames },
      { title: 'Flats for Sale', type: 'Flats', city: cityNames },
      { title: 'Flats for Rent', type: 'Flats for Rent', city: cityNames },
      { title: 'New Projects', type: 'New Projects', city: cityNames },
    ]
  }

}
