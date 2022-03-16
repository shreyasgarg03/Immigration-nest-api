import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UniversitiesController } from './universities.controller';
import { UniversitiesServices } from './universities.service';
import { UniversitySchema } from './schemas/university.schema'; 

@Module({
  imports: [MongooseModule.forFeature([{name: 'Universities', schema: UniversitySchema}])],
  controllers: [ UniversitiesController],
  providers: [UniversitiesServices],
})
export class UniversitiesModule {}
