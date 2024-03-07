import './App.css';
import { useEffect, useState } from 'react';
import {apiRequire} from './context/Fetch';
import Home from './component/Home';
import {ClienteType} from '../../back/src/model/ClienteType';
import Cadastro from './component/Cadastro';

function App() {
  const [clientes, setClientes] = useState<ClienteType[]>([]);
  
  useEffect(() => {
    apiRequire().then((data) => {
      setClientes(data);
    });
  }, []);


  return (
    <div>
      <Cadastro />
      <Home clientes={clientes} />
    </div>
  );
}


export default App;
