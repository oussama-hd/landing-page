import {NgModule} from '@angular/core';
import {IMPORTS, EXPORTS, SERVICES, COMPONENTS} from './index';
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  imports: [
    ...IMPORTS
],
  declarations: [
    ...COMPONENTS
  ],
  providers: [
    ...SERVICES
  ],
  exports: [
    ...EXPORTS
  ]
})
export class LayoutModule {
}
