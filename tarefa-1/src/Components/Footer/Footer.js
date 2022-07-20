import Nav from '../Header/Nav'
import Address from './Address'
import styles from './Footer.module.css'


const Footer = () => {
  return (
    <footer >
      <div className={styles.container}>
        <Nav val1='Home' val2='Sobre' val3='Contato'/>
        <Address value='AV. Andarai 531 - Porto Alegre'/>
      </div>
    </footer>
  )
}

export default Footer