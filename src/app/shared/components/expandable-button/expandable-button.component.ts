import { Component, Input } from '@angular/core';

@Component({
  standalone :false,
  selector: 'app-expandable-button',
  templateUrl: './expandable-button.component.html',
  styleUrl: './expandable-button.component.css'
})
export class ExpandableButtonComponent {
  @Input() section: any;  

  isOpen: boolean = false; // State to control visibility

  toggleContent() {
    this.isOpen = !this.isOpen; // Toggle content visibility
  }
}
