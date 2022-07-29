import { ModalPeople } from './Modal.styled'
import FooterModal from './Modal.styled'
import { Button } from '../components/Button/Button'
import { redColor } from '../consts'

const Modal = ({closeModal, confirmModal}) => {
  return (
    
      <div className="modalBackground">
      <ModalPeople>
        <Button width="35px" padding="8px" onClick={() => closeModal(false)} className="closeBtn" > X </Button>
        <div className="title">
          <h1>Você tem certeza?</h1>
        </div>
        <div className="body">
          <p>Se você deletar não será possível recuperar o usuário.</p>
        </div>
        <div className="btnsModal">
          <Button onClick={() => closeModal(false)} backgroundColor={redColor} border={`1px solid ${redColor}`}>Cancelar</Button>
          <Button onClick={() => confirmModal()} >Confirmar</Button>
        </div>
        </ModalPeople>
      </div>
    
  )
}
export default Modal