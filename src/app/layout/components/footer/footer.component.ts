import {Component, Input} from '@angular/core';

@Component({
  standalone:false,
  selector: 'app-footer',
  templateUrl: './footer.component.html'
})
export class FooterComponent {
  @Input() menuData:any;

  constructor() {
  }

  get menuItems() {
    if (this.menuData) {
      return this.menuData.data.data.navigation_menu[0].menu_items;
    }
    return [];
  }

}
