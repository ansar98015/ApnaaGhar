import { Component, OnInit } from '@angular/core';
import { allPrimeNGModules } from '../../services/primeNGShared';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header',
  standalone: true,
  imports: [allPrimeNGModules],
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  headerItems: any[] | undefined;
  items: any[] | undefined;
  searchPanelImage!:string;
  constructor(private router: Router) { }

  ngOnInit() {
    this.searchPanelImage = 'https://fastly.picsum.photos/id/411/5000/2358.jpg?hmac=YjkATffpMa8rh663_FXDsGY0W-Y0hAPfqpjXZoP65hQ'
    this.headerItems = [
      { label: 'Home', icon: 'pi pi-home' },
      { label: 'Contact Us', icon: 'pi pi-envelope' }
    ]

    this.items = [
      {
        label: 'Furniture',
        icon: 'pi pi-box',
        items: [
          [
            {
              label: 'Living Room',
              items: [{ label: 'Accessories' }, { label: 'Armchair' }, { label: 'Coffee Table' }, { label: 'Couch' }, { label: 'TV Stand' }]
            }
          ],
          [
            {
              label: 'Kitchen',
              items: [{ label: 'Bar stool' }, { label: 'Chair' }, { label: 'Table' }]
            }
          ],
          [
            {
              label: 'Bedroom',
              items: [{ label: 'Bed' }, { label: 'Chaise lounge' }, { label: 'Cupboard' }, { label: 'Dresser' }, { label: 'Wardrobe' }]
            }
          ],
          [
            {
              label: 'Office',
              items: [{ label: 'Bookcase' }, { label: 'Cabinet' }, { label: 'Chair' }, { label: 'Desk' }, { label: 'Executive Chair' }]
            }
          ]
        ]
      },
      {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Computer',
              items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
            }
          ],
          [
            {
              label: 'Home Theather',
              items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
            }
          ],
          [
            {
              label: 'Gaming',
              items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
            }
          ],
          [
            {
              label: 'Appliances',
              items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
            }
          ]
        ]
      },
      {
        label: 'Sports',
        icon: 'pi pi-clock',
        items: [
          [
            {
              label: 'Football',
              items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }]
            }
          ],
          [
            {
              label: 'Running',
              items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }]
            }
          ],
          [
            {
              label: 'Swimming',
              items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }]
            }
          ],
          [
            {
              label: 'Tennis',
              items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }]
            }
          ]
        ]
      },
      {
        label: 'Electronics',
        icon: 'pi pi-mobile',
        items: [
          [
            {
              label: 'Computer',
              items: [{ label: 'Monitor' }, { label: 'Mouse' }, { label: 'Notebook' }, { label: 'Keyboard' }, { label: 'Printer' }, { label: 'Storage' }]
            }
          ],
          [
            {
              label: 'Home Theather',
              items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }]
            }
          ],
          [
            {
              label: 'Gaming',
              items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }]
            }
          ],
          [
            {
              label: 'Appliances',
              items: [{ label: 'Coffee Machine' }, { label: 'Fridge' }, { label: 'Oven' }, { label: 'Vaccum Cleaner' }, { label: 'Washing Machine' }]
            }
          ]
        ]
      },
    ]
  }

  headerBtnClicked(option: any){
    if(option.label === "Home"){
      this.router.navigate(['/home']);
    }
  }
}
