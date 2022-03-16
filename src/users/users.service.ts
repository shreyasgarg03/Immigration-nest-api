import { Injectable } from '@nestjs/common';
import {User} from './interface/users.interface'
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UsersService {
    constructor(@InjectModel('Users') private readonly userModel: Model<User>) {}

    async findAll(): Promise<User[]> {
        return await this.userModel.find()
    }

    async findOne(id): Promise<User> {
        return await this.userModel.findOne({_id:id})
    }

    async createItem(user): Promise<User> {
        const user_exists = await this.userModel.findOne({email: user.email})
        if(user_exists) {
            throw new Error('User Already Exists. Please Login Instead')
        }
        return await this.userModel.create(user)
    }

    async updateItem(id: string, user:User): Promise<User> {
        return await this.userModel.findByIdAndUpdate(id, user, {
            new: true,
        })
    }

    async deleteItem(id): Promise<User> {
        const user_exists = await this.userModel.findOne({_id: id})
        if(!user_exists) {
            //@todo return a valid error response.
            throw new Error('User Does Not Exist.')
        }
        return await this.userModel.findByIdAndRemove(id)
    }
}


