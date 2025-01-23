import {layoutRouting} from './layout.routing';
import { FooterComponent, HeaderComponent, LayoutComponent, NoApiTokenComponent, ScrollTopComponent} from './components';
import {CommonModule} from '@angular/common';
import { SidebarMenuComponent } from './components/sidebar-menu/sidebar-menu.component';
import { NavbarLogoComponent } from '../shared/components';

export const COMPONENTS = [
  LayoutComponent,
  HeaderComponent,
  FooterComponent,
  ScrollTopComponent,
  NoApiTokenComponent,
  SidebarMenuComponent,
  NavbarLogoComponent
];

export const IMPORTS = [
  layoutRouting,
  CommonModule
];

export const SERVICES = [];

export const EXPORTS = [];
