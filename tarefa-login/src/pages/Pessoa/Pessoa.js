import { useEffect, useState } from 'react';
import apiDBC from '../../Services/apiDBC'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { ContainerPessoa, CardColabs } from './Pessoa.styled';
import Modal from '../../Utils/Modal'

const Pessoa = () => {
  const [pessoas, setPessoas] = useState([])
  const [isUpdate, setIsUpdate] = useState(false)
  const [id, setId] = useState()
  const [nome, setNome] = useState()
  const [data, setData] = useState()
  const [cpf, setCpf] = useState()
  const [email, setEmail] = useState()
  const [openModal, setOpenModal] = useState(false)

  const setUpdate = (pessoa) => {
    setIsUpdate(true)
    setId(pessoa.idPessoa)
    setNome(pessoa.nome)
    setData(pessoa.dataNascimento)
    setCpf(pessoa.cpf)
    setEmail(pessoa.email)
  }

  const setDelete = (id) => {
    setId(id)
    setOpenModal(true)
  }

  const setValues = (setFieldValue) => {
    setFieldValue('nome', nome)
    setFieldValue('dataNascimento', data)
    setFieldValue('cpf', cpf)
    setFieldValue('email', email)
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
      alert('editado com sucesso')
      setIsUpdate(false)
      setup()
    } catch (error) {
      console.log(error)
    }
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



  useEffect(() => {
    setup()
  },[])

  return (
    <ContainerPessoa>
      <h1>Tickets</h1>
      <Formik
        initialValues={{
          nome: '',
          dataNascimento: '',
          cpf: '',
          email: '',
        }}
        onSubmit={(values, {resetForm}) => {
          {isUpdate ? handleUpdate(values) : handleRegister(values) }
          resetForm()
        }}
      >
        {({errors, setFieldValue }) =>(
          <Form>
          <h2>{isUpdate ? 'Atualizar pessoa' : 'Cadastrar pessoa'}</h2>
          <div>
            <label htmlFor="nome">Nome:</label>
            <Field onClick={ isUpdate ? () => setValues(setFieldValue) : ''} id="nome" name="nome"/>

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

      <CardColabs>
        <h2>All tickets</h2>
      {pessoas.map(pessoa =>(
          <div key={pessoa.idPessoas}>
            <p>Nome: {pessoa.nome}</p>
            <p>Data de Nascimento: {pessoa.dataNascimento}</p>
            <p>Cpf: {pessoa.cpf}</p>
            <p>E-mail: {pessoa.email}</p>
            <button onClick={() => {setUpdate(pessoa)}}>Editar</button> 
            <button onClick={() => {setDelete(pessoa.idPessoa)}}>Apagar</button>
            {openModal && <Modal closeModal={setOpenModal} confirmModal={handleDelete}/>}
          </div>
        
      ))}
      </CardColabs>
    </ContainerPessoa>
  )
}
export default Pessoa