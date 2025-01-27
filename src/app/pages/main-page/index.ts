import {
  AboutHistoryAreaComponent,
  BlogSectionComponent,
  // CountriesPlacesScrollComponent,
  ExpandableCarouselComponent,
  FeaturesComponent,
  FlexHoverSliderComponent,
  HeroComponent,
  InfiniteScrollSectionComponent,
  MainPageComponent,
  TestimonialsComponent,
  TwoColumnWithImageComponent
} from './components';
import {MainPageRouting} from './main-page.routing';
import {SharedModule} from '../../shared/shared.module';
import { HomeOurPartnersComponent } from './components/home-our-partrners/home-our-partrners.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ModulesSectionComponent } from './components/modules-section/modules-section.component';
import { ModuleCardComponent } from '../../shared/components/module-card/module-card.component';
import { TitleComponent } from '../../shared/components/title/title.component';

export const COMPONENTS = [
  MainPageComponent,
  HeroComponent,
  TwoColumnWithImageComponent,
  FeaturesComponent,
  TestimonialsComponent,
  BlogSectionComponent,
  ExpandableCarouselComponent,
  HomeOurPartnersComponent,
  AboutHistoryAreaComponent,
  FlexHoverSliderComponent,
  InfiniteScrollSectionComponent,
  ModulesSectionComponent,

];

export const IMPORTS = [
  MainPageRouting,
  SharedModule,
  CarouselModule,
];

export const SERVICES = [];

export const EXPORTS = [];
