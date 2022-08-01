import styles from './Modal.module.css'

const Modal = ({closeModal, confirmModal}) => {
  return (
    <div className="modalBackground">
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
          <button onClick={() => confirmModal(true)}>Confirmar</button>
        </div>
      </div>
    </div>
  )
}
export default Modal