import { useFormik } from 'formik'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Endereco = () => {
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

    }
  })

  
  return (
    <>
    <h1>Busque seu endereço</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">cep</label>
      <input type="text"
      id="login"
      name="login"
      onChange={formik.handleChange}
      value={formik.values.login}
      />
      <label htmlFor="senha">Rua</label>
      <input type="password"
      id="senha"
      name="senha"
      onChange={formik.handleChange}
      value={formik.values.senha}
      />
      <label htmlFor="senha">Complemento</label>
      <input type="password"
      id="senha"
      name="senha"
      onChange={formik.handleChange}
      value={formik.values.senha}
      />
      <label htmlFor="senha">Bairro</label>
      <input type="password"
      id="senha"
      name="senha"
      onChange={formik.handleChange}
      value={formik.values.senha}
      />
      <label htmlFor="senha">Cidade</label>
      <input type="password"
      id="senha"
      name="senha"
      onChange={formik.handleChange}
      value={formik.values.senha}
      />
      <label htmlFor="senha">Estado</label>
      <input type="password"
      id="senha"
      name="senha"
      onChange={formik.handleChange}
      value={formik.values.senha}
      />
      
      <button type="submit">Cadastrar</button>
    </form>
    </>
  )
}
export default Endereco