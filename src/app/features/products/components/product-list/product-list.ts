import { Component } from '@angular/core';
import { Product } from '../../models/product';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  protected readonly products: Product[] = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Wireless Headphones',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Mechanical Keyboard',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      category: '4K Monitor',
      price: 300,
    },
  ];

  protected handleProductSelection(productId: number): void {
    console.log('Selected product:', productId);
  }

}
