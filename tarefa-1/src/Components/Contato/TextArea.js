const TextArea = ({label}) => {
  return (
    <div className='input'>
      <label htmlFor="">{label}</label>
      <textarea name="" id="" cols="30" rows="10" placeholder="Digite sua menssagem"></textarea>
    </div>
    
  )
}

export default TextArea