import { Pool } from 'pg';
import { ClienteType } from './ClienteType';

interface connector {
    findAll(): Promise<ClienteType[]>;
}

class ClienteModel implements connector{
    private connection: Pool;
    constructor(connection: Pool) {
        this.connection = connection;
    }

    public async findAll(): Promise<ClienteType[]> {
        const result = await this.connection.query('SELECT * FROM clientes');
        return result.rows;
    }
}

export default ClienteModel;