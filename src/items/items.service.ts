import { Injectable } from '@nestjs/common';
import { Item } from './item.entity';

@Injectable()
export class ItemsService {
  private items: Item[] = [];

  create(item: Item): Item {
    item.id = this.items.length + 1; // Generar ID único
    this.items.push(item);
    return item;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item {
    return this.items.find(item => item.id === id);
  }

  update(id: number, updatedItem: Item): Item {
    const index = this.items.findIndex(item => item.id === id);
    if (index !== -1) {
      this.items[index] = { ...this.items[index], ...updatedItem };
      return this.items[index];
    }
    return null;
  }

  delete(id: number): void {
    this.items = this.items.filter(item => item.id !== id);
  }
}