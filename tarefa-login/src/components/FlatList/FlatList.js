import apiDBC from "../../Services/apiDBC"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../../Utils/Modal'
import { Button } from '../Button/Button'
import { Lista, Item } from './Lista'

const FlasList = ({list, setup}) => {
  const navigate = useNavigate()
  const [openModal, setOpenModal] = useState(false)
  const [id, setId] = useState()
  
  const setDelete = (id) => {
    setId(id)
    setOpenModal(true)
  }

  const handleDelete = async () => {
    let idPessoa = id
    try {
      await apiDBC.delete(`/pessoa/${idPessoa}`)
      alert('deletado')
      setOpenModal(false)
      setup()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = (idPessoa) => {
    navigate(`/editar-cadastro/${idPessoa}`)
  }


  return (
      <div>
        <h2>All tickets</h2>
        <Lista>
          {list.map(item =>(
            <Item key={item.idPessoa}>
              <Item>{item.nome}</Item>
              <Item>{item.dataNascimento}</Item>
              <Item>{item.cpf}</Item>
              <Item>{item.email}</Item>
              <Button width="80px" onClick={() => {handleUpdate(item.idPessoa)}}>Editar</Button>
              <Button width="80px" onClick={() => {setDelete(item.idPessoa)}}>Apagar</Button>
              {openModal && <Modal closeModal={setOpenModal} confirmModal={handleDelete}/>}
            </Item>
          ))} 
        </Lista>
     
      </div>
  )
}
export default FlasList