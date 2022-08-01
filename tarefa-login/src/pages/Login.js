import { useFormik } from 'formik'
import { useContext } from 'react'
import * as Yup from 'yup'
import { AuthContext } from '../context/AuthContext'
import { ContainerLogin } from './Login.styled'
import { Link } from 'react-router-dom'
import Logo from '../components/Logo'
import { Subtitle, Tittle, TextSm } from '../components/Fonts/Fonts'
import { Card } from '../components/Card/Card'
import { colorHoverMenu, colorPrimary } from '../consts'
import { Button } from '../components/Button/Button'

const validate = values => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Insira seu email.';
  }

  if (!values.senha) {
    errors.senha = 'Insira sua senha.';
  } 

  return errors;
};

const Login = () => {
  const { handleLogin } = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      login: '',
      senha: ''
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      handleLogin(values)
      resetForm()
    }
  })

  
  return (
    <ContainerLogin>
      <Card height='582px' width='380px'>
        <Logo />
        <Subtitle>Dashboard Kit</Subtitle>
        <Tittle>Log In to Dashboard Kit</Tittle>
        <TextSm color={colorHoverMenu}>Enter your email and password below</TextSm>
        <form onSubmit={formik.handleSubmit}>
          <div>
          <label htmlFor="login"><TextSm color={colorHoverMenu} fontSize='12px'>EMAIL</TextSm></label>
          <input type="text"
            placeholder="Email address"
            id="login"
            name="login"
            onChange={formik.handleChange}
            value={formik.values.login}
          />
          {formik.errors.login ? <div>{formik.errors.login}</div> : null}
          </div>
          <div>
          <label htmlFor="senha"><TextSm color={colorHoverMenu} fontSize='12px'>PASSWORD</TextSm></label>
          <input type="password"
            placeholder="Password"
            id="senha"
            name="senha"
            onChange={formik.handleChange}
            value={formik.values.senha}
          />
          {formik.errors.senha ? <div>{formik.errors.senha}</div> : null}
          </div>
          <Button width='100%'>Log In</Button>     
        </form>
        <div>
          <TextSm color={colorHoverMenu}>Don’t have an account?</TextSm>
          <Link to='/usuarios'><TextSm color={colorPrimary}>Sign up</TextSm></Link>
        </div> 
      </Card>
    </ContainerLogin>
  )
}

export default Login