import { Component, Input } from '@angular/core';

@Component({
  standalone : false,
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
  styleUrl: './testimonial-card.component.scss'
})
export class TestimonialCardComponent {
  @Input() testimonial!: { text: string; name: string; role: string; image: string };
}
