import { useIsFocused } from '@react-navigation/native';
import { useRouter } from 'expo-router'
import React, { useEffect, useRef } from 'react'
import { Text} from 'react-native'
import { Animated } from 'react-native';


export default function index() {
    const fadeAnim = useRef(new Animated.Value(0)).current;
    const useFocused = useIsFocused()
    const router = useRouter();
    
    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 4000,
            useNativeDriver: true
        }).start(() => router.push('/Home/'));
        
        if(!useFocused){
            fadeAnim.resetAnimation();
        }

    }, [useFocused]);
    

    
    // clearTimeout(teste);

    

    return (
        // <Link href='/Home/' className='flex-1 justify-center items-center bg-slate-400' asChild>
        //     <TouchableHighlight >


        //         <Text>Bem Vindo!</Text>


        //     </TouchableHighlight>
        // </Link>
    <Animated.View className='flex-1 justify-center items-center bg-slate-400'
        style={{opacity: fadeAnim}}
        
    >
        <Text className='text-2xl'>Bem Vindo!</Text>
    </Animated.View>
    )
}
