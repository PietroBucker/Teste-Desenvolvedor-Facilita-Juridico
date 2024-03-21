import React, { Dispatch } from 'react'
import { Text, Modal, View, ModalProps, TouchableOpacity } from 'react-native'
import { ClienteType } from '../../../back/src/model/ClienteType'
import { CardClient } from './CardClient'
import { FontAwesome } from '@expo/vector-icons'
import { white } from 'tailwindcss/colors'

type ModalClientesProps = ModalProps & {
  isVisible: boolean,
  setVisible: React.Dispatch<React.SetStateAction<boolean>>
  orderClientes: ClienteType[]

}

export default function ModalClientes({ isVisible, setVisible, orderClientes, ...rest}: ModalClientesProps) {
  
  return (


    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>


      <Modal
        visible={isVisible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setVisible(false)}
        
      >
        
      

          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:'rgba(0,0,0,0.5)'}}>

            <View className='bg-blue-500/90 m-2 py-5 max-h-96 rounded-xl z-2'>
              <CardClient clientes={orderClientes} />
            </View>
            <TouchableOpacity
              onPress={() => setVisible(false)}
            >
              <FontAwesome name='close' color={white} size={50} />
            </TouchableOpacity>
          </View>
          


      </Modal>
    </View>


  );
};


