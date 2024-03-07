import ClienteModel from "../model/ClienteModel";
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

}

export default ClienteService;