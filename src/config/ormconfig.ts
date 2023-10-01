
import { ConfigModule } from "@nestjs/config";
import { DataSource } from "typeorm";
import { DataSourceOptions } from "typeorm";
// Es una configuracion de fuente de datos que se pasa a una
// nueva instancia DataSource

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
    entities: [__dirname + '../../**/*.entity.ts'],
    migrationsTableName: 'migrations',
    migrations: [__dirname + '/../migrations/*.ts']
};

const dataSource = new DataSource(
    options as DataSourceOptions
);

dataSource.initialize()
.then(() => {
    console.log("Base de datos inicializada")
})
.catch((err) => {
    console.error("Base de dato no inicialidada", err)
})

export default dataSource;