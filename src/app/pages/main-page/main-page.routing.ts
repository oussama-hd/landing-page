import {Routes, RouterModule} from '@angular/router';
import {BlogSectionComponent, MainPageComponent, TestimonialsComponent} from './components';

/*const mainPageRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'landing-page',
        children: [
          {
            path: ':slug',
            component: MainPageComponent
          }
        ]
      }, {
        path: '',
        component: MainPageComponent
      }
    ]
  }
];*/

const mainPageRoutes: Routes = [
  {
    path: '/fd',
    children: [
      {
        path: ':slug',
        children: [
          {
            path: ':type',
            component: MainPageComponent
          },
          {
            path: '',
            component: MainPageComponent
          }
        ]
      }, 
      {
        path: '',
        component: MainPageComponent
      },

    ]
  },      
  { path: 'contact', component: BlogSectionComponent },
];

export const MainPageRouting = RouterModule.forChild(mainPageRoutes);
