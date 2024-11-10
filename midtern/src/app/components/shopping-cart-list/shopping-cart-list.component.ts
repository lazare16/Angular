import { Component } from '@angular/core';
import { productsInCart } from '../../interfaces/product-in-cart.interface';
import { ProductManagmentService } from '../../services/product-managment.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-shopping-cart-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './shopping-cart-list.component.html',
  styleUrl: './shopping-cart-list.component.scss'
})
export class ShoppingCartListComponent {
  productsInCart: productsInCart[] = [];

  constructor(private productManagmentService: ProductManagmentService) { 
    this.productsInCart = this.productManagmentService.getShoppingCartProducts();
  }
}
