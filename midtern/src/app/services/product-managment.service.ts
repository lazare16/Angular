import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductManagmentService {
  Products: Product[] = [
    {
      image: 'image1',
      name: 'Gradient Graphic T-shirt',
      price: '$145',
      is_new: true,
      is_discounted: false,
      discount_percentage: null,
    },
    {
      image: 'image2',
      name: 'Polo with Tipping Details',
      price: '$180',
      is_new: true,
      is_discounted: false,
      discount_percentage: null,
    },
    {
      image: 'image3',
      name: 'Black Striped T-shirt',
      price: '$120',
      original_price: '$160',
      is_new: false,
      is_discounted: true,
      discount_percentage: '30%',
    },
    {
      image: 'image4',
      name: 'Skinny Fit Jeans',
      price: '$240',
      original_price: '$260',
      is_new: false,
      is_discounted: true,
      discount_percentage: '20%',
    },
    {
      image: 'image5',
      name: 'Checkered Shirt',
      price: '$180',
      is_new: true,
      is_discounted: false,
      discount_percentage: null,
    },
    {
      image: 'image6',
      name: 'Sleeve Striped T-shirt',
      price: '$130',
      original_price: '$160',
      is_new: false,
      is_discounted: true,
      discount_percentage: '30%',
    },
    {
      image: 'image7',
      name: 'Vertical Striped Shirt',
      price: '$212',
      original_price: '$232',
      is_new: false,
      is_discounted: true,
      discount_percentage: '20%',
    },
    {
      image: 'image8',
      name: 'Courage Graphic T-shirt',
      price: '$145',
      is_new: true,
      is_discounted: false,
      discount_percentage: null,
    },
    {
      image: 'image9',
      name: 'Loose Fit Bermuda Shorts',
      price: '$80',
      is_new: false,
      is_discounted: false,
      discount_percentage: null,
    },
  ];

  getProducts(): Product[] {
    return this.Products;
  }

  deleteProduct(index: number): void {
    this.Products.splice(index, 1);
  }

  addProduct(product: Product): void {
    this.Products.push(product);
  }

  constructor() {}
}
