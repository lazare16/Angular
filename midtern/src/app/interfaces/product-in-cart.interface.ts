import { Product } from './product.interface';

export interface productsInCart extends Product {
  quantity: number;
}