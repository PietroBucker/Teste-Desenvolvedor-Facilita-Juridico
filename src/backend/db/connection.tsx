import { Pool } from 'pg';

const connection = new Pool({
    user: 'localhost',
    host: 'localhost',
    password: 'postgres',
    port: 5432,
    database: 'postgres',
});

export default connection;