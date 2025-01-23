import { Component } from '@angular/core';

@Component({
  standalone :false ,
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.component.html',
  styleUrl: './infinite-scroll.component.scss'
})
export class InfiniteScrollComponent {
  
  icons = [
    {
        name: 'mcdonalds',
        url: 'assets/images/icons/mcdonalds.svg'
    },
    {
        name: 'jordan',
        url: 'assets/images/icons/jordan.svg',
    },
    {
        name: 'aws',
        url: 'assets/images/icons/aws.svg',
    },
    {
        name: 'spotify',
        url: 'assets/images/icons/spotify.svg',
    },
    {
        name: 'burger-king',
        url: 'assets/images/icons/burger-king.svg',
    },
    {
      name: 'honda',
      url:  'assets/images/icons/honda.svg',
    },
    {
      name: 'hula',
      url:  'assets/images/icons/hula.svg',
    },
];

}
