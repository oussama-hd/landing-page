import {
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

export const COMPONENTS = [
  MainPageComponent,
  HeroComponent,
  TwoColumnWithImageComponent,
  FeaturesComponent,
  TestimonialsComponent,
  BlogSectionComponent,
  ExpandableCarouselComponent,
];

export const IMPORTS = [
  MainPageRouting,
  SharedModule
];

export const SERVICES = [];

export const EXPORTS = [];
