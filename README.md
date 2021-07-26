## Description

[Nest](https://github.com/nestjs/nest) migrations example with TypeORM.

## Installation

```bash
$ npm install
```

## Running the app
Make sure to setup your database environment in `ormconfig.ts`

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running the migrations
To generate migrations run
```bash
npm run typeorm:generate <MigrationName>
```

example:
```bash
npm run typeorm:generate User
```

To run migration
```bash
npm run typeorm:run
```


## License

Nest is [MIT licensed](LICENSE).
