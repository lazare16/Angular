import { Component, Input} from '@angular/core';
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

  getImagePath(image: string): string {
    const imagePath = `assets/${image}.png`;
    return imagePath;
  }
}
