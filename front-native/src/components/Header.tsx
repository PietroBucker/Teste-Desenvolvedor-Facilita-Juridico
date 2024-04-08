import { View, Text, Image } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
type HeaderProps = {
    title: string
}

export function Header({title}: HeaderProps) {

  
  return (

    <SafeAreaView className="border-b-2 border-white rounded-lg items-center justify-center p-5 pt-10 bg-blue-500">
        <Image
            className="w-12 h-12 mb-4"
            source={require('@/../assets/images/favicon.png')} 
        />
        <Text className="text-lg font-bold">{title}</Text>

    </SafeAreaView>
  )
}
