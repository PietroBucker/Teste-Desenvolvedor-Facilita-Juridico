import './styles/StyleRotas.css'
import React from 'react'
import Modal from 'react-modal';
import { apiRouteRequire } from '../context/Fetch';
import { ClienteType } from '../../../back/src/model/ClienteType';

Modal.setAppElement('#root');

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
    <div className='rota_container'>

        <button
            className='botao_rotas'
            onClick={openModal}>🌐</button>
        <Modal
            
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            className='customModal'
            overlayClassName='customOverlay'
            // style={modelStyles}
            contentLabel="Example Modal"
        >
          <table className='rota_content'>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>localizacao</th>
              </tr>
            </thead>
          {rotas.map((rota, index) => (
            <tr key={index}>
                  <td>{rota.nome}</td>
                  <td>{rota.email}</td>
                  <td>{rota.telefone}</td>
                  <td>({rota.localizacao.x},{rota.localizacao.y})</td>

              </tr>
          
          ))}
          </table>
          
           
        </Modal>

    </div>
  )
}
