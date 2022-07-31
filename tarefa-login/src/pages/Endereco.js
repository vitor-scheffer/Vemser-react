import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import { useParams, useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import apiCEP from '../Services/apiCEP'
import  { IMaskInput }  from 'react-imask'
import NavBarLeft from '../components/NavBar/NavBar'
import { Card } from '../components/Card/Card'
import { Button } from '../components/Button/Button'
import { Section } from '../components/Section/Section'
import apiDBC from '../Services/apiDBC'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cepSchema = Yup.object().shape({
  tipo: Yup.string().required('Campo obrigatório.'),
  logradouro: Yup.string().required('Campo obrigatório.'),
  numero: Yup.number().required('Campo obrigatório.'),
  cep: Yup.string().required('Campo obrigatório.'),
  cidade: Yup.string().required('Campo obrigatório.'),
  estado: Yup.string().required('Campo obrigatório.'),
  pais: Yup.string().required('Campo obrigatório.'),
  bairro: Yup.string().required('Campo obrigatório.'),
})

const Endereco = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { idEndereco } = useParams();
  const [people, setPeople] = useState();
  const [isUpdate, setIsUpdate] = useState(false);
  const [endereco, setEndereco] = useState();

  const setup = async () => {
    if( id && idEndereco) {
      setIsUpdate(true)
      try {
        const { data } = await apiDBC.get(`/endereco/${idEndereco}`)
        setEndereco(data)
      } catch (error) {
        console.log(error)
      }
  }
  }

  useEffect(()=> {
    setup()
  },[])
  
  const handleRegister = async (values) => {
    const notify = () => toast("Endereço cadastrado com sucesso!");
    try{
      await apiDBC.post(`/endereco/{idPessoa}?idPessoa=${id}`, values)
      notify()
      navigate('/pessoa')
    } catch(error)
    {console.log(error);}
  }

  const handleUpdate = async (values) => {
    const notify = () => toast("Endereço modificado com sucesso!");
    try {
      await apiDBC.put(`/endereco/${idEndereco}`, values)
      notify()
      navigate('/pessoa')
    } catch (error) {
      console.log(error)
    }
  }

  const procuraCep = async (setFieldValue, cep) => {
    const newCep = cep.replaceAll('-','')
    try {
      const { data } = await apiCEP.get(`/${parseInt(newCep)}/json/`)
      setFieldValue('logradouro', data.logradouro)
      setFieldValue('bairro', data.bairro)
      setFieldValue('cidade', data.localidade)
      setFieldValue('estado', data.uf) 
    } catch (error) {
      console.log(error)
    }
  }

  console.log(endereco)

  if((isUpdate && endereco) || !isUpdate) {
    return (
      <Section>
        <NavBarLeft />
        <Card width="1420px" height="615px">
          <Formik
          initialValues={{
            idPessoa: id,
            cep: isUpdate ? endereco.cep : '',
            tipo: isUpdate ? endereco.tipo : '',
            logradouro: isUpdate ? endereco.logradouro : '',
            numero: isUpdate ? endereco.numero : '',
            bairro: isUpdate ? endereco.bairro : '',
            cidade: isUpdate ? endereco.cidade : '',
            estado: isUpdate ? endereco.estado : '',
            pais: isUpdate ? endereco.pais : '',
            complemento: isUpdate ? endereco.complemento : ''
          }}
          validationSchema={cepSchema}
          onSubmit={(values, {resetForm}) => {   
            console.log(values)       
            values.cep = values.cep.replace('-', '')
            {isUpdate ? handleUpdate(values) : handleRegister(values)}
            resetForm()
          }}
          >
            {({errors, touched, handleSubmit, setFieldValue }) =>(
            <Form>
              <div>
                <label htmlFor="cep">CEP</label>
                <Field
                id="cep"
                name="cep"
                onBlur={(ev) => {procuraCep(setFieldValue, ev.target.value)}}
                />
                {errors.cep && touched.cep ? (
               <div>{errors.cep}</div>
             ) : null}
              </div>
  
              <div>
                <label htmlFor="tipo">Tipo</label>
                <Field
                component="select"
                id="tipo"
                name="tipo"
                >
               <option value={null}>Escolha um tipo</option>
               <option value="RESIDENCIAL">Residencial</option>
               <option value="COMERCIAL">Comercial</option>
               </Field>
                {errors.tipo && touched.tipo ? (
               <div>{errors.tipo}</div>
             ) : null}
              </div>
              
              <div>
                <label htmlFor="logradouro">Rua</label>
                <Field
                id="logradouro"
                name="logradouro"
                />
                {errors.logradouro && touched.logradouro ? (
               <div>{errors.logradouro}</div>
             ) : null}
              </div>
              
              <div>
                <label htmlFor="numero">Número</label>
                <Field
                id="numero"
                name="numero"
                />
                {errors.numero && touched.numero ? (
               <div>{errors.numero}</div>
             ) : null}
              </div>
              
              <div>
                <label htmlFor="bairro">Bairro</label>
                <Field
                id="bairro"
                name="bairro"
                />
                {errors.bairro && touched.bairro ? (
               <div>{errors.bairro}</div>
             ) : null}
              </div>
            
              <div>
                <label htmlFor="cidade">Cidade</label>
                <Field
                id="cidade"
                name="cidade"
                />
                {errors.cidade && touched.cidade ? (
               <div>{errors.cidade}</div>
             ) : null}
              </div>
              
              <div>
                <label htmlFor="estado">Estado</label>
                <Field
                id="estado"
                name="estado"
                />
                {errors.estado && touched.estado ? (
               <div>{errors.estado}</div>
             ) : null}
              </div>
              
              <div>
                <label htmlFor="pais">País</label>
                <Field
                id="pais"
                name="pais"
                />
                {errors.pais && touched.pais ? (
               <div>{errors.pais}</div>
             ) : null}
              </div>
              
              <div>
                <label htmlFor="complemento">Complemento</label>
                <Field
                id="complemento"
                name="complemento"
                />
              </div>
              <Button disabled={errors.pais || errors.tipo} type="submit">{isUpdate ? 'Atualizar' : 'Cadastrar'}</Button>
            </Form>
            )}
          </Formik>
        </Card>
        <ToastContainer />
      </Section>
    )
  }
}
export default Endereco