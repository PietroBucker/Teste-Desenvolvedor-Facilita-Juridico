import {ClienteType} from '../../../back/src/model/ClienteType';


export const apiRequire = async(): Promise<ClienteType[]> =>{
    try{

        const response = await fetch("http://192.168.10.114:3001/");
        const data = await response.json();

        return data;
    }
    catch(e){
        console.log(e);
        return [];
    }
};


export const apiRouteRequire = async(): Promise<ClienteType[]> =>{
    const response = await fetch("http://192.168.10.114:3001/route");
    const data = await response.json();
    return data;
};