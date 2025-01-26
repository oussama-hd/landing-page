import {ChangeDetectorRef, Component, HostListener, Input, NgZone, OnInit, ViewChild} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {filter} from 'rxjs/operators';
import { BlinkService } from '../../../services/blink.service';

@Component({
  standalone:false,
  selector: 'app-header',
  styleUrl:"./header.component.scss",
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  menus = [
    { label: 'Home', url: '#home' },
    { label: 'ERP Insurance', url: '#erp-insurance' },
    { label: 'Modules', url: '#modules' },
    { label: 'Clients', url: '#clients' },
    { label: 'Partners', url: '#partners' },
    { label: 'Contact', url: '#contact' },
    { label: 'About', url: '#about' }
  ];
  
  public isSticky = false;
  public toggler = false;

  public activeUrl;

  @Input() menuData;
  @ViewChild('navbarArea') navbarArea;
  
  toggleNavbar = true;
  constructor(private router: Router, public blinkService: BlinkService) {
    this.onScroll();
  }

  ngOnInit(): void {
    this.activeUrl = this.router.url;
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.activeUrl = event.url;
      });
  }

  // This will control the visibility of the mobile menu
  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleSideNav() {
      this.blinkService.sideNavOpen = !this.blinkService.sideNavOpen;
      this.blinkService.showNavMenu = !this.blinkService.showNavMenu;
  }


  get menuItems() {
    if (this.menuData) {
      return this.menuData.data.data.navigation_menu[0].menu_items;
    }
    return [];
  }

  isActive(url:string) {
    if (url) {
      return url[0] === this.activeUrl;
    }
    return false;
  }

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.navbarArea) {
      const sticky = this.navbarArea.nativeElement.offsetTop;
      this.isSticky = window.pageYOffset > sticky;
    } else {
      this.isSticky = false;
    }

    const sections = document.querySelectorAll('.page-scroll');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    const de = document.documentElement;

    for (let i = 0; i < sections.length; i++) {
      const currLink = sections[i];
      const currLinkHref = currLink.getAttribute('href');
      const val = currLinkHref?.replace('/', '');
      const refElement = document.querySelector(val);
      if (refElement) {
        const box = refElement.getBoundingClientRect();
        const top = box.top + window.pageYOffset - de.clientTop;

        const scrollTopMinus = scrollPos + 73;

        const h = refElement.getBoundingClientRect().height;

        if (refElement && top <= scrollTopMinus && (top + h > scrollTopMinus)) {
          this.activeUrl = '/' + currLinkHref;
        }
      }
    }
  }

  onTogglerClick() {
    this.toggler = !this.toggler;
  }

  onMenuItemClick() {
    this.toggler = false;
  }

  get isTogglerActive() {
    return this.toggler;
  }

}
