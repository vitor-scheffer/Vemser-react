import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Users from './pages/Users'
import Endereco from './pages/Endereco'
import Pessoa from './pages/Pessoa'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'


const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/usuarios" element={<Users />}></Route>
          <Route path="/endereco" element={<Endereco />}></Route>
          <Route path="/pessoa" element={<Pessoa />}></Route>
        </Routes>
        <Footer />
      </AuthProvider>
  </BrowserRouter>

  )
}

export default Routers