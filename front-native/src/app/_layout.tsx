import { Stack } from 'expo-router'
import React from 'react'

export default function Applayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
        <Stack.Screen name='index' />
    </Stack>
  )
}
