import { useFormik } from 'formik'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Users = () => {
  const { handleSignUp } = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      login: '',
      senha: ''
    },
    onSubmit: values => {
      handleSignUp(values)
    }
  })

  
  return (
    <>
    <h1>Preencha os campos necessários para o cadastro</h1>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="login">usuário</label>
      <input type="text"
      id="login"
      name="login"
      onChange={formik.handleChange}
      value={formik.values.login}
      />
      <label htmlFor="senha">senha</label>
      <input type="password"
      id="senha"
      name="senha"
      onChange={formik.handleChange}
      value={formik.values.senha}
      />
      <button type="submit" onSubmit={formik.onSubmit}>Cadastrar</button>
    </form>
    </>
  )
}
export default Users