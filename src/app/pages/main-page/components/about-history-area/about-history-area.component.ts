import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-about-history-area',
  templateUrl: './about-history-area.component.html',
  styleUrl: './about-history-area.component.scss'
})
export class AboutHistoryAreaComponent {
  facilities = [
    {
      name: 'Restaurant',
      icon: 'lnr lnr-dinner',
      description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
    },
    {
      name: 'Sports Club',
      icon: 'lnr lnr-bicycle',
      description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
    },
    {
      name: 'Swimming Pool',
      icon: 'lnr lnr-shirt',
      description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
    },
    {
      name: 'Rent a Car',
      icon: 'lnr lnr-car',
      description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
    },
    {
      name: 'Gymnasium',
      icon: 'lnr lnr-construction',
      description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
    },
    {
      name: 'Bar',
      icon: 'lnr lnr-coffee-cup',
      description: 'Usage of the Internet is becoming more common due to rapid advancement of technology and power.'
    }
  ];
}
