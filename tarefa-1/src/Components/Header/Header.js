import Logo from './Logo'
import Nav from './Nav'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <Logo titleLogo='Melhores alunos do vem ser de todos os Tempos'/>
      <Nav val1='Home' val2='Sobre' val3='Contato'/>
    </header>
    
  )
}

export default Header
