import { ScrollView, Text, View } from "react-native";
import { ClienteType } from "../../../back/src/model/ClienteType";

type CardClientProps = {
    clientes: ClienteType[]
    
}

export function CardClient({ clientes }: CardClientProps) {
    return (
        
        <ScrollView
            scrollEnabled={true}
            className=""
        >
            <View className="px-4 mt-10">
                <View className="flex-row border rounded-t-md">
                    <Text className=" text-white w-1/6  font-bold border-r text-center">Nome</Text>
                    <Text className=" text-white w-1/2  font-bold border-r text-center">Email</Text>
                    <Text className=" text-white w-1/4  font-bold border-r text-center">Telefone</Text>
                    <Text className=" text-white w-1/12 font-bold text-center">End</Text>

                </View>
                {clientes.map((cliente, index) => (

                    <View key={index} className="flex-row border rounded-b-md">
                        <Text className=" text-white w-1/6 border-r text-justify pl-2 py-2">{cliente.nome}</Text>
                        <Text className=" text-white w-1/2 border-r text-justify pl-6 py-2">{cliente.email}</Text>
                        <Text className=" text-white w-1/4 border-r text-justify pl-2 py-2">{cliente.telefone}</Text>
                        <Text className=" text-white w-1/12 px-1 py-2">{cliente.localizacao.x},{cliente.localizacao.y}</Text>
                    </View>
                ))}
            </View>
            
        </ScrollView>

    )
}
