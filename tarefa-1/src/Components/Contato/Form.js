import InputName from './InputName'
import InputMail from './InputMail'
import Select from './Select'
import TextArea from './TextArea'
import Button from './Button'
import styles from './Form.module.css'


const Form = () => {
  return (
    <form action="" className='card card-lg'>
      <InputName label='Digite seu nome completo:' />
      <InputMail label='Digite seu e-mail:'/>
      <Select label='Qual o motivo do seu contato' option1='Problema no site' option2='Relatar erro do servidor'/>
      <TextArea label='Sua menssagem'/>
      <Button value='Salvar'/>
    </form>
  )
}



export default Form 