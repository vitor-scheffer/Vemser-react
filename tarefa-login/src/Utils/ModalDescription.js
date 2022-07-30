import { ModalPeople } from './Modal.styled'
import { Button } from '../components/Button/Button'
import { redColor } from '../consts'
import { useState, useEffect } from 'react'
import apiDBC from '../Services/apiDBC'

const ModalDescription = ({closeModal, setCadastro, setUpdate, id}) => {
  const [pessoa, setPessoa] = useState()

  const setup = async () => {
    try {
      const { data } = await apiDBC.get(`/pessoa/lista-completa?idPessoa=${id}`)
      setPessoa(data.content)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setup()
  },[])

  return (
      <div className="modalBackground">
      <ModalPeople>
        <Button width="50px" padding="8px" onClick={() =>{closeModal(false)}} className="closeBtn" > Voltar </Button>
        <div className="title">
          <h1>Pessoas</h1>
        </div>
        <div className="body">
          
        </div>
        <div className="btnsModal">
          <Button backgroundColor={redColor} border={`1px solid ${redColor}`}>Apagar endereço</Button>
          <Button onClick={() => setUpdate()} >Editar endereço</Button>
          <Button onClick={() => setCadastro()} >Cadastrar Endereço</Button>
        </div>
        </ModalPeople>
      </div>
    
  )
}
export default ModalDescription