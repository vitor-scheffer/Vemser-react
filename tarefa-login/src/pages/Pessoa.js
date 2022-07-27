import { useEffect, useState } from 'react';
import apiDBC from '../Services/apiDBC'

const Pessoa = () => {
  const [pessoas, setPessoas] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)

  const setup = async () => {
    try {
      const { data } = await apiDBC.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
      setPessoas(data.content)
    } catch (error) {
      console.log(error)
    }
  }

  // const cadastrar = async (newPeople) => {
  //   try {
  //     const { data } = await apiDBC.post('/pessoa?pagina=0&tamanhoDasPaginas=20', newPeople)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleEdit = async (idPessoa, newPeople) => {
  //   setIsUpdate(true)
  //   try {
  //     const { data } = await apiDBC.put(`/pessoa?pagina=0&tamanhoDasPaginas=20/${idPessoa}`, newPeople)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

  // const handleDelete = async (idPessoa) => {
  //   try {
  //     const { data } = await apiDBC.delete(`/pessoa?pagina=0&tamanhoDasPaginas=20/${idPessoa}`)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }



  useEffect(() => {
    setup()
  },[])

  return (
    <div>
      <h1>Cadastrar Pessoas</h1>
      <button>{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>
      <h1>Pessoas</h1>
      {pessoas.map(pessoa =>(
        <div key={pessoa.idPessoas}>
          <p>Nome: {pessoa.nome}</p>
          <p>Data de Nascimento: {pessoa.dataNascimento}</p>
          <p>Cpf: {pessoa.cpf}</p>
          <p>E-mail: {pessoa.email}</p>
          {/* <button onClick={handleEdit}>Editar</button> */}
          {/* <button onClick={handleDelete}>Apagar</button> */}
        </div>
      ))}
    </div>
  )
}
export default Pessoa