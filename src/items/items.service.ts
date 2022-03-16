import { Injectable } from '@nestjs/common';
import {Item} from './interfaces/item.interface'
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class ItemsService {
    constructor(@InjectModel('Item') private readonly itemModel: Model<Item>) {}

    async findAll(): Promise<Item[]> {
        return await this.itemModel.find()
    }

    async findOne(id): Promise<Item> {
        return await this.itemModel.findOne({_id:id})
    }

    async createItem(item): Promise<Item> {
        return await this.itemModel.create(item)
    }

    async updateItem(id: string, item: Item): Promise<Item> {
        return await this.itemModel.findByIdAndUpdate(id, item, {
            new: true,
        })
    }

    async deleteItem(id): Promise<Item> {
        return await this.itemModel.findByIdAndRemove(id)
    }
}


