
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-thumbnail',
  templateUrl: './thumbnail.component.html',
  styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent {
  // @Input() items: { image: string; title: string; content: string }[] = [];
  items = [
    { image: 'assets/images/icons/slider/ameni.svg', title: 'Ameni' },
    { image: 'assets/images/icons/slider/erp.svg', title: 'ERP' },
    { image: 'assets/images/icons/slider/hr.svg', title: 'HR' },
    { image: 'assets/images/icons/slider/appMobile.svg', title: "L'APPLICATION MOBILE" },
    // { image: 'assets/image/img5.jpg', title: 'Slider 05' }
  ];
  @Input() activeIndex: number = 0;
  @Output() itemSelected = new EventEmitter<number>();

  selectItem(index: number) {
    this.itemSelected.emit(index);
  }
}
