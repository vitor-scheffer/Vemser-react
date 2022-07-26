import { createContext } from "react";
import api from '../api'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [login, setLogin] = useState(false)

  const navigate = useNavigate();

  const handleLogin = async (user) => {
    try{
      const {data} = await api.post('/auth', user)
      localStorage.setItem('token', data)
      navigate('/usuarios')
      setLogin(true)
    } catch(error){
      console.error(error)
    }
  }
  return (
    <AuthContext.Provider value={{ handleLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}