import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
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

  searchProducts(query: string): Observable<Product[]> {
    const normalizedQuery = query.trim().toLowerCase();
    const results = this.products.filter((product) =>
      product.name.toLowerCase().includes(normalizedQuery) ||
      product.category.toLowerCase().includes(normalizedQuery)
    );
    return of(results).pipe(delay(300));
  }
}
