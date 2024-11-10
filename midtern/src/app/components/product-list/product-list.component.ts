import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductManagmentService } from '../../services/product-managment.service';
import { ProductCardComponent } from '../product-card/product-card.component';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  products: Product[] = [];

 

  constructor(private productManagmentService: ProductManagmentService) {
    this.products = this.productManagmentService.getProducts();
  }

  addToCart(product: Product) {
    const productInCart = { ...product, quantity: 1 };
    this.productManagmentService.addToCart(productInCart);
  }
}
