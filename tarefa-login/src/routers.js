import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import Login from './pages/Login'
import Users from './pages/Users'
import Endereco from './pages/Endereco'
import People from './pages/Pessoa/People'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'
import PeopleForm from './pages/Pessoa/PeopleForm'


const Routers = () => {
  const { auth } = useContext(AuthContext)
  console.log(!auth)
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          {!auth ? (
            <>
              <Route exact path="/" element={<Login />}></Route>
              <Route path="/usuarios" element={<Users />}></Route>
            </>
            ) : (
            <>
              <Route path="/endereco" element={<Endereco />}></Route>
              <Route path="/pessoa" element={<People />}></Route>
              <Route path="/cadastro" element={<PeopleForm />}></Route>
              <Route path="/editar-cadastro/:id" element={<PeopleForm />}></Route>
            </>
            )
          }
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
      </AuthProvider>
  </BrowserRouter>

  )
}

export default Routers