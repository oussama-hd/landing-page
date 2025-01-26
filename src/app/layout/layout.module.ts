import {NgModule} from '@angular/core';
import {IMPORTS, EXPORTS, SERVICES, COMPONENTS} from './index';
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    ...IMPORTS,
    SharedModule
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
