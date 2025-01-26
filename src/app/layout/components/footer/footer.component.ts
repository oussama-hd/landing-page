import {Component, Input} from '@angular/core';
import { SocialLink } from '../../../models/SocialLink';

@Component({
  standalone:false,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl:'./footer.component.scss'
})
export class FooterComponent {

   currentYear: number;

   socialLinks: SocialLink[] = [
    {
        name: 'Facebook',
        url: 'https://www.facebook.com',
        iconPath: 'assets/images/icons/facebook.svg'
    },
    {
        name: 'Twitter',
        url: 'https://www.twitter.com',
        iconPath: 'assets/images/icons/twitter.svg'
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com',
        iconPath: 'assets/images/icons/instagram.svg'
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com',
        iconPath: 'assets/images/icons/linkedin.svg'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com',
        iconPath: 'assets/images/icons/youtube.svg'
    },
    {
      name: 'icon',
      url: '#',
      iconPath: 'assets/images/icons/Icon.svg'
    }
];
  
  constructor() {}
  
  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
