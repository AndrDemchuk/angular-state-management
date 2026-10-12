import { Component, input, output, signal } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  readonly product = input.required<Product>();
  readonly productSelected = output<number>();


  protected selectProduct(): void {
    this.productSelected.emit(this.product().id);
  }

  protected detailsVisible = signal(false);
  protected toggleDetails(): void {
    this.detailsVisible.update(toggle => !toggle);
  }
}
