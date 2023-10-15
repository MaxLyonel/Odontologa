
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";
import { DataSourceOptions } from "typeorm";
import { SeederOptions } from "typeorm-extension";
// import InitSeeder  from 'dist/database/seeds/init.seeder'
// import  InitSeeder  from 'database/seeds/init.seeder'

ConfigModule.forRoot({
    envFilePath: '.env'
});

const options = {
    type: 'postgres',
    host: process.env.DATABASE_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    synchronize: false,
    migrationsRun: true,
    autoLoadEntities: true,
    // entities: [__dirname + '/../../**/*.entity.{js,ts}'],
    entities: ['dist/**/*.entity.{js,ts}'],
    migrationsTableName: 'migrations',
    // migrations: [__dirname + '/../migrations/*.ts'],
    migrations: ['dist/**/migrations/*.js'],
    // seeds: [InitSeeder],
    seeds: ['dist/**/init.seeder.js'],
    // factories: [__dirname + '/../**/*.factory.ts']
    factories: ['dist/**/*.factory.{js,ts}']
};

const dataSource = new DataSource(
    options as DataSourceOptions & SeederOptions
);

dataSource.initialize()
.then(() => {
    console.log("Base de datos inicializada")
})
.catch((err) => {
    console.error("Base de dato no inicialidada", err)
})

export default dataSource;