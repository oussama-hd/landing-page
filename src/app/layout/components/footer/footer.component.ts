import {Component, Input} from '@angular/core';
import { SocialLink } from '../../../models/SocialLink';

@Component({
  standalone:false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl:'./footer.component.scss'
})
export class FooterComponent {
  email: string = ''; 
  // @Input() menuData:any;
   socialLinks: SocialLink[] = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        iconPath: 'assets/images/icons/facebook.png'
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com',
        iconPath: 'assets/images/icons/twitter.png'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        iconPath: 'assets/images/icons/instagram.png'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        iconPath: 'assets/images/icons/linkedin.png'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com',
        iconPath: 'assets/images/icons/youtube.png'
    }
];


  // Subscribe method
  onSubscribe(): void {
    if (this.email) {
      console.log('Subscribed with email:', this.email);
      // Handle subscription logic here (e.g., sending the email to the server)
    }
  }

  constructor() {
  }

  // get menuItems() {
  //   if (this.menuData) {
  //     return this.menuData.data.data.navigation_menu[0].menu_items;
  //   }
  //   return [];
  // }

}
