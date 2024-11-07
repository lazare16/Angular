import { Component, Input } from '@angular/core';
import { CardItem } from '../interfaces/cardItem.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input() cardItem!: CardItem;

  constructor() {}

}
