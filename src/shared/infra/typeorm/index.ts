import { DataSource } from 'typeorm';

const database = process.env.NODE_ENV === 'test'
  ? 'datashow_test'
  : 'datashow';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'datashow_db',
  port: 5432,
  username: 'datashow',
  password: 'datashowpass',
  database,
  migrations: ['./src/shared/infra/typeorm/migrations/*.ts'],
  entities: ['./src/modules/**/entities/*.ts'],
});

async function createConnection(showSuccessLog = true) {
  await dataSource.initialize()
    .then(() => {
      if (showSuccessLog) {
        console.log('Database connection has been initialized!');
      }
    })
    .catch((err) => {
      console.error('Error during Database initialization', err);
    });
}

export { dataSource, createConnection };
