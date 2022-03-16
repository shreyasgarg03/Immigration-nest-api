import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

// services
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import {UniversitiesModule} from './universities/universities.module'
import {MONGO_URI} from './config/keys'


@Module({
  imports: [MongooseModule.forRoot(MONGO_URI),ItemsModule,UsersModule, UniversitiesModule ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
