import {useNavigate} from 'react-router-dom'
import {useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import Item from './Item'
import { Button } from '../Button/Button'

const Menu = () => {
  const {handleLogout} = useContext(AuthContext)
  return (
    <>
    <nav>
      <ul>
          <Item name="Endereço" url="/endereco"/>
          <Item name="Pessoa" url="/pessoa"/>
          <Item name="Cadastrar Pessoa" url="/cadastro"/>
      </ul>
    </nav>
    <Button onClick={handleLogout}>Sair</Button>
    </>
     
  )
}
export default Menu