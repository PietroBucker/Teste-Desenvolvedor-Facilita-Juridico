import React from 'react'
import Modal from 'react-modal';
import { apiRouteRequire } from '../context/Fetch';
import { ClienteType } from '../../../back/src/model/ClienteType';

Modal.setAppElement('#root');
const modelStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
 
  };

const modelContentStyles: React.CSSProperties = {
    
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid black',
      padding: '10px',
      margin: '10px',
      
  };
export default function Rotas() {
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const [rotas, setRotas] = React.useState<ClienteType[]>([]);
    function openModal() {
      setIsOpen(true);
      loadingRotes();
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const loadingRotes = async () => {
        apiRouteRequire().then((data) => {
            setRotas(data);
        })
      }
  return (
    <div>
        <button
            onClick={openModal}
        >Buscar Rotas</button>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={modelStyles}
            contentLabel="Example Modal"
        >
          {rotas.map((rota, index) => (
              <div style={modelContentStyles} key={index}>
                  <p>{rota.nome}</p>
                  <p>{rota.email}</p>
                  <p>{rota.telefone}</p>
              </div>
          
          ))}
            <button
                onClick={closeModal
            }>Fechar</button>
        </Modal>

    </div>
  )
}
