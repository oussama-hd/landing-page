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
        name: 'html',
        url: 'assets/images/icons/tech/html.svg'
    },
    {
        name: 'css',
        url: 'assets/images/icons/tech/css.svg',
    },
    {
        name: 'java',
        url: 'assets/images/icons/tech/java.svg',
    },
    {
        name: 'angular',
        url: 'assets/images/icons/tech/angular.svg',
    },
    {
      name: 'redHat',
      url: 'assets/images/icons/tech/redhat.svg',
    },


];


}
