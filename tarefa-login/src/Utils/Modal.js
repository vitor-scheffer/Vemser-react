import { ModalPeople } from './Modal.styled'
import FooterModal from './Modal.styled'

const Modal = ({closeModal, confirmModal}) => {
  return (
    
      <div className="modalBackground">
      <ModalPeople>
        <button onClick={() => closeModal(false)} className="closeBtn"> X </button>
        <div className="title">
          <h1>Você tem certeza?</h1>
        </div>
        <div className="body">
          <p>Se você deletar não será possível o usuário.</p>
        </div>
        <div className="btnsModal">
          <button onClick={() => closeModal(false)} className="btnModal">Cancelar</button>
          <button onClick={() => confirmModal()} >Confirmar</button>
        </div>
        </ModalPeople>
      </div>
    
  )
}
export default Modal