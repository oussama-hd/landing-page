import { Component, Input } from '@angular/core';

@Component({
  standalone :false ,
  selector: 'app-ultime-assurance-card',
  templateUrl: './ultime-assurance-card.component.html',
  styleUrl: './ultime-assurance-card.component.scss'
})
export class UltimeAssuranceCardComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon?: string;
  @Input() imageUrl?: string;
  @Input() isLarge?: boolean ;
  @Input() extraClass?: string;

}
