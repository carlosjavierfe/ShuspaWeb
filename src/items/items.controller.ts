import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() item: Item): Item {
    console.log('Request body:', item); 
    return this.itemsService.create(item);
  }

  @Get()
  findAll(): Item[] {
    console.log('Request body:', this.itemsService.findAll()); 
    return this.itemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Item {
    console.log(`Fetching item with ID: ${id}`);
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedItem: Item): Item {
    console.log(`Request body: ${id}`);
    return this.itemsService.update(id, updatedItem);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.itemsService.delete(id);
  }
}
