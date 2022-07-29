import apiDBC from '../../Services/apiDBC'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { PeopleContext } from '../../context/PeopleContext'
import { useContext } from 'react'
import NavBarLeft from '../../components/NavBar/NavBar'
import { Card } from '../../components/Card/Card'
import { Button } from '../../components/Button/Button'
import { Section } from '../../components/Section/Section'
import  { IMaskInput }  from 'react-imask'

const PeopleForm = () => {
  const { handleRegister } = useContext(PeopleContext)
  const { handleUpdate } = useContext(PeopleContext)
  const { id } = useParams();
  const [people, setPeople] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  
  const setup = async () => {
    if (id) {
      setIsUpdate(true)
      try {
        const { data } = await apiDBC.get(`/pessoa/lista-completa?idPessoa=${id}`)
        setPeople(data[0])
      } catch (error) {
        console.log(error)
      }
    }
  }

  useEffect(() => {
    setup()
  },[]) 

  if (people || !isUpdate) {
    return (
      <Section>
      <NavBarLeft />
      <Card>
      <Formik
          initialValues={{
            nome: isUpdate ? people.nome : '',
            dataNascimento: isUpdate ? people.dataNascimento : '',
            cpf: isUpdate ? people.cpf : '',
            email: isUpdate ? people.email : '',
          }}
          onSubmit={(values, {resetForm}) => {          
            values.cpf = values.cpf.replaceAll('.','')
            values.cpf= values.cpf.replaceAll('-','')
            {isUpdate ? handleUpdate(values, id, setup, setIsUpdate) : handleRegister(values, setup) }
            resetForm()
          }}
        >
          {({errors, setFieldValue, handleSubmit, handleChange }) =>(
            <Form onSubmit={handleSubmit}>
            <h2>{isUpdate ? 'Atualizar pessoa' : 'Cadastrar pessoa'}</h2>
            <div>
              <label htmlFor="nome">Nome:</label>
              <Field id="nome" name="nome"/>
            </div>
            <div>
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <IMaskInput
                type="date"
                name="dataNascimento"
                id="dataNascimento"
                onChange={handleChange}
                />
            </div>
            <div>
              <label htmlFor="cpf">Cpf:</label>
              <IMaskInput
                type="text"
                name="cpf"
                id="cpf"
                mask="000.000.000-00"
                onChange={handleChange}
                />
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <Field id="email" name="email"/>
            </div>
            <Button type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</Button>
          </Form>
          )}
        </Formik>
      </Card>
      </Section>
    )
  }
}
export default PeopleForm