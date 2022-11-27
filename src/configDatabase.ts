import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'user',
  database: 'clean_arch_nestjs_database',
  entities: [],
  migrations: ['src/infrastructure/database/migrations/**.{ts,js}'],
  migrationsTableName: 'migrations_history',
});
export default dataSource
