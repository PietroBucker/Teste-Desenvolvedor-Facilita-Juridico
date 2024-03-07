import React, { useState } from 'react'
import {ClienteType} from '../../../back/src/model/ClienteType';

type HomeProps = {
  clientes: ClienteType[]
}

type atributes = {
  nome: string,
  email: string,
}

export default function Home({clientes}: HomeProps) {
  const [nome, setNome] = useState<atributes>({nome:'', email:''});

  const onChange = ({target}: any) => {
    setNome({...nome, [target.name]: target.value});
    
  }

  const filtro = clientes.filter((cliente) => (
    cliente.nome.toLocaleLowerCase().includes(nome.nome) && 
    cliente.email.toLocaleLowerCase().includes(nome.email))
  );

  
  return (
    <div>
        <h1>Busca Clientes</h1>
        <div>
          <label htmlFor="">
            Nome
            <input 
            type="text" 
            name='nome'
            value={nome.nome}
            onChange={onChange}
          />
          </label>
          <label htmlFor="">
            Email
            <input 
              type="text"
              name='email'
              value={nome.email}
              onChange={onChange}  
            />
          </label>
          <label htmlFor="">
            Telefone
            <input type="text" />
          </label>
          <div>
            {filtro.map((cliente, index) => (
              <div key={index}>
                <p>{cliente.nome}</p>
                <p>{cliente.email}</p>
              </div>
              ))
            }
          </div>
        </div>

    </div>
  )
}
