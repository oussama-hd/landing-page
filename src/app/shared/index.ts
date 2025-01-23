import {LoaderComponent } from './components';
import {CommonModule} from '@angular/common';
import { InfiniteScrollComponent } from './components/infinite-scroll/infinite-scroll.component';


export const COMPONENTS = [
  LoaderComponent,
  InfiniteScrollComponent
];

export const IMPORTS = [
  CommonModule
];

export const SERVICES = [];

export const EXPORTS = [
  CommonModule,
  LoaderComponent,
  InfiniteScrollComponent
];
