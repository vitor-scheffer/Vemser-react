import { useEffect, useState } from 'react';
import apiDBC from '../Services/apiDBC'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useNavigate } from 'react-router-dom'

const Pessoa = () => {
  const navigate = useNavigate()
  const [pessoas, setPessoas] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [id, setId] = useState()

  const setUpdate = (id) => {
    setIsUpdate(true)
    setId(id)
  }

  const setup = async () => {
    try {
      const { data } = await apiDBC.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
      setPessoas(data.content)
    } catch (error) {
      console.log(error)
    }
  }

  const handleRegister = async (newPeople) => {
    try {
      await apiDBC.post('/pessoa', newPeople)
      alert('cadastrado com sucesso')
      setup()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (newPeople) => {
    let idPessoa = id
    try {
      const { data } = await apiDBC.put(`/pessoa/${idPessoa}`, newPeople)
      console.log('editou')
      setIsUpdate(false)
      setup()
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async (idPessoa) => {
    try {
      await apiDBC.delete(`/pessoa/${idPessoa}`)
      console.log('apagou')
      alert('deletado')
      setup()
    } catch (error) {
      console.log(error)
    }
  }



  useEffect(() => {
    setup()
  },[])

  return (
    <div>
      <h1>Pessoas</h1>
      <Formik
        initialValues={{
          nome: '',
          dataNascimento: '',
          cpf: '',
          email: '',
        }}
        onSubmit={values => {
          {isUpdate ? handleUpdate(values) : handleRegister(values) }
        }}
      >
        {({errors, setFieldValue }) =>(
          <Form>
          <h1>{isUpdate ? 'Atualizar pessoa' : 'Cadastrar pessoa'}</h1>
          <div>
            <label htmlFor="nome">Nome:</label>
            <Field id="nome" name="nome"/>

          </div>
          <div>
            <label htmlFor="dataNascimento">Data de Nascimento:</label>
            <Field id="dataNascimento" name="dataNascimento"/>

          </div>
          <div>
            <label htmlFor="cpf">Cpf:</label>
            <Field id="cpf" name="cpf"/>

          </div>
          <div>
            <label htmlFor="email">E-mail:</label>
            <Field id="email" name="email"/>
          </div>
          <button type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</button>
        </Form>
        )}
      </Formik>

      {pessoas.map(pessoa =>(
        <div key={pessoa.idPessoas}>
          <p>Nome: {pessoa.nome}</p>
          <p>Data de Nascimento: {pessoa.dataNascimento}</p>
          <p>Cpf: {pessoa.cpf}</p>
          <p>E-mail: {pessoa.email}</p>
          <button onClick={() => {setUpdate(pessoa.idPessoa)}}>Editar</button> 
          <button onClick={() => {handleDelete(pessoa.idPessoa)}}>Apagar</button>
        </div>
      ))}
    </div>
  )
}
export default Pessoa