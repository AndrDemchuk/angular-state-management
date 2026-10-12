import { Routes } from '@angular/router';
import { ProductList } from './features/products/components/product-list/product-list';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import(
      './features/products/components/product-list/product-list'
    ).then(m => m.ProductList)
  }
];
