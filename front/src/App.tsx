import './App.css';
import { useEffect, useState } from 'react';
import {apiRequire} from './context/Fetch';
import Home from './component/Home';
import {ClienteType} from '../../back/src/model/ClienteType';

function App() {
  const [clientes, setClientes] = useState<ClienteType[]>([]);
  
  useEffect(() => {
    apiRequire().then((data) => {
      setClientes(data);
    });
  }, []);


  return (
    <div>
      <Home clientes={clientes} />
    </div>
  );
}


export default App;
