import { TestBed } from "@angular/core/testing";
import { ProductStore } from "./product.store";

describe('ProductStore', () => {
  let store: InstanceType<typeof ProductStore>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductStore]
    });

    store = TestBed.inject(ProductStore);
  });

  it('should start with an empty product collection', () => {
    expect(store.products()).toEqual([]);
    expect(store.productCount()).toBe(0)
  })

  it('should update products and product count', () => {
    store.setProducts([
      {
        "id": 1,
        "name": "Product 1",
        "category": "Wireless Headphones",
        "price": 100
      },
      {
        "id": 2,
        "name": "Product 2",
        "category": "Mechanical Keyboard",
        "price": 200
      },
      {
        "id": 3,
        "name": "Product 3",
        "category": "4K Ultra Full HD Monitor",
        "price": 300
      }
    ]);

    expect(store.products().length).toBe(3);
    expect(store.productCount()).toBe(3);
  });
});
