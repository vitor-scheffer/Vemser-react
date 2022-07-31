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

  if(pessoa) {
    console.log(pessoa)
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
          <Text>{pessoa.dataNascimento}</Text>
          <Text>{pessoa.cpf}</Text>
        </div>
        <div className="body">
        <Lista>
          {pessoa.enderecos.map(item =>(
            <Item key={item.idEndereco}>
              <p>{item.tipo}</p>
              <p>{item.logradouro}</p>
              <p>{item.numero}</p>
              <p>{item.complemento}</p>
              <p>{item.cep}</p>
              <p>{item.complemento}</p>
              <p>{item.cidade}</p>
              <p>{item.estado}</p>
              <p>{item.pais}</p>
              <Button width="80px" onClick={setUpdate}>Editar Endereço</Button>
              <Button width="80px" onClick={setCadastro}>Apagar Endereço</Button>
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