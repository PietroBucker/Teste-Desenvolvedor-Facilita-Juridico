import pg from 'pg';
const { Pool } = pg;

const connection = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'postgres',
    database: 'api_facilita',
    port: 5432,
});

export default connection;