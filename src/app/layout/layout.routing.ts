import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './components';
import {BlogSectionComponent, MainPageComponent} from "../pages/main-page/components";

const layoutRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainPageComponent
      },
      { 
        path: 'contact', 
        component: BlogSectionComponent 
      },
      {
        path: 'landing-page',
        loadChildren: () => import('../pages/main-page/main-page.module').then(x => x.MainPageModule),
      }
    ]
  }
];
export const layoutRouting = RouterModule.forChild(layoutRoutes);
