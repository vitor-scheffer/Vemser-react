import { createContext } from "react";
import apiDBC from '../Services/apiDBC'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom'

const PeopleContext = createContext();

const PeopleProvider = ({children}) => {
  const navigate = useNavigate()
  
  const handleRegister = async (newPeople, setup) => {
    const notify = () => toast("Cadastro realizado com sucesso!");
    try {
      await apiDBC.post('/pessoa', newPeople)
      setup()
      notify()
      navigate('/pessoa')
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (newPeople, id, setup, setIsUpdate) => {
    const notify = () => toast("Usuário modificado com sucesso!");
    let idPessoa = id
    try {
      await apiDBC.put(`/pessoa/${idPessoa}`, newPeople)
      notify()
      setup()
      setIsUpdate(false)
      navigate('/pessoa')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PeopleContext.Provider value={{ handleRegister, handleUpdate }}>
      {children}
      <ToastContainer />
    </PeopleContext.Provider>
  )
}
export {PeopleContext, PeopleProvider}