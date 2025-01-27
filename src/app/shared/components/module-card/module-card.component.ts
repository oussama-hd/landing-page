import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrl: './module-card.component.css'
})

export class ModuleCardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() iconPath: string = ''; 
}

