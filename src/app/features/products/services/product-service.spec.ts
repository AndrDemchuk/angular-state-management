import { TestBed } from '@angular/core/testing';

import { ProductService } from './product-service';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';

describe('ProductService', () => {
  let service: ProductService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });

    service = TestBed.inject(ProductService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTesting.verify();
  });

  it('should filter products using the search query', () => {
    const mockProducts = [
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
      }];

    service.searchProducts('headphones').subscribe((products) => {
      expect(products.length).toBe(1);
      expect(products[0].category).toBe('Wireless Headphones');
    });

    const request = httpTesting.expectOne('http://localhost:3000/products');

    request.flush(mockProducts);
  })

});
