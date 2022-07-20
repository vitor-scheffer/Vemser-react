const InputName = ({label}) => {
  return (
    <div className='input'>
      <label htmlFor="">{label}</label>
      <input type="text" placeholder="Digite seu nome completo"/>
    </div>
    
  )
}

export default InputName