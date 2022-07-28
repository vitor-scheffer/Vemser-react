import { useFormik } from 'formik'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ContainerLogin } from './Login.styled'

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
    <ContainerLogin>
      <div>
        <form onSubmit={formik.handleSubmit}>
          <h1>Log In to Dashboard Kit</h1>
          <label htmlFor="login">EMAIL</label>
          <input type="text"
          placeholder="Email address"
          id="login"
          name="login"
          onChange={formik.handleChange}
          value={formik.values.login}
          />
          <label htmlFor="senha">PASSWORD</label>
          <input type="password"
          placeholder="Password"
          id="senha"
          name="senha"
          onChange={formik.handleChange}
          value={formik.values.senha}
          />
          <button type="submit" onSubmit={formik.onSubmit}>Log In</button>
        </form>
      </div>
    </ContainerLogin>
  )
}
export default Login