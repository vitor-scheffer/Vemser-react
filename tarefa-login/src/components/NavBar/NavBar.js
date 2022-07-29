import Logo from '../Logo'
import Menu from './Menu'
import { NavBar } from './NavBar.styled'
import {Subtitle} from '../Fonts/Fonts'

const NavBarLeft = () => {
  return (
    <NavBar>
      <div>
        <Logo />
        <Subtitle>Dashboard Kit</Subtitle>
      </div>
      <Menu />
    </NavBar>
  )
}
export default NavBarLeft