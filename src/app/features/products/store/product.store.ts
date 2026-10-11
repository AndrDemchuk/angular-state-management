import { computed } from '@angular/core';
import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { Product } from '../models/product';

type ProductState = {
  products: Product[];
  selectedProductId: number | null;
};

const items = ['apple', 'banana', 'orange', 'strawberry', 'blueberry'];

const initialState: ProductState = {
  products: [],
  selectedProductId: null,
};

export const ProductStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),

  withComputed((store) => ({
    productCount: computed(() => store.products().length),
    selectedProduct: computed(() =>
      store.products()
        .filter((product) => product.id === store.selectedProductId())
        .find((product) => product.id === store.selectedProductId()) ?? null,
    ),
  })),

  withMethods((store) => ({
    setProducts(products: Product[]): void {
      patchState(store, { products });
    },


    selectProduct(productId: number): void {
      patchState(store, { selectedProductId: productId });
    },

    clearSelection(): void {
      patchState(store, { selectedProductId: null });
    }
  }))
);
