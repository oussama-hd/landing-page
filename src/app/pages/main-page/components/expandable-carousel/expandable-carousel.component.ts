import { Component } from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-expandable-carousel',
  templateUrl: './expandable-carousel.component.html',
  styleUrl: './expandable-carousel.component.css'
})
export class ExpandableCarouselComponent {
  options = [
    {
      background: 'url(https://cdn.pixabay.com/photo/2021/09/13/10/27/nature-6620939_960_720.jpg)',
      label: 'Valleys',
      // icon: 'fa-walking',
      description: 'A peaceful valley surrounded by mountains, ideal for hiking and nature walks.'
    },
    {
      background: 'url(https://cdn.pixabay.com/photo/2016/11/08/05/16/boy-1807518_960_720.jpg)',
      label: 'River',
      // icon: 'fa-tint',
      description: 'A calm river flowing through lush greenery, perfect for a serene escape.'
    },
    {
      background: 'url(https://cdn.pixabay.com/photo/2016/04/20/19/47/wolves-1341881_960_720.jpg)',
      label: 'Snow',
      // icon: 'fa-snowflake',
      description: 'Snow-covered peaks, a beautiful winter wonderland full of adventure.'
    },
    {
      background: 'url(https://cdn.pixabay.com/photo/2016/10/14/19/21/canyon-1740973_960_720.jpg)',
      label: 'Mountain',
      // icon: 'fa-tree',
      description: 'Majestic mountains offering stunning views and hiking trails.'
    },
    {
      background: 'url(https://cdn.pixabay.com/photo/2017/05/27/22/33/morocco-2349647_960_720.jpg)',
      label: 'Sunny',
      // icon: 'fa-sun',
      description: 'Endless sunshine and clear skies, perfect for beach days and outdoor fun.'
    }
  ];


  selectedOption: number = 0; 

  onOptionClick(index: number): void {
    this.selectedOption = index; 
  }
}
