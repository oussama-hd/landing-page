import {Component, Input} from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-two-column-with-image',
  templateUrl: './two-column-with-image.component.html'
})
export class TwoColumnWithImageComponent {
  @Input() fields:any;

  constructor() {
  }
}
