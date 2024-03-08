import './styles/StyleCadastro.css'
import React from 'react'
import { ClienteType } from '../../../back/src/model/ClienteType';

const initialSate: ClienteType = {
  nome: '',
  email: '',
  telefone: '',
  localizacao: {
    x: 0,
    y: 0
  }

}

export default function Cadastro() {
  const [data, setData] = React.useState<ClienteType>(initialSate);

  const sendForApi = async () => {
    try {

      const response = await fetch("http://0.0.0.0:3001/cadastro", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      
      if(response.ok){
        console.log('Cadastrado com sucesso');
      
        setData(initialSate);
      }else{
        console.log('Erro ao cadastrar');
      }
      } catch (error) {
        console.log('Erro ao cadastrar');
      }

  };
  
  const onchange = ({ target }: any) => {
    setData({ ...data, [target.name]: target.value });
  
  };

  const onchangeLocalizacao = ({ target }: any) => {
    setData({ ...data, localizacao: { ...data.localizacao, [target.name]: target.value} });
  }
  
  return (
    <div className='cadastro_container'>
      <h1>Cadastro</h1>
      <form className='cadastro_form_container'>
        <label htmlFor="">
          Nome
          <input 
            type="text"
            name='nome'
            value={data.nome}
            onChange={onchange}
          />
        </label>
        <label htmlFor="">
          Email
          <input 
            type="text" 
            name='email'
            value={data.email}
            onChange={onchange}
          />
        </label>
        <label htmlFor="">
          Telefone
          <input 
            type="text"
            name='telefone'
            value={data.telefone}
            onChange={onchange}  
          />
        </label>
        <label htmlFor="">
          Localizacao
        <input 
          type="number" 
          name='x'
          value={data.localizacao.x}
          onChange={onchangeLocalizacao}
        />
        <input 
          type="number" 
          name='y'
          value={data.localizacao.y}
          onChange={onchangeLocalizacao}
        />
        </label>
        <button onClick={sendForApi}>Cadastrar</button>
      </form>
    </div>
  )
}
