import { useParams } from 'react-router-dom'
import { Formik, Field, Form } from 'formik'
import { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { useContext } from 'react'
import  { IMaskInput }  from 'react-imask'
import moment from 'moment'
import apiDBC from '../../Services/apiDBC'
import { PeopleContext } from '../../context/PeopleContext'
import NavBarLeft from '../../components/NavBar/NavBar'
import { Card } from '../../components/Card/Card'
import { Button } from '../../components/Button/Button'
import { Section } from '../../components/Section/Section'

const userSchema = Yup.object().shape({
  nome: Yup.string().required('Campo obrigatório.'),
  dataNascimento: Yup.string().required('Campo obrigatório.'),
  cpf: Yup.string().required('Campo obrigatório.'),
  email: Yup.string().required('Campo obrigatório.'),
})



const PeopleForm = () => {
  const { handleRegister } = useContext(PeopleContext)
  const { handleUpdate } = useContext(PeopleContext)
  const { id } = useParams();
  const [people, setPeople] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [isError, setIsError] = useState(true);
  
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
      <Card height="450px">
      <Formik
          initialValues={{
            nome: isUpdate ? people.nome : '',
            dataNascimento: isUpdate ? moment(people.dataNascimento, 'YY/YY/MMDD').format('DD-MM-YYYY') : '',
            cpf: isUpdate ? people.cpf : '',
            email: isUpdate ? people.email : '',
          }}
          validationSchema={userSchema}
          onSubmit={(values, {resetForm}) => {          
            values.cpf = values.cpf.replace(/[^0-9]/gi,'')
            values.dataNascimento = moment(values.dataNascimento, 'DD/MM/YYYY').format('YYYY-MM-DD')
            {isUpdate ? handleUpdate(values, id, setup, setIsUpdate) : handleRegister(values, setup) }
            resetForm()
          }}
        >
          {({errors, touched, handleSubmit }) =>(
            <Form onSubmit={handleSubmit}>
            <h2>{isUpdate ? 'Atualizar pessoa' : 'Cadastrar pessoa'}</h2>
            <div>
              <label htmlFor="nome">Nome:</label>
              <Field id="nome" name="nome"/>
              {errors.nome && touched.nome ? (
             <div>{errors.nome}</div>
           ) : null}
            </div>
            <div>
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
              <Field
              name="dataNascimento"
              render= {({field}) => (
                <IMaskInput
                {...field}
                id="dataNascimento" 
                mask="00/00/0000"
                /> 
                )}
              />
                {errors.dataNascimento && touched.dataNascimento ? (
             <div>{errors.dataNascimento}</div>
           ) : null}
            </div>
            <div>
              <label htmlFor="cpf">Cpf:</label>
              <Field
              name="cpf"
              render= {({field}) => (
                <IMaskInput
                {...field}
                id="cpf" 
                mask="000.000.000-00"
                /> 
                )}
              />
                {errors.cpf && touched.cpf ? (
             <div>{errors.cpf}</div>
           ) : null}
            </div>
            <div>
              <label htmlFor="email">E-mail:</label>
              <Field id="email" name="email"/>
              {errors.email && touched.email ? (
             <div>{errors.email}</div>
           ) : null}
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