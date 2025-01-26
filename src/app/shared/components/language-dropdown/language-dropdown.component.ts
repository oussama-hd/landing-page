import { Component } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-language-dropdown',
  templateUrl: './language-dropdown.component.html',
  styleUrl: './language-dropdown.component.css'
})
export class LanguageDropdownComponent {
  isDropdownOpen = false;
  selectedLanguage = { value: 'en', label: 'Anglais', img: 'assets/images/lang/US.svg' };
  languages = [
    { value: 'fr', label: 'français ', img: 'assets/images/lang/FR.svg' },
    { value: 'en', label: 'Anglais', img: 'assets/images/lang/US.svg'},
    { value: 'ar', label: 'Arabe', img: 'assets/images/lang/DZ.svg' },
  ];

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  selectLanguage(language: any) {
    this.selectedLanguage = language;
    this.isDropdownOpen = false;
  }
}