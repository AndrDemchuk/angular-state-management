import { inject, Injectable } from '@angular/core';
import { Product } from '../models/product';
import { delay, map, Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'http://localhost:3000/products';

  searchProducts(query: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl).pipe(
      map(products => {
        const normalizedQuery = query.trim().toLowerCase();
        return products.filter(product => product.name.toLowerCase().includes(normalizedQuery)
          || product.category.toLowerCase().includes(normalizedQuery));
      })
    )

  }

  /*   protected readonly products: Product[] = [
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
    } */
}
