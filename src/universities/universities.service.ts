import { Injectable } from '@nestjs/common';
import {University} from './interface/university.interface'
import {Model} from 'mongoose'
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class UniversitiesServices {
    constructor(@InjectModel('Universities') private readonly universityModel: Model<University>) {}

    async findAll(): Promise<University[]> {
        return await this.universityModel.find()
    }

    async findOne(id): Promise<University> {
        return await this.universityModel.findOne({_id:id})
    }

    async createUniversity(university): Promise<University> {
        return await this.universityModel.create(university)
    }

    async updateUniversity(id: string, university: University): Promise<University> {
        return await this.universityModel.findByIdAndUpdate(id, university, {
            new: true,
        })
    }

    async deleteUniversity(id): Promise<University> {
        return await this.universityModel.findByIdAndRemove(id)
    }
}


