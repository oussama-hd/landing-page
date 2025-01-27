import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {appRouting} from './app.routing';
import { LayoutModule } from './layout/layout.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './shared/components/title/title.component';

export const COMPONENTS = [
  AppComponent,
];

export const IMPORTS = [
  BrowserModule,
  CommonModule,
  BrowserAnimationsModule,
  appRouting,
  LayoutModule,
  NotFoundModule,
  CarouselModule 
];

export const SERVICES = [];
