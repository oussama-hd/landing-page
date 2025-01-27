import {LanguageDropdownComponent, LoaderComponent, NavbarLogoComponent } from './components';
import {CommonModule} from '@angular/common';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';
import { ModuleCardComponent } from './components/module-card/module-card.component';
import { TitleComponent } from './components/title/title.component';


export const COMPONENTS = [
  LoaderComponent,
  InfiniteScrollComponent,
  LanguageDropdownComponent,
  ModuleCardComponent,
  TitleComponent,
];

export const IMPORTS = [
  CommonModule
];

export const SERVICES = [];

export const EXPORTS = [
  CommonModule,
  LoaderComponent,
  InfiniteScrollComponent,
  LanguageDropdownComponent,
  ModuleCardComponent,
  TitleComponent
];
