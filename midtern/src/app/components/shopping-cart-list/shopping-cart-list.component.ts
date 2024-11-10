import { Component } from '@angular/core';
import { productsInCart } from '../../interfaces/product-in-cart.interface';
import { ProductManagmentService } from '../../services/product-managment.service';
import { NgFor, NgIf} from '@angular/common';
import { ShoppingCartListItemComponent } from '../shopping-cart-list-item/shopping-cart-list-item.component';
@Component({
  selector: 'app-shopping-cart-list',
  standalone: true,
  imports: [NgFor, ShoppingCartListItemComponent, NgIf],
  templateUrl: './shopping-cart-list.component.html',
  styleUrl: './shopping-cart-list.component.scss'
})
export class ShoppingCartListComponent {
  productsInCart: productsInCart[] = [];

  constructor(private productManagmentService: ProductManagmentService) { 
    this.productsInCart = this.productManagmentService.getShoppingCartProducts();
  }

  removeFromCart(product: productsInCart) {
    this.productManagmentService.removeFromCart(product);

    this.productsInCart = this.productManagmentService.getShoppingCartProducts();
  }
  
  
}
