export default {
    type: 'postgres',
    host: 'database',
    port: 5432,
    username: 'admin',
    password: 'password',
    database: 'hotel_crm',
    entities: ['dist/src/entities/*.js'],
    synchronize: true, // Set to false in production, use migrations instead
    logging: true,
  };
  