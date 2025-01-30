import {LanguageDropdownComponent, LoaderComponent, NavbarLogoComponent } from './components';
import {CommonModule} from '@angular/common';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { TitleComponent } from './components/title/title.component';
import { TestimonialCardComponent } from './components/testimonial-card/testimonial-card.component';
import { UltimeAssuranceCardComponent } from './components/ultime-assurance-card/ultime-assurance-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExpandableButtonComponent } from './components/expandable-button/expandable-button.component';

export const COMPONENTS = [
  LoaderComponent,
  InfiniteScrollComponent,
  LanguageDropdownComponent,
  ModuleCardComponent,
  TitleComponent,
  UltimeAssuranceCardComponent,
  TestimonialCardComponent,
  ExpandableButtonComponent
];

export const IMPORTS = [
  CommonModule,
  FormsModule , 
  ReactiveFormsModule
];

export const SERVICES = [];

export const EXPORTS = [
  CommonModule,
  LoaderComponent,
  InfiniteScrollComponent,
  LanguageDropdownComponent,
  TitleComponent,
  ModuleCardComponent,
  UltimeAssuranceCardComponent,
  TestimonialCardComponent,
  ExpandableButtonComponent
];
