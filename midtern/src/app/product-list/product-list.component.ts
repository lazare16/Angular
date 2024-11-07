import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { CardItem } from '../interfaces/cardItem.interface';
import { ProductManagmentService } from '../services/product-managment.service';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CardComponent, NgFor],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  cardItems:  CardItem[];

  constructor(productManagmentService: ProductManagmentService) { 
    this.cardItems = productManagmentService.CardItems;
  }

}
