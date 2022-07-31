import { ModalPeople } from './Modal.styled'
import { Button } from '../components/Button/Button'
import { redColor } from '../consts'
import { useState, useEffect } from 'react'
import apiDBC from '../Services/apiDBC' 
import {Subtitle, Text, TextSm } from '../components/Fonts/Fonts'
import { Lista, Item } from '../components/FlatList/Lista'

const ModalDescription = ({close, setCadastro, setUpdate, id}) => {
  const [pessoa, setPessoa] = useState()

  const setup = async () => {
    try {
      const { data } = await apiDBC.get(`/pessoa/lista-completa?idPessoa=${id}`)
      setPessoa(data[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setup()
  },[])

  const handleDelete = async (idEndereco) => {
    await apiDBC.delete(`/endereco/${idEndereco}`)
    setup()
  }

  if(pessoa) {
    return (
      <div className="modalBackground">
      <ModalPeople>
        <Button width="50px" padding="8px" onClick={() =>{close()}} className="closeBtn" > Voltar </Button>
        <div className="infoPessoa">
          <Subtitle>{pessoa.nome}</Subtitle>
          <TextSm>{pessoa.email}</TextSm>
        </div>
        <div>
          <TextSm>Data de Nascimento: {pessoa.dataNascimento}</TextSm>
          <TextSm>CPF: {pessoa.cpf}</TextSm>
        </div>
        <div className="body">
        <Lista>
          {pessoa.enderecos.map(item =>(
            <Item key={item.idEndereco}>
              <p><Subtitle>{item.tipo}</Subtitle></p>
              <p><Subtitle>{item.cep}</Subtitle></p>
              <p><TextSm>{item.logradouro}</TextSm></p>
              <p><TextSm>{item.numero}</TextSm></p>
              <p><TextSm>{item.complemento}</TextSm></p>
              <p><TextSm>{item.bairro}</TextSm></p>
              <p><TextSm>{item.cidade}</TextSm></p>
              <p><TextSm>{item.estado}</TextSm></p>
              <p><TextSm>{item.pais}</TextSm></p>
              <Button width="80px" onClick={() =>{setUpdate(item.idEndereco)}}>Editar Endereço</Button>
              <Button width="80px" onClick={() => {handleDelete(item.idEndereco)}}>Apagar Endereço</Button>
            </Item>
          ))} 
        </Lista>
        </div>
        <div className="btnsModal">
          <Button onClick={setCadastro} >Cadastrar Endereço</Button>
        </div>
        </ModalPeople>
      </div> 
  )
  }
}
export default ModalDescription