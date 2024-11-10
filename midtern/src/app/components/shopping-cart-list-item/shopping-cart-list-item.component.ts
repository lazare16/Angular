import { Component, Input, Output, EventEmitter} from '@angular/core';
import { productsInCart } from '../../interfaces/product-in-cart.interface';

@Component({
  selector: 'app-shopping-cart-list-item',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart-list-item.component.html',
  styleUrl: './shopping-cart-list-item.component.scss'
})
export class ShoppingCartListItemComponent {
  @Input() productInCart!: productsInCart;
  @Output() removeFromCartEvent = new EventEmitter<productsInCart>();
  @Output() increaseQuantityEvent = new EventEmitter<productsInCart>();
  @Output() decreaseQuantityEvent = new EventEmitter<productsInCart>();

  getImagePath(image: string): string {
    const imagePath = `assets/${image}.png`;
    return imagePath;
  }

  onRemoveFromCart() {
    this.removeFromCartEvent.emit(this.productInCart);
  }
  
  onIncreaseQuantity() {
    this.increaseQuantityEvent.emit(this.productInCart);
  }

  onDecreaseQuantity() {
    this.decreaseQuantityEvent.emit(this.productInCart);
  }
}
