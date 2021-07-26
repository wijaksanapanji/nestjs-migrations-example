import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'secret',
    database: 'nest_migrations',
    migrations: [__dirname + '/src/migrations/*{.ts,.js}'],
    entities: [__dirname + '/src/**/*.entity.{ts,js}'],
    cli: {
        migrationsDir: '/src/migrations',
    },
};

export default ormconfig;
