import { Button } from "@/components/Button"
import { Header } from "@/components/Header"
import { View, Text } from "react-native"
import { Link } from "expo-router"
import Cadastro from "@/components/Cadastro"
export default function Home() {
  return (
    <View className="flex-1">
      <Header title="Cadastro" />
      
      <Button title='Clientes' />

      <Cadastro />

    </View>
  )
}
