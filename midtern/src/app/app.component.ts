import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
import { ShoppingCartListComponent } from './components/shopping-cart-list/shopping-cart-list.component';
import { ProductListComponent } from './components/product-list/product-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ShoppingCartListComponent, ProductListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'midtern';
}
