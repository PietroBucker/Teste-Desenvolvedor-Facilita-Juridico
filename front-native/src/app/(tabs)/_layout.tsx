// Arquivo _layout.tsx criado usando slot e SafeAreaView

// import React from 'react';
// import { SafeAreaView } from 'react-native';
// import { Slot } from 'expo-router';



// export default function Layout() {
//     return (
//         <SafeAreaView className='flex-1 bg-slate-500'>
//             <Slot />
//         </SafeAreaView>
//     )
// }

// O arquivo Index seria criado com o codigo abaixo usando o bottom tab navigator

// import React from 'react'
// import { NavigationContainer } from '@react-navigation/native' <- nao houve necessidade de usar
// import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
// import Home from './Home'
// import Clientes from './Clientes'


// const Tab = createBottomTabNavigator()

// export default function App() {
//     return (

//         <Tab.Navigator initialRouteName='Home' sceneContainerStyle={{backgroundColor:'rgb(100 116 139)'}}>
//             <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
//             <Tab.Screen name="Clientes" component={Clientes} options={{headerShown: false}} />
//         </Tab.Navigator>
//     )
// }

// Abixo layout criado para uso do (tabs)


import { Tabs } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import { View } from "react-native";
export default function TabLayout() {
    return (
        <View className=" bg-slate-500 flex-1">

            <Tabs initialRouteName="Home/index" sceneContainerStyle={{ backgroundColor: 'transparent' }} screenOptions={{ tabBarShowLabel: false, headerShown: false }}>
                <Tabs.Screen
                    name="Home/index"
                    options={{
                        title: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <FontAwesome name='home' size={size} color={color} />
                        )
                    }}

                />
                <Tabs.Screen name="Clientes" options={{
                    title: 'Clientes', tabBarIcon: ({ color, size }) => (
                        <FontAwesome name='user' size={size} color={color} />
                    )
                }} />
            </Tabs>
        </View>
    )
}