import { View, Text, Image } from "react-native"

type HeaderProps = {
    title: string
}

export function Header({title}: HeaderProps) {
  return (
    <View className="border-b-2 border-white rounded-lg items-center justify-center p-5 pt-10">
        <Image
            className="w-16 h-16 mb-4"
            source={require('../../assets/images/favicon.png')} 
        />
        <Text className="text-lg font-bold">{title}</Text>
    </View>
  )
}
