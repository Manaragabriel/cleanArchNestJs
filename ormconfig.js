module.exports = {
  type: 'mysql',
  host: 'localhosttttt',
  port: 3306,
  username: 'user',
  password: 'user',
  database: 'clean_arch_nestjs_database',
  synchronize: true,
  logging: false,
  migrationTableName: 'migrations',
  entities: ['dist/**/*.entity.ts'],
  migrations: ['src/infrastructure/database/migrations/**/*.{ts,js}'],

  cli: {
    entitiesDir: 'src/infrastructure/models',
    migrationDir: 'src/infrastructure/migration',
  },
};
