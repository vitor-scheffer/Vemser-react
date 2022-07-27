import { useContext, useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup';
import apiCEP from '../Services/apiCEP'
import { AuthContext } from '../context/AuthContext';
import { IMaskInput } from 'react-imask';



const cepSchema = Yup.object().shape({
  tipo: Yup.string().required(),
  logradouro: Yup.string().required(),
  numero: Yup.number().required(),
  complemento: Yup.string().required(),
  cep: Yup.number().required('Campo obrigatório.'),
  cidade: Yup.string().required(),
  estado: Yup.string().required(),
  pais: Yup.string().required()
})

const Endereco = () => {
  const [rua, setRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [estado, setEstado] = useState()
  const { handleEndereco } = useContext(AuthContext)

  const procuraCep = async () => {
    const cepUser = Formik.value.cep.replaceAll('-', '')
    try {
      const { data } = await apiCEP.get(`/${parseInt(cepUser)}/json/`)
      setRua(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
      <h1>Formik</h1>
      <Formik
      initialValues={{
        tipo: '',
        logradouro: '',
        numero: '',
        complemento: '',
        cep: '',
        cidade: '',
        estado: '',
        pais: ''
      }}
      validationSchema={cepSchema}
      onSubmit={values => {
        handleEndereco(values)
      }}
      >
        {({ errors, touched }) => (
          <Form>
          <div>
            <label htmlFor="cep">Cep</label>
            <Field
            name="cep" 
            render={({ field }) => (
              <IMaskInput
              {...field}
              mask="00000-000"
              id="cep" 
              type="text" 
              onBlur={procuraCep}
              />
              )}
          />  
          </div>
          <div>
            <label htmlFor="tipo">Tipo</label>
            <Field
            component="select"
            id="tipo"
            name="tipo"
            >
              <option value="RESIDENCIAL">Residencial</option>
              <option value="COMERCIAL">Comercial</option>
            </Field>
          </div>
          <div>
            <label htmlFor="logradouro">Rua</label>
            <Field id="logradouro" name="logradouro" type="text"/>
          </div>
          <div>
            <label htmlFor="numero">Numero</label>
            <Field id="numero" name="numero" type="text"/>
          </div>
          <div>
            <label htmlFor="complemento">Complemento</label>
            <Field id="complemento" name="complemento" type="text"/>
          </div>
          <div>
            <label htmlFor="cidade">Cidade</label>
            <Field id="cidade" name="cidade" type="text"/>
          </div>
          <div>
            <label htmlFor="estado">Estado</label>
            <Field id="estado" name="estado" type="text"/>
          </div>
          <div>
            <label htmlFor="pais">Pais</label>
            <Field id="pais" name="pais" type="text"/>
          </div>
          <button type="submit">Cadastrar</button>
        </Form>
        )}
        </Formik>
    </div>
  )
}

export default Endereco

