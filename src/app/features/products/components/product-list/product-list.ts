import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, startWith, switchMap } from 'rxjs';
import { ProductService } from '../../services/product-service';
import { ProductCard } from '../product-card/product-card';

@Component({
  selector: 'app-product-list',
  imports: [ProductCard, ReactiveFormsModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  private readonly productService = inject(ProductService);
  protected readonly searchControl = new FormControl('', { nonNullable: true });

  protected handleProductSelection(productId: number): void {
    console.log('Selected product:', productId);
  }

  protected readonly products$ = this.searchControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((query) => this.productService.searchProducts(query))
  );

  protected readonly products = toSignal(
    this.products$,
    {
      initialValue: []

    }
  );
}
