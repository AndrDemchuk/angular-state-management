import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductCard } from './product-card';
import { By } from '@angular/platform-browser';

describe('ProductCard', () => {
  let component: ProductCard;
  let fixture: ComponentFixture<ProductCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductCard]
    }).compileComponents();

    fixture = TestBed.createComponent(ProductCard);
    component = fixture.componentInstance;

    // 💡 Передаємо тестові дані для обов'язкового input перед першим detectChanges
    fixture.componentRef.setInput('product', {
      "id": 1,
      "name": "Product 1",
      "category": "Wireless Headphones",
      "price": 100
    });

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the product name', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const heading = compiled.querySelector('h3');
    expect(heading?.textContent).toContain('Product 1');

  })

  it('should render the product price', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const priceElement = compiled.querySelector('.product-price');
    expect(priceElement?.textContent).toContain('100');
  })


/*   it('should show details after clicking the button', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button') as HTMLButtonElement;

    // Створюємо і диспачимо подію кліку через браузерний API
    button.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    const details = compiled.querySelector('.product-details');
    expect(details).toBeTruthy();
    expect(details?.textContent).toContain('Wireless Headphones');
  }); */

})
