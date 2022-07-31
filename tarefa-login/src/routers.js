import { BrowserRouter, Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { PeopleProvider } from './context/PeopleContext';
import { useContext } from 'react'
import Login from './pages/Login'
import Users from './pages/Users'
import Endereco from './pages/Endereco'
import People from './pages/Pessoa/People'
import NotFound from './components/NotFound/NotFound'
import PeopleForm from './pages/Pessoa/PeopleForm'

const PrivateRoute = () => {
  const {token} = useContext(AuthContext)

  return (
    token ? <Outlet/> : <Navigate to="/"/>
  )
}

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
      <PeopleProvider>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/usuarios" element={<Users />}></Route>
          <Route element={<PrivateRoute />}>
            <Route path="/endereco" element={<Endereco />}></Route>
            <Route path="/endereco/:id" element={<Endereco />}></Route>
            <Route path="/pessoa" element={<People />}></Route>
            <Route path="/cadastro" element={<PeopleForm />}></Route>
            <Route path="/editar-cadastro/:id" element={<PeopleForm />}></Route>
          </Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        </PeopleProvider>
      </AuthProvider>
  </BrowserRouter>

  )
}

export default Routers