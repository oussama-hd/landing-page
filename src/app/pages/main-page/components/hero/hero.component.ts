import {Component, Input} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone : false,
  selector: 'app-hero',
  templateUrl: './hero.component.html',
    styleUrl: './hero.component.scss'
})
export class HeroComponent {
  constructor(private router: Router) {
  }

  onClick() {
    this.router.navigate(['/contact']);
  }

}
