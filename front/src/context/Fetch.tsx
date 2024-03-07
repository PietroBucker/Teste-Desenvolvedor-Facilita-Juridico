import {ClienteType} from '../../../back/src/model/ClienteType';


export const apiRequire = async(): Promise<ClienteType[]> =>{
    const response = await fetch("http://0.0.0.0:3001/");
    const data = await response.json();
    return data;
};


export const apiRouteRequire = async(): Promise<ClienteType[]> =>{
    const response = await fetch("http://0.0.0.0:3001/route");
    const data = await response.json();
    return data;
};
