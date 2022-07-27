import { useFormik } from 'formik'
import { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'
import apiCEP from '../Services/apiCEP'
import  { IMaskInput }  from 'react-imask'



const Endereco = () => {
  const [rua, setRua] = useState()
  const [bairro, setBairro] = useState()
  const [cidade, setCidade] = useState()
  const [estado, setEstado] = useState()


  const formik = useFormik({
    initialValues: {
      tipo: '',
      logradouro: '',
      numero: '',
      complemento: '',
      cep: '',
      cidade: '',
      estado: '',
      pais: ''
    },
    onSubmit: values => {
      console.log(values)
    }
  })

  const procuraCep = async () => {
    const cep = formik.values.cep.replaceAll('-', '')
    try {
      const { data } = await apiCEP.get(`/${parseInt(cep)}/json/`)
      setRua(data.logradouro);
      setBairro(data.bairro);
      setCidade(data.localidade);
      setEstado(data.uf);
    } catch (error) {
      console.log(error)
    }
  }

  const zeraCampos = () => {
    formik.values.logradouro = ''
  }

  // procuraCep(formik.values.cep)
  
  
  return (
    <>
    <h1>Busque seu endereço</h1>
    <form style={{display: 'flex', flexDirection: 'column', width: '350px', gap:'5px'}}onSubmit={formik.handleSubmit}>
      <label htmlFor="cep">cep</label>
      <IMaskInput type="text"
      id="cep"
      name="cep"
      mask="00000-000"
      onChange={formik.handleChange}
      onBlur={procuraCep}
      onKeyDown={zeraCampos} 
      value={formik.values.cep}
      />
      <label htmlFor="rua">Tipo</label>
      <select name="tipo" id="tipo" onBlur={formik.handleChange}>
        <option value=''></option>
        <option value='COMERCIAL'>Comercial</option>
        <option value='RESIDENCIAL'>Residencial</option>
      </select>
      <label htmlFor="rua">Rua</label>
      <input type="text"
      id="rua"
      name="rua"
      onChange={formik.values.logradouro = rua}
      value={rua}
      />
      <label htmlFor="rua">Número</label>
      <input type="text"
      id="numero"
      name="numero"
      onChange={formik.handleChange}
      value={formik.values.numero}
      />
      <label htmlFor="bairro">Bairro</label>
      <input type="text"
      id="bairro"
      name="bairro"
      onChange={formik.values.bairro = bairro}
      value={bairro}
      />
      <label htmlFor="cidade">Cidade</label>
      <input type="text"
      id="cidade"
      name="cidade"
      onChange={formik.values.cidade = cidade}
      value={cidade}
      />
      <label htmlFor="estado">Estado</label>
      <input type="text"
      id="estado"
      name="estado"
      onChange={formik.values.estado = estado}
      value={estado}
      />
      <label htmlFor="pais">País</label>
      <input type="text"
      id="pais"
      name="pais"
      onChange={formik.handleChange}
      value={formik.values.pais}
      />
      <label htmlFor="complemento">Complemento</label>
      <input type="text"
      id="complemento"
      name="complemento"
      onChange={formik.handleChange}
      value={formik.values.complemento}
      />
      
      <button type="submit">Cadastrar</button>
    </form>
    </>
  )
}
export default Endereco