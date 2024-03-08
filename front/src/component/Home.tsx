import './styles/StyleHome.css'
import React, { useState } from 'react'
import {ClienteType} from '../../../back/src/model/ClienteType';
import Rotas from './Rotas';

type HomeProps = {
  clientes: ClienteType[]
}

type atributes = {
  nome: string,
  email: string,
  telefone: string
}

export default function Home({clientes}: HomeProps) {
  const [nome, setNome] = useState<atributes>({nome:'', email:'', telefone:''});

  const onChange = ({target}: any) => {
    setNome({...nome, [target.name]: target.value});
    
  }

  const filtro = clientes.filter((cliente) => (
    cliente.nome.toLocaleLowerCase().includes(nome.nome) && 
    cliente.email.toLocaleLowerCase().includes(nome.email) && 
    cliente.telefone.includes(nome.telefone)
    )
  );    
  console.log(clientes);
  
  return (
    <div className='home_container'>
        <h1>Busca Clientes</h1>
        <Rotas />
        <form className='home_form_container'>
          <label htmlFor="nome">
            Nome
            <input 
            type="text" 
            name='nome'
            value={nome.nome}
            onChange={onChange}
          />
          </label>
          <label htmlFor="email">
            Email
            <input 
              type="text"
              name='email'
              value={nome.email}
              onChange={onChange}  
            />
          </label>
          <label htmlFor="telefone">
            Telefone
            <input 
              type="text"
              name='telefone'
              value={nome.telefone}
              onChange={onChange} 
            />
          </label>
          <table className='home_content'>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>localizacao</th>
              </tr>
            </thead>
            <tbody>

            {filtro.map((cliente, index) => (
              <tr key={index}>
                <td>{cliente.nome}</td>
                <td>{cliente.email}</td>
                <td>{cliente.telefone}</td>
                <td>({cliente.localizacao.x},{cliente.localizacao.y})</td>

              </tr>
              ))
            }
            </tbody>
          </table>
        </form>

    </div>
  )
}

