import { Controller, Get,Post, Put, Delete, Body, Param} from '@nestjs/common';
import {CreateUniversityDto} from './dto/university-dto'

import {UniversitiesServices} from './universities.service'
import {University} from './interface/university.interface'

@Controller('items')
export class UniversitiesController {
    constructor(private readonly universitiesService: UniversitiesServices) {}
    @Get()
     findAll(): Promise<University[]> { 
        return  this.universitiesService.findAll()
    }

    @Get(':id')
     findOne(@Param('id') id): Promise<University> {
        return  this.universitiesService.findOne(id)
    }

    @Post()
     create(@Body() createUniversityDto: CreateUniversityDto): Promise<University> {
        return  this.universitiesService.createUniversity(createUniversityDto)
    }

    @Put(':id')
     update(@Param('id') id , @Body() updateUniversityDto: CreateUniversityDto): Promise<University> {
        return  this.universitiesService.updateUniversity(id, updateUniversityDto)
    }

    @Delete(':id')
     delete(@Param('id') id): Promise<University> {
        return  this.universitiesService.deleteUniversity(id)
    }
}
