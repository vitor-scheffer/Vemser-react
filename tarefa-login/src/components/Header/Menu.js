import {useNavigate} from 'react-router-dom'
import {useEffect, useContext} from 'react'
import { AuthContext } from '../../context/AuthContext'
import Item from './Item'

const Menu = () => {
  const {auth, handleLogout} = useContext(AuthContext)
  return (
    <nav>
      <ul>
        {!auth ? (
          <>
          <Item name="Login" url="/"/>
          <Item name="Cadastre-se" url="/usuarios"/>
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
      {auth && <button onClick={handleLogout}>Sair</button> }
    </nav>
  )
}
export default Menu