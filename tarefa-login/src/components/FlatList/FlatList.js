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
    navigate(`/endereco/${id}`)
  }

  const setUpdateEndereco = (idEndereco) => {
    navigate(`/endereco/${id}/${idEndereco}`)
  }

  return (
      <div>
        <h2>All tickets</h2>
        <Lista>
          {list.map(item =>(
            <Item key={item.idPessoa}>
              <p onClick={() => {setDescription(item.idPessoa)}}>{item.nome}</p>
              <p>{item.dataNascimento}</p>
              <p>{item.cpf}</p>
              <p>{item.email}</p>
              <Button width="80px" onClick={() => {handleUpdate(item.idPessoa)}}>Editar</Button>
              <Button width="80px" onClick={() => {setDelete(item.idPessoa)}}>Apagar</Button>
              {openModal && <Modal closeModal={setOpenModal} confirmModal={handleDelete}/>}
              {openDescription && <ModalDescription
              close={setOpenDescription}
              setCadastro={setCadastroEndereco}
              setUpdate={setUpdateEndereco}
              id={id}/>}
            </Item>
          ))} 
        </Lista>
        <ToastContainer />
      </div>
  )
}
export default FlasList