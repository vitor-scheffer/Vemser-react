import { useFormik } from 'formik'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      login: '',
      senha: ''
    },
    onSubmit: values => {
      handleLogin(values)
    }
  })

  
  return (
    <>
    <h1>Acesse sua conta</h1>
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
      <button type="submit" onSubmit={formik.onSubmit}>Entrar</button>
    </form>
    </>
  )
}
export default Login