import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCard } from './product-card';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard] // оскільки він Standalone
    })
      .compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;

    // 💡 Передаємо тестові дані для обов'язкового input перед першим detectChanges
    fixture.componentRef.setInput('product', {
      id: 1,
      name: 'Test Product',
      price: 100
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
