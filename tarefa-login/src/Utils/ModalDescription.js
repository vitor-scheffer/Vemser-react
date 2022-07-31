import { ModalEndereco, Body } from './Modal.styled'
import { Button } from '../components/Button/Button'
import { redColor, colorHoverMenu } from '../consts'
import { useState, useEffect } from 'react'
import apiDBC from '../Services/apiDBC' 
import {Subtitle, Text, TextSm } from '../components/Fonts/Fonts'
import { Lista, Item, TitleList } from '../components/FlatList/Lista'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ModalDescription = ({close, setCadastro, setUpdate, id}) => {
  const [pessoa, setPessoa] = useState()
  const navigate = useNavigate()

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
    const notify = () => toast("Endereço excluído com sucesso!");
    await apiDBC.delete(`/endereco/${idEndereco}`)
    notify()
    close()
  }

  if(pessoa) {
    return (
      
      <div className="modalBackgroundEnd">
      <ToastContainer />
      <ModalEndereco>
        <Button width="80px" padding="10px" onClick={() =>{close()}} className="closeBtn" > Voltar </Button>
        <div className="infoPessoa">
          <Subtitle>{pessoa.nome}</Subtitle>
          <TextSm>{pessoa.email}</TextSm>
        </div>
        <div>
          <TextSm>Data de Nascimento: {pessoa.dataNascimento}</TextSm>
          <TextSm>CPF: {pessoa.cpf}</TextSm>
        </div>
        <Body>
        <nav>
          <ul>
            <li><TextSm color={colorHoverMenu}>Tipo</TextSm> </li>
            <li><TextSm color={colorHoverMenu}>CEP</TextSm> </li>
            <li><TextSm color={colorHoverMenu}>Rua</TextSm> </li>
            <li><TextSm color={colorHoverMenu}>Nº</TextSm> </li>
            <li><TextSm color={colorHoverMenu}>Complemento</TextSm> </li>
            <li><TextSm color={colorHoverMenu}>Cidade</TextSm> </li>
            <li><TextSm color={colorHoverMenu}>UF</TextSm> </li>
            <li><TextSm color={colorHoverMenu}>País</TextSm> </li>
          </ul>
        </nav>
        <Lista>
          {pessoa.enderecos.length > 0 ?
          pessoa.enderecos.map(item =>(
            <Item key={item.idEndereco}>
              <p><TextSm>{item.tipo}</TextSm></p>
              <p><TextSm>{item.cep}</TextSm></p>
              <p><TextSm>{item.logradouro}</TextSm></p>
              <p><TextSm>{item.numero}</TextSm></p>
              <p><TextSm>{item.complemento}</TextSm></p>
              <p><TextSm>{item.cidade}</TextSm></p>
              <p><TextSm>{item.estado}</TextSm></p>
              <p><TextSm>{item.pais}</TextSm></p>
              <Button width="80px" onClick={() =>{setUpdate(item.idEndereco)}}>Editar Endereço</Button>
              <Button width="80px" onClick={() => {handleDelete(item.idEndereco)}}>Apagar Endereço</Button>
            </Item>
          )) : <h1>Ainda não existem endereços cadastrados.</h1>
          }
          
        </Lista>
        </Body>
        <div>
          <Button onClick={setCadastro} width="180px">Cadastrar Endereço</Button>
        </div>
        </ModalEndereco>
        
      </div> 
  )
  }
}
export default ModalDescription