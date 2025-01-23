import {layoutRouting} from './layout.routing';
import { FooterComponent, HeaderComponent, LayoutComponent, NoApiTokenComponent, ScrollTopComponent} from './components';
import {CommonModule} from '@angular/common';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';

export const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  ScrollTopComponent,
  NoApiTokenComponent,
  SidebarMenuComponent
];

export const IMPORTS = [
  layoutRouting,
  CommonModule
];

export const SERVICES = [];

export const EXPORTS = [];
