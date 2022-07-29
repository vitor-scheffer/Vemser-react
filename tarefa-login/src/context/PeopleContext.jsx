import { createContext } from "react";
import apiDBC from '../Services/apiDBC'

const PeopleContext = createContext();

const PeopleProvider = ({children}) => {
  const handleRegister = async (newPeople, setup) => {
    try {
      await apiDBC.post('/pessoa', newPeople)
      alert('cadastrado com sucesso')
      setup()
    } catch (error) {
      console.log(error)
    }
  }

  const handleUpdate = async (newPeople, id, setup, setIsUpdate) => {
    let idPessoa = id
    try {
      await apiDBC.put(`/pessoa/${idPessoa}`, newPeople)
      window.location.href = '/pessoa';
      setup()
      setIsUpdate(false)
      alert('editado com sucesso')
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <PeopleContext.Provider value={{ handleRegister, handleUpdate }}>
      {children}
    </PeopleContext.Provider>
  )
}
export {PeopleContext, PeopleProvider}