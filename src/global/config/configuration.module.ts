import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './type/database/databaseConfig';
import { validationSchema } from './validation/validationSchema';

@Module({
    imports:[
        ConfigModule.forRoot({
            envFilePath: [`${__dirname}/./env/.${process.env.NODE_ENV}.env`],
            ignoreEnvFile: process.env.NODE_ENV === 'prod',
            load: [databaseConfig],
            isGlobal: true,
            validationSchema: process.env.NODE_ENV === 'dev' ? validationSchema : null
        }),
    ]
})
export class ConfigurationModule {}
