import { Component, Input } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css']
})
export class SliderItemComponent {
  @Input() item: any;
  @Input() isActive: boolean = false;
}

