import { Component, inject } from '@angular/core';
import { ProductStore } from '../../store/product.store';

@Component({
  selector: 'app-product-summary',
  imports: [],
  templateUrl: './product-summary.html',
  styleUrl: './product-summary.css',
})
export class ProductSummary {
  protected productStore = inject(ProductStore);

  protected readonly productCount = this.productStore.productCount;
  protected readonly selectedProduct = this.productStore.selectedProduct;
}
