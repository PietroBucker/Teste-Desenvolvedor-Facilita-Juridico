import { Link, LinkProps } from 'expo-router'
import React from 'react'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'

type ButtonProps = LinkProps<string> & {
    title: string

}

export function Button({title, ...rest}:ButtonProps) {
    return (
        <Link {...rest}className='bg-slate-50 items-center justify-center w-24 rounded-md mx-2 my-2 p-2 self-end text-center'>
            {/* <TouchableOpacity className='bg-slate-50 items-center justify-center w-24 rounded-md mx-2 my-2 p-2 self-end'> */}
                {title 
                    ? <Text>{title}</Text>
                    : <FontAwesome name='angle-left' size={20} color='black' />
                }
            {/* </TouchableOpacity> */}
        </Link>
    )
}
