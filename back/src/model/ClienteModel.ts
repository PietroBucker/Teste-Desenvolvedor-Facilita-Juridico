import { Pool } from 'pg';
import { ClienteType } from './ClienteType';

interface connector {
    findAll(): Promise<ClienteType[]>;
    insert(cliente: ClienteType): Promise<ClienteType | string>;
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

    public async insert(cliente: ClienteType): Promise<ClienteType | string> {
        console.log(cliente);
        const result = await this.connection.query(
            'INSERT INTO clientes (nome, email, telefone, localizacao) VALUES ($1, $2, $3, $4)', 
            [cliente.nome, cliente.email, cliente.telefone, `(${cliente.localizacao.x}, ${cliente.localizacao.y})`]);
        if (result.rowCount != null) {
            return cliente;
        }
        return 'erro'
    }

    // public async findAllLocalizacoes(): Promise<{x: number, y: number}[]> {
    //     const result = await this.connection.query('SELECT localizacao FROM clientes');
    //     return result.rows;
    // }
}

export default ClienteModel;