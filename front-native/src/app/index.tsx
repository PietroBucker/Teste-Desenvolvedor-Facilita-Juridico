import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator, BottomTabBarProps } from '@react-navigation/bottom-tabs'
import Home from './Home'
import Clientes from './Clientes'


const Tab = createBottomTabNavigator()

export default function App() {
    return (
        
        <Tab.Navigator initialRouteName='Home' sceneContainerStyle={{backgroundColor:'rgb(100 116 139)'}}>
            <Tab.Screen name="Home" component={Home} options={{headerShown: false}}/>
            <Tab.Screen name="Clientes" component={Clientes} options={{headerShown: false}} />
        </Tab.Navigator>
    )
}
