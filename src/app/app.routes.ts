import { Routes } from '@angular/router';
import { LayaoutComponent } from '@shared/components/layaout/layaout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayaoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./domains/products/pages/list/list.component'),
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./domains/info/pages/about/about.component'),
      },
      {
        path: 'product/create',
        loadComponent: () =>
          import(
            './domains/products/pages/create-product/create-product.component'
          ),
      },
      {
        path: 'product/:id',
        loadComponent: () =>
          import(
            './domains/products/pages/product-detail/product-detail.component'
          ),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () =>
      import('./domains/info/pages/not-found/not-found.component'),
  },
];
