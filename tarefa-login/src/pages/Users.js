import { useFormik } from 'formik'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { ContainerLogin } from './Login.styled'
import { Card } from '../components/Card/Card'
import { Button } from '../components/Button/Button'
import { Subtitle, Tittle, TextSm } from '../components/Fonts/Fonts'
import {colorHoverMenu} from '../consts'
import { ErrorsAlert } from '../components/ErrorsAlert'

const validate = values => {
  const errors = {};
  if (!values.login) {
    errors.login = 'Por favor insira um email.';
  }

  if (!values.senha) {
    errors.senha = 'Por favor insira uma senha.';
  } 

  return errors;
};

const Users = () => {
  const { handleSignUp } = useContext(AuthContext)
  const formik = useFormik({
    initialValues: {
      login: '',
      senha: ''
    },
    validate,
    onSubmit: (values, {resetForm}) => {
      handleSignUp(values)
      resetForm();
    }
  })

  
  return (
    <ContainerLogin>
    <Card width="650px">
      <Tittle>Preencha os campos necessários para o cadastro</Tittle>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="login"><TextSm color={colorHoverMenu} fontSize='12px'>USUÁRIO</TextSm></label>
          <input type="text"
          id="login"
          name="login"
          onChange={formik.handleChange}
          value={formik.values.login}
          />
          {formik.errors.login ? <ErrorsAlert>{formik.errors.login}</ErrorsAlert> : null}
        </div>
        
        <div>
          <label htmlFor="senha"><TextSm color={colorHoverMenu} fontSize='12px'>SENHA</TextSm></label>
          <input type="password"
          id="senha"
          name="senha"
          onChange={formik.handleChange}
          value={formik.values.senha}
          />
          {formik.errors.senha ? <ErrorsAlert>{formik.errors.senha}</ErrorsAlert> : null}
        </div>
        <Button type="submit" onSubmit={formik.onSubmit}>Cadastrar</Button>
      </form>
    </Card>
    </ContainerLogin>
  )
}
export default Users