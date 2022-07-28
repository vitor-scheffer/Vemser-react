import Logo from './Logo'
import Menu from './Menu'
import {HeaderContainer} from './Header.styled'

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <Menu />
    </HeaderContainer>
  )
}
export default Header