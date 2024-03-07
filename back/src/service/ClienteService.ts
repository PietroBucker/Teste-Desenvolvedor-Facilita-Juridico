import ClienteModel from "../model/ClienteModel";
import { ClienteType } from "../model/ClienteType";
import calcularCaminhoMaisCurto from "./helper";

class ClienteService {
    private model: ClienteModel;

    constructor(model: ClienteModel) {
        this.model = model;
    }

    public async findRoute(){
        const allRoutes = await this.model.findAll();
        const route = calcularCaminhoMaisCurto(allRoutes);
        return route;
    }

    public async findAll() {
        return await this.model.findAll();
    }

    public async insert(cliente: ClienteType){
        return await this.model.insert(cliente);
    }
}

export default ClienteService;