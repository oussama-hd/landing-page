import { Component, Input } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-slider-item',
  templateUrl: './slider-item.component.html',
  styleUrls: ['./slider-item.component.css']
})
export class SliderItemComponent {
  @Input() image!: string;
  @Input() title!: string;
  @Input() content!: string;
  @Input() isActive: boolean = false;
}

