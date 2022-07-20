import styles from './Form.module.css'

const InputMail = ({label}) => {
  return (
    <div className='input'>
      <label htmlFor="">{label}</label>
      <input type="text" placeholder="Digite seu email" />
    </div>
    
  )
}

export default InputMail