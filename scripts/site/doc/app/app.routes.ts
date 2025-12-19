import { Routes } from '@angular/router';

import { DEMO_ROUTES } from './router';
import { ConfiguratorDemoComponent } from '../../serviceant-package/demo/configurator-demo.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/docs/introduce/en' },
  { path: 'serviceant-demo', component: ConfiguratorDemoComponent },
  { path: 'serviceant-demo/en', component: ConfiguratorDemoComponent },
  ...DEMO_ROUTES,
  { path: 'docs', loadChildren: () => import('./docs/routes') },
  {
    path: 'components/overview',
    loadChildren: () => import('./components-overview/routes')
  },
  {
    path: 'components/changelog',
    loadChildren: () => import('./changelog/routes')
  },
  { path: '**', redirectTo: '/docs/introduce/en', pathMatch: 'full' }
];
