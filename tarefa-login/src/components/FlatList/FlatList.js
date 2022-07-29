import apiDBC from "../../Services/apiDBC"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../../Utils/Modal'

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
      {list.map(item =>(
          <div key={item.idPessoa}>
            <p>Nome: {item.nome}</p>
            <p>Data de Nascimento: {item.dataNascimento}</p>
            <p>Cpf: {item.cpf}</p>
            <p>E-mail: {item.email}</p>
            <button onClick={() => {handleUpdate(item.idPessoa)}}>Editar</button> 
            <button onClick={() => {setDelete(item.idPessoa)}}>Apagar</button>
            {openModal && <Modal closeModal={setOpenModal} confirmModal={handleDelete}/>}
          </div>
      ))}
      </div>
  )
}
export default FlasList