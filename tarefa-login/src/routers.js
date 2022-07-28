import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider, AuthContext } from './context/AuthContext'
import { useContext } from 'react'
import Login from './pages/Login'
import Users from './pages/Users'
import Endereco from './pages/Endereco'
import Pessoa from './pages/Pessoa'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import NotFound from './components/NotFound/NotFound'


const Routers = () => {
  const { auth } = useContext(AuthContext)
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          {!auth ? (
            <>
              <Route exact path="/" element={<Login />}></Route>
              <Route path="/usuarios" element={<Users />}></Route>
            </>
            ): (
            <>
              <Route path="/endereco" element={<Endereco />}></Route>
              <Route path="/pessoa" element={<Pessoa />}></Route>
              <Route path="*" element={<NotFound />}></Route>
            </>
            )
          }
        </Routes>
        <Footer />
      </AuthProvider>
  </BrowserRouter>

  )
}

export default Routers