import { useState, useEffect } from 'react'
import { createContext } from "react";
import apiDBC from '../Services/apiDBC'

const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if(token) {
      apiDBC.defaults.headers.common['Authorization'] = token;
      setAuth(true)
    }
    setLoading(false);
  },[])

  const handleLogin = async (user) => {
    try{
      const {data} = await apiDBC.post('/auth', user)
      localStorage.setItem('token', data)
      apiDBC.defaults.headers.common['Authorization'] = data;
      setAuth(true)
      window.location.href = '/pessoa'
    } catch(error){
      console.error(error)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    apiDBC.defaults.headers.common['Authorization'] = undefined;
    setAuth(false);
    window.location.href = '/';
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
    <AuthContext.Provider value={{ handleLogin, handleLogout, handleSignUp, auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}