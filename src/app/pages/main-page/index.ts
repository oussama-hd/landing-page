import {
  AboutHistoryAreaComponent,
  BlogSectionComponent,
  ExpandableCarouselComponent,
  FeaturesComponent,
  HeroComponent,
  MainPageComponent,
  TestimonialsComponent,
  TwoColumnWithImageComponent
} from './components';
import {MainPageRouting} from './main-page.routing';
import {SharedModule} from '../../shared/shared.module';
import { HomeOurPartnersComponent } from './components/home-our-partrners/home-our-partrners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

export const COMPONENTS = [
  MainPageComponent,
  HeroComponent,
  TwoColumnWithImageComponent,
  FeaturesComponent,
  TestimonialsComponent,
  BlogSectionComponent,
  ExpandableCarouselComponent,
  HomeOurPartnersComponent,
  AboutHistoryAreaComponent
];

export const IMPORTS = [
  MainPageRouting,
  SharedModule,
  CarouselModule,
];

export const SERVICES = [];

export const EXPORTS = [];
