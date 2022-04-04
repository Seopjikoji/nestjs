import { createConnection } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async () => await createConnection({
            type: `mysql`,
            host: "localhost",
            port: +process.env.DATABASE_PORT,
            username: process.env.DATABASE_USERNAME,
            password: process.env.DATABASE_PASSWORD,
            database: process.env.DATABASE_NAME,
            // entities: [User],
            // entities: [__dirname + '../../domain/**/entities/*.entity{.ts,.js}'],
            // entities: [__dirname + '../../domain/**/*.entity{.ts,.js}'],
            entities: [__dirname + '/../../**/*.entity{.ts,.js}'],
            // migrations: [__dirname + '/../../**/*.entity{.ts,.js}'],
            // migrationsTableName: "custom_migration_table",
            synchronize: false,

        }),
    },
];