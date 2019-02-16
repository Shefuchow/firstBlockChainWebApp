import { Component, Input } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})

export class ItemDetailsComponent {
  @Input()
  item: Item;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private itemService: ItemService) {}

  createItem(item: Item) {
    this.itemService.createItem(item).then((newItem: Item) => {
      this.createHandler(newItem);
    });
  }

  updateItem(item: Item): void {
    this.itemService.updateItem(item).then((updatedItem: Item) => {
      this.updateHandler(updatedItem);
    });
  }

  deleteItem(itemId: String): void {
    this.itemService.deleteItem(itemId).then((deletedItemId: String) => {
      this.deleteHandler(deletedItemId);
    });
  }
}