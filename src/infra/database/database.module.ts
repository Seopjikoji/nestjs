import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseProviders } from './database.providers';

@Module({
    providers:[
        // ...databaseProviders
    ],
    imports:[
        TypeOrmModule.forRoot()
    ]

})
export class DatabaseModule {}
