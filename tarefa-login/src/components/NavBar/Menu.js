import {useNavigate} from 'react-router-dom'
import {useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import Item from './Item'
import { Button } from '../Button/Button'

const Menu = () => {
  const {auth, handleLogout} = useContext(AuthContext)
  return (
    <>
    <nav>
      <ul>
        {!auth ? (
          <>
          </>
        )
        : (
          <>
          <Item name="Endereço" url="/endereco"/>
          <Item name="Pessoa" url="/pessoa"/>
          </>
        )
      }
      </ul>
    </nav>
    {auth && <Button onClick={handleLogout}>Sair</Button> }
    </>
     
  )
}
export default Menu