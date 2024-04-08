import { Header } from "@/components/Header"
import { View } from "react-native"


import Cadastro from "@/components/Cadastro"


export default function Home() {

    
  return (
    <View className="flex-1">
      <Header title="Cadastro" />
  
      {/* <Button title='Clientes' href="./Clientes" /> */}

      <Cadastro />

    </View>
  )
}
