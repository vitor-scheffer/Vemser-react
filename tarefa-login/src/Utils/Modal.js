import { ModalPeople } from './Modal.styled'

const Modal = ({closeModal, confirmModal}) => {
  return (
    <ModalPeople>
      <div className="modalContainer">
        <button onClick={() => closeModal(false)} className="closeBtn"> X </button>
        <div className="title">
          <h1>Você tem certeza?</h1>
        </div>
        <div className="body">
          <p>Se você deletar não será capaz de recuperar o usuário.</p>
        </div>
        <div className="footer">
          <button onClick={() => closeModal(false)}>Cancelar</button>
          <button onClick={() => confirmModal()}>Confirmar</button>
        </div>
      </div>
    </ModalPeople>
  )
}
export default Modal