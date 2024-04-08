import React, { useReducer, useState } from 'react'
import { Alert, ScrollView, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { ClienteType } from '../../../back/src/model/ClienteType'
import { useForm } from 'react-hook-form'
type CadastroProps = TextInputProps & {
  cliente: ClienteType
}

const initialState = {
  nome: '',
  email: '',
  telefone: '',
  localizacao: {
    x: 0,
    y: 0
  }

}

export default function Cadastro({ ...rest }: TextInputProps) {
  // <----- codigo sem hook form ----->
  // const [cliente, setCliente] = useState<ClienteType>(initialState)
  // const onSubmit = (data: any) => {
    //   console.log(data)
    // }
  
  // function onChange(text: string, key: string) {
  //   setCliente({ ...cliente, [key]: text })
  
  // }

  // function onChangeLocalizacao(value: string, key: 'x' | 'y') {
    //   setCliente({ ...cliente, localizacao: { ...cliente.localizacao, [key]: Number(value) } })
    
    // }

  // <----- codigo com hook form ----->

  const { register, handleSubmit, setValue } = useForm<ClienteType>()

  async function cadastrarCliente(data: any) {
    console.log(data);
    
    try {

      const response = await fetch('http://192.168.10.114:3001/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (response.ok) {
        Alert.alert('Cliente cadastrado com sucesso!')
      }
      else {
        Alert.alert('Erro ao cadastrar cliente!')
      }
    } catch (e) {
      alert('Ocorreu um erro')
      console.log(e)

    }
  }
  return (
        
        <ScrollView className='flex-1 m-10' showsVerticalScrollIndicator={false}>
        <TextInput
          onChangeText={(text) => setValue('nome', text)}
          placeholder='Digite o Nome'
          keyboardType='default'
          className='bg-white border-2 border-blue-500 rounded-md p-2 w-full mb-10'
          {...register('nome', { required: true })}

        />
        <TextInput
          onChangeText={(text) => setValue('email', text)}
          placeholder='Digite o Email'
          keyboardType='default'
          className='bg-white border-2 border-blue-500 rounded-md p-2 w-full mb-10'
          {...register('email', { required: true })}
        />
        <TextInput
          onChangeText={(text) => setValue('telefone', text)}
          placeholder='Digite o Telefone'
          keyboardType='default'
          className='bg-white border-2 border-blue-500 rounded-md p-2 w-full mb-10'
          {...register('telefone', { required: true })}
        />
        <View className='flex-row'>

          <TextInput
            onChangeText={(value) => setValue(`localizacao.x`, Number(value))}
            placeholder='Digite o X-Localização'
            keyboardType='decimal-pad'
            // value={cliente.localizacao.x != 0 ? cliente.localizacao.x.toString() : ''}
            className='bg-white border-2 border-blue-500 rounded-md p-2 w-2/5 m-auto mb-10'
            {...register('localizacao.x', { required: true })}
          />
          <TextInput
            onChangeText={(value) => setValue('localizacao.y', Number(value))}
            placeholder='Digite o Y-Localização'
            keyboardType='decimal-pad'
            // value={cliente.localizacao.y != 0 ? cliente.localizacao.y.toString() : ''}
            className='bg-white border-2 border-blue-500 rounded-md p-2 w-2/5 m-auto mb-10'
            {...register('localizacao.y', { required: true })}
          />
        </View>

        <View className='flex-1 items-center justify-center' >

          <TouchableOpacity
            className='w-2/3 bg-blue-500 p-5 rounded-lg border-x-2 border-white shadow-md shadow-black'
            onPress={handleSubmit(cadastrarCliente)}

          >
            <Text className=' text-white text-center font-bold'>Cadastrar Cliente</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      


  )
}
