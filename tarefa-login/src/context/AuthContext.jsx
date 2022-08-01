import { useState, useEffect } from 'react'
import { createContext } from "react";
import apiDBC from '../Services/apiDBC'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [token, setToken] = useState(false)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      apiDBC.defaults.headers.common['Authorization'] = token;
      setToken(token)
    }
    setLoading(false);
  },[])

  const handleLogin = async (user) => {
    const notify = () => toast("Seja bem vindo!");
    try{
      const {data: token} = await apiDBC.post('/auth', user)
      localStorage.setItem('token', token)
      apiDBC.defaults.headers.common['Authorization'] = token;
      setToken(token)
      navigate('/pessoa')
      notify()
    } catch(error){
      console.error(error)
    }
  }

  const handleLogout = () => {
    const notify = () => toast("Volte sempre!");
    setToken()
    notify()
    navigate('/')
  }

  const handleSignUp = async (user) => {
    try {
      await apiDBC.post('/auth/create', user)
      alert('Usuário cadastrado com sucesso')
      window.location.href = '/';
    } catch(error){
      console.log(error)
    }
  }

  if(loading) {
    return (
      <h1>Loading</h1>
    )
  }
  return (
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, token }}>
      {children}
      <ToastContainer />
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}