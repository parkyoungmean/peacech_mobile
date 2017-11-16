import { Component, Input } from '@angular/core';
import { Item } from '../../app/model/Item';
// /Users/PYM/peace-wp-client/src/app/model/Item.ts
// /Users/PYM/peace-wp-client/src/components/item/item.ts
/**
 * Generated class for the ItemComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'item',
  templateUrl: 'item.html'
})
export class ItemComponent {
  @Input() item: Item;
  text: string;

  constructor() {
    console.log('Hello ItemComponent Component');
    this.text = 'Hello World';
  }

}
