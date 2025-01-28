import {
  BlogSectionComponent,
  // CountriesPlacesScrollComponent,
  ExpandableCarouselComponent,
  FlexHoverSliderComponent,
  HeroComponent,
  InfiniteScrollSectionComponent,
  MainPageComponent,
  TestimonialsSectionComponent,
} from './components';
import {MainPageRouting} from './main-page.routing';
import {SharedModule} from '../../shared/shared.module';
import { HomeOurPartnersComponent } from './components/home-our-partrners/home-our-partrners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModulesSectionComponent } from './components/modules-section/modules-section.component';
import { UltimeAssuranceSectionComponent } from './components/ultime-assurance-section/ultime-assurance-section.component';

export const COMPONENTS = [
  MainPageComponent,
  HeroComponent,
  BlogSectionComponent,
  ExpandableCarouselComponent,
  HomeOurPartnersComponent,
  FlexHoverSliderComponent,
  InfiniteScrollSectionComponent,
  ModulesSectionComponent,
  TestimonialsSectionComponent,
  UltimeAssuranceSectionComponent
];

export const IMPORTS = [
  MainPageRouting,
  SharedModule,
  CarouselModule,
];

export const SERVICES = [];

export const EXPORTS = [];
