import apiDBC from "../../Services/apiDBC"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../../Utils/Modal'
import { Button } from '../Button/Button'
import { Lista, Item } from './Lista'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ModalDescription from '../../Utils/ModalDescription'

const FlasList = ({list, setup}) => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [openDescription, setOpenDescription] = useState(false)
  const [id, setId] = useState()
  
  const setDelete = (id) => {
    setId(id)
    setOpenModal(true)
  }

  const handleDelete = async () => {
    const notify = () => toast("Usuário apagado com sucesso!");
    let idPessoa = id
    try {
      await apiDBC.delete(`/pessoa/${idPessoa}`)
      setOpenModal(false)
      setup()
      notify()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = (idPessoa) => {
    navigate(`/editar-cadastro/${idPessoa}`)
  }

  const setDescription = (id) => {
    setId(id)
    setOpenDescription(true)
  }

  const setCadastroEndereco = () => {
    navigate('/endereco')
  }

  const setUpdateEndereco = () => {
    navigate(`/endereco/${id}`)
  }


  return (
      <div>
        <h2>All tickets</h2>
        <Lista>
          {list.map(item =>(
            <Item onClick={() =>{setDescription(item.idPessoa)}} key={item.idPessoa}>
              <Item>{item.nome}</Item>
              <Item>{item.dataNascimento}</Item>
              <Item>{item.cpf}</Item>
              <Item>{item.email}</Item>
              <Button width="80px" onClick={() => {handleUpdate(item.idPessoa)}}>Editar</Button>
              <Button width="80px" onClick={() => {setDelete(item.idPessoa)}}>Apagar</Button>
              {openModal && <Modal closeModal={setOpenModal} confirmModal={handleDelete}/>}
              {openDescription && <ModalDescription
              closeModal={setOpenDescription}
              setCadastro={setCadastroEndereco}
              setUpdate={setUpdateEndereco}/>}
            </Item>
          ))} 
        </Lista>
        <ToastContainer />
      </div>
  )
}
export default FlasList