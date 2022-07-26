import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
import Users from './pages/Users'

const Routers = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route exact path="/" element={<Login />}></Route>
          <Route path="/usuarios" element={<Users />}></Route>
        </Routes>
      </AuthProvider>
  </BrowserRouter>

  )
}

export default Routers