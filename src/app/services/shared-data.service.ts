import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  constructor() { }

  propertiesData = [
    {
      "id": 1,
      "title": "Modern Apartment",
      "description": "A spacious, modern apartment in the heart of downtown.",
      "price": '4.5 Cr',
      "location": "Downtown, Hyderabad",
      "bedrooms": 2,
      "bathrooms": 2,
      "sq_ft": '1200sq',
      "imageUrl": "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    },
    {
      "id": 2,
      "title": "Cozy Cottage",
      "description": "A charming cottage with a beautiful garden.",
      "price": '1.8 Cr',
      "location": "Suburbs, Kolkata",
      "bedrooms": 3,
      "bathrooms": 2,
      "sq_ft": '1400sq',
      "imageUrl": "https://fastly.picsum.photos/id/13/2500/1667.jpg?hmac=SoX9UoHhN8HyklRA4A3vcCWJMVtiBXUg0W4ljWTor7s"
    },
    {
      "id": 3,
      "title": "Luxury Villa",
      "description": "A luxurious villa with a private pool and ocean view.",
      "price": '75 Lac',
      "location": "Coastal, Odisha",
      "bedrooms": 5,
      "bathrooms": 4,
      "sq_ft": '3500sq',
      "imageUrl": "https://fastly.picsum.photos/id/11/2500/1667.jpg?hmac=xxjFJtAPgshYkysU_aqx2sZir-kIOjNR9vx0te7GycQ"
    },
    {
      "id": 4,
      "title": "Urban Loft",
      "description": "A trendy loft in a renovated industrial building.",
      "price": "32 Lac",
      "location": "City Center, Delhi",
      "bedrooms": 1,
      "bathrooms": 1,
      "sq_ft": '900sq',
      "imageUrl": "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w"
    },
    {
      "id": 5,
      "title": "Suburban House",
      "description": "A family-friendly house with a large backyard.",
      "price": '40 Lac',
      "location": "Suburbs, Andhra Pradesh",
      "bedrooms": 4,
      "bathrooms": 3,
      "sq_ft": '2000sq',
      "imageUrl": "https://fastly.picsum.photos/id/14/2500/1667.jpg?hmac=ssQyTcZRRumHXVbQAVlXTx-MGBxm6NHWD3SryQ48G-o"
    },
    {
      "id": 6,
      "title": "Beachfront Condo",
      "description": "A condo with stunning ocean views.",
      "price": "60 Lac",
      "location": "Beachfront, Bhubaneswer",
      "bedrooms": 2,
      "bathrooms": 2,
      "sq_ft": '1100sq',
      "imageUrl": "https://fastly.picsum.photos/id/15/2500/1667.jpg?hmac=Lv03D1Y3AsZ9L2tMMC1KQZekBVaQSDc1waqJ54IHvo4"
    },
    {
      "id": 7,
      "title": "Mountain Cabin",
      "description": "A rustic cabin in a scenic mountain area.",
      "price": "2.2 Cr",
      "location": "Mountains, Hyderabad",
      "bedrooms": 2,
      "bathrooms": 1,
      "sq_ft": '1300sq',
      "imageUrl": "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE"
    },
    {
      "id": 8,
      "title": "Penthouse Suite",
      "description": "A luxurious penthouse with city skyline views.",
      "price": "8.5 Cr",
      "location": "Downtown, Mumbai",
      "bedrooms": 3,
      "bathrooms": 3,
      "sq_ft": '2100sq',
      "imageUrl": "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY"
    },
    {
      "id": 9,
      "title": "Farmhouse",
      "description": "A spacious farmhouse with a large plot of land.",
      "price": "30 Lac",
      "location": "Countryside, Jajpur",
      "bedrooms": 4,
      "bathrooms": 2,
      "sq_ft": '2500sq',
      "imageUrl": "https://fastly.picsum.photos/id/28/4928/3264.jpg?hmac=GnYF-RnBUg44PFfU5pcw_Qs0ReOyStdnZ8MtQWJqTfA"
    },
    {
      "id": 10,
      "title": "Studio Apartment",
      "description": "A cozy studio in a convenient city location.",
      "price": "1.5 Cr",
      "location": "City Center, Bhubaneswer",
      "bedrooms": 1,
      "bathrooms": 1,
      "sq_ft": '600sq',
      "imageUrl": "https://fastly.picsum.photos/id/74/4288/2848.jpg?hmac=q02MzzHG23nkhJYRXR-_RgKTr6fpfwRgcXgE0EKvNB8"
    }
  ];

  multiPropertiesData = [
    {
      "id": 1,
      "title": "Modern Apartment",
      "description": "A spacious, modern apartment in the heart of downtown.",
      "price": '4.5 Cr',
      "location": "Downtown, Hyderabad",
      "bhk": "2BHK",
      "bedrooms": 2,
      "bathrooms": 2,
      "sq_ft": '1200sq',
      "imageUrl": "https://picsum.photos/200/300?random=1",
      "furnish":"Unfurnished",
      "lift": 2,
      "electricityAvl": "Yes/Rare Powercut",
      "waterAvl": "24 Hours Available",
      "carParking": "3 Covered",
      "posted":"01-01-2025"
    },
    {
      "id": 2,
      "title": "Cozy Cottage",
      "description": "A charming cottage with a beautiful garden.",
      "price": '1.8 Cr',
      "location": "Suburbs, Kolkata",
      "bhk": "3BHK",
      "bedrooms": 3,
      "bathrooms": 2,
      "sq_ft": '1400sq',
      "imageUrl": "https://picsum.photos/200/300?random=2",
      "furnish":"Furnished",
      "lift": 3,
      "electricityAvl": "Yes/Rare Powercut",
      "waterAvl": "24 Hours Available",
      "carParking": "3 Covered",
      "posted":"01-01-2025"
    },
    {
      "id": 3,
      "title": "Luxury Villa",
      "description": "A luxurious villa with a private pool and ocean view.",
      "price": '75 Lac',
      "location": "Coastal, Odisha",
      "bhk": "5BHK",
      "bedrooms": 5,
      "bathrooms": 4,
      "sq_ft": '3500sq',
      "imageUrl": "https://picsum.photos/200/300?random=3",
      "furnish":"Unfurnished",
      "lift": 1,
      "electricityAvl": "Yes/Rare Powercut",
      "waterAvl": "24 Hours Available",
      "carParking": "5 Covered",
      "posted":"01-01-2025"
    },
    {
      "id": 4,
      "title": "Urban Loft",
      "description": "A trendy loft in a renovated industrial building.",
      "price": "32 Lac",
      "location": "City Center, Delhi",
      "bhk": "1BHK",
      "bedrooms": 1,
      "bathrooms": 1,
      "sq_ft": '900sq',
      "imageUrl": "https://picsum.photos/200/300?random=4",
      "furnish":"Unfurnished",
      "lift": 1,
      "electricityAvl": "Yes/Rare Powercut",
      "waterAvl": "24 Hours Available",
      "carParking": "1 Covered",
      "posted":"01-01-2025"
    },
    {
      "id": 5,
      "title": "Suburban House",
      "description": "A family-friendly house with a large backyard.",
      "price": '40 Lac',
      "location": "Suburbs, Andhra Pradesh",
      "bhk": "4BHK",
      "bedrooms": 4,
      "bathrooms": 3,
      "sq_ft": '2000sq',
      "imageUrl": "https://picsum.photos/200/300?random=5",
      "furnish":"Furnished",
      "lift": 1,
      "electricityAvl": "Yes/Rare Powercut",
      "waterAvl": "24 Hours Available",
      "carParking": "1 Covered",
      "posted":"01-01-2025"
    },
    {
      "id": 6,
      "title": "Beachfront Condo",
      "description": "A condo with stunning ocean views.",
      "price": "60 Lac",
      "location": "Beachfront, Bhubaneswer",
      "bhk": "2BHK",
      "bedrooms": 2,
      "bathrooms": 2,
      "sq_ft": '1100sq',
      "imageUrl": "https://picsum.photos/200/300?random=6",
      "furnish":"Unfurnished",
      "lift": 3,
      "electricityAvl": "Yes/Rare Powercut",
      "waterAvl": "24 Hours Available",
      "carParking": "1 Covered",
      "posted":"01-01-2025"
    },
  ];

  imageList = [
    { id:1, imageUrl: "https://picsum.photos/200/300?random=1" },
    { id:2, imageUrl: "https://picsum.photos/200/300?random=2" },
    { id:3, imageUrl: "https://picsum.photos/200/300?random=3" },
    { id:4, imageUrl: "https://picsum.photos/200/300?random=4" },
    { id:5, imageUrl: "https://picsum.photos/200/300?random=5" },
    { id:6, imageUrl: "https://picsum.photos/200/300?random=6" },
    { id:7, imageUrl: "https://picsum.photos/200/300?random=7" },
    { id:8, imageUrl: "https://picsum.photos/200/300?random=8" },
    { id:9, imageUrl: "https://picsum.photos/200/300?random=9" },
  ]
}