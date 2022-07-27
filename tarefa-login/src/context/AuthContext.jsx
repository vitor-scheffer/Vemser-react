import { createContext } from "react";
import apiDBC from '../Services/apiDBC'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [login, setLogin] = useState(false)

  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try{
      const {data} = await apiDBC.post('/auth', user)
      localStorage.setItem('token', data)
      navigate('/pessoa')
      setLogin(true)
    } catch(error){
      console.error(error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/')
  }

  const handleSignUp = async (user) => {
    try {
      await apiDBC.post('/auth/create', user)
      alert('Usuário cadastrado com sucesso')
      navigate('/')
    } catch(error){
      console.log(error)
    }
  }

  const handleEndereco = async (end) => {
    try{
      await apiDBC.post('endereco/create', end)
    } catch(error){
      console.log(error)
    }
  }
  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}