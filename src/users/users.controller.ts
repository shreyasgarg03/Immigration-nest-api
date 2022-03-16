import { Controller, Get,Post, Put, Delete, Body, Req, Res, Param} from '@nestjs/common';
import {CreateUserDto} from './dto/user.dto'

import {UsersService} from './users.service'
import {User} from './interface/users.interface'

@Controller('users')
export class UsersController {
    constructor(private readonly userServices: UsersService) {}
    @Get()
     findAll(): Promise<User[]> { 
        return  this.userServices.findAll()
    }

    @Get(':id')
     findOne(@Param('id') id): Promise<User> {
        return  this.userServices.findOne(id)
    }

    @Post()
     create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return  this.userServices.createItem(createUserDto)
    }

    @Put(':id')
     update(@Param('id') id , @Body() updateUserDto: CreateUserDto): Promise<User> {
        return  this.userServices.updateItem(id, updateUserDto)
    }

    @Delete(':id')
     delete(@Param('id') id): Promise<User> {
        return  this.userServices.deleteItem(id)
    }
}
