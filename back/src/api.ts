import express, {Response, Request} from 'express';
import connection from './db/connection';
import ClienteModel from './model/ClienteModel';
import ClienteService from './service/ClienteService';
import cors from 'cors';

const model = new ClienteModel(connection);
const service = new ClienteService(model);

const corsConfig = {
    origin: ['http://localhost:3000', 'exp://192.168.10.114:8081', 'http://192.168.10.114:8081', 'http://localhost:8081'],
    trusy: true
}
const api = express();

api.use(express.json());
api.use(cors())

api.get('/', async (req: Request, res: Response): Promise<Response> => {
    try{
        const response = await service.findAll();
        
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
});

api.get('/route', async (req: Request, res: Response): Promise<Response> => {
    try{
        const response = await service.findRoute();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
})

api.post('/cadastro', async (req: Request, res: Response): Promise<Response> => {
    try{
        const response = await service.insert(req.body);
        return res.status(201).json(response);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
})
export default api;
