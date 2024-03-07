import express, {Response, Request} from 'express';
import connection from './db/connection';
import ClienteModel from './model/ClienteModel';
import cors from 'cors';

const model = new ClienteModel(connection);

const corsConfig = {
    origin: 'http://localhost:3000',
}
const api = express();

api.use(express.json());
api.use(cors())

api.get('/', async (req: Request, res: Response): Promise<Response> => {
    try{
        const response = await model.findAll();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
});

export default api;