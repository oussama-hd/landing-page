
import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  standalone: false,
  selector: 'app-home-our-partners',
  templateUrl: './home-our-partrners.component.html',
  styleUrls: ['./home-our-partrners.component.scss']
})
export class HomeOurPartnersComponent implements OnInit {

  partners = [
    { id: '1', name: 'BMW', image: 'assets/images/brands/bmw.png' },
    { id: '2', name: 'Ferrari', image: 'assets/images/brands/ferrari.png' },
    { id: '3', name: 'Mahindra', image: 'assets/images/brands/mahindra.png' },
    { id: '4', name: 'Nissan', image: 'assets/images/brands/nissan.png' },
    { id: '5', name: 'Peugeot', image: 'assets/images/brands/peugeaut.png' },
    { id: '6', name: 'Porsche', image: 'assets/images/brands/porsche.png' },
    { id: '7', name: 'Toyota', image: 'assets/images/brands/toyota.png' }
  ];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    autoplay:true,
    autoplaySpeed: 3000,
    autoplayHoverPause:true,
    touchDrag: true,
    pullDrag: true,
    merge: true,
    dots: false,
    margin: 25,
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 7
      },
      740: {
        items: 7
      },
      940: {
        items: 9
      }
    },
  };

  // Track by function to uniquely identify each partner
  trackByPartner(partner): any {
    return partner.id;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
