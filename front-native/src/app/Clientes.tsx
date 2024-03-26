import { useEffect, useState } from "react";
import { Text, TouchableOpacity, View, TouchableOpacityProps } from "react-native";

import { Header } from "@/components/Header";
import { Loading } from "@/components/Loading";

import { ClienteType } from "../../../back/src/model/ClienteType";
import { apiRequire, apiRouteRequire } from "@/utils/fetch";
import { CardClient } from "@/components/CardClient";
import { Button } from "@/components/Button";
import ModalClientes from "@/components/ModalClientes";
import { useIsFocused } from "@react-navigation/native";


export default function Clientes(...rest: TouchableOpacityProps[]) {
    const [clientes, setClientes] = useState<ClienteType[]>([])
    const [modalVisible, setModalVisible] = useState<boolean>(false)
    const [orderByLocalizacao, setOrderByLocalizacao] = useState<ClienteType[]>([])
    const focused = useIsFocused()
    
    useEffect(() => {
        apiRequire().then(data => setClientes(data))

    }, [focused])

    if (clientes.length === 0) {
        return (<Loading />)
    }

    function requestOrderByLocal() {
        apiRouteRequire().then(data => setOrderByLocalizacao(data))
    }
    return (
        <View className="flex-1">
            <View className="">
                <Header title="Clientes" />
            </View>
            <View className="flex-1">
                {/* <Button title='' href="/" /> */}
                <CardClient clientes={clientes} />
            </View>
            <View className="">
                <ModalClientes isVisible={modalVisible} setVisible={setModalVisible} orderClientes={orderByLocalizacao} />
                <TouchableOpacity
                    className=""
                    onPress={() => {
                        requestOrderByLocal()
                        setModalVisible(true)}}
                >
                    <Text className="bg-blue-500 text-white text-center p-5 mt-10">Localização</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
