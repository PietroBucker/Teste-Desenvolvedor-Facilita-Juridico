import React, { useReducer, useState } from 'react'
import { Alert, Keyboard, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native'
import { ClienteType } from '../../../back/src/model/ClienteType'

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
  const [cliente, setCliente] = useState<ClienteType>(initialState)

  function onChange(text: string, key: string) {
    setCliente({ ...cliente, [key]: text })

  }

  function onChangeLocalizacao(value: string, key: 'x' | 'y') {
    setCliente({ ...cliente, localizacao: { ...cliente.localizacao, [key]: Number(value) } })

  }

  async function cadastrarCliente() {
    try {

      const response = await fetch('http://192.168.10.114:3001/cadastro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cliente)
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
    <View className='flex-1'>
      <View className='flex-1 m-10'>
        <TextInput
          onChangeText={(text) => onChange(text, 'nome')}
          placeholder='Digite o Nome'
          keyboardType='default'
          value={cliente.nome}
          className='bg-white border-2 border-blue-500 rounded-md p-2 w-full mb-10'

        />
        <TextInput
          onChangeText={(text) => onChange(text, 'email')}
          placeholder='Digite o Email'
          keyboardType='default'
          value={cliente.email}
          className='bg-white border-2 border-blue-500 rounded-md p-2 w-full mb-10'

        />
        <TextInput
          onChangeText={(text) => onChange(text, 'telefone')}
          placeholder='Digite o Telefone'
          keyboardType='default'
          value={cliente.telefone}
          className='bg-white border-2 border-blue-500 rounded-md p-2 w-full mb-10'

        />
        <View className='flex-row'>

          <TextInput
            onChangeText={(value) => onChangeLocalizacao(value, 'x')}
            placeholder='Digite o X-Localização'
            keyboardType='numeric'
            value={cliente.localizacao.x != 0 ? cliente.localizacao.x.toString() : ''}
            className='bg-white border-2 border-blue-500 rounded-md p-2 w-2/5 m-auto mb-10'

          />
          <TextInput
            onChangeText={(value) => onChangeLocalizacao(value, 'y')}
            placeholder='Digite o Y-Localização'
            keyboardType='numeric'
            value={cliente.localizacao.y != 0 ? cliente.localizacao.y.toString() : ''}
            className='bg-white border-2 border-blue-500 rounded-md p-2 w-2/5 m-auto mb-10'

          />
        </View>

      </View>
      <TouchableOpacity
        className='w-full bg-blue-500 p-5'
        onPress={cadastrarCliente}
      >
        <Text className=' text-white text-center font-bold'>Cadastrar Cliente</Text>
      </TouchableOpacity>
    </View>


  )
}
