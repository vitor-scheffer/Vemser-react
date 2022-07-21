import styles from './Footer.module.css';
import Socials from './Socials'

const Footer = ({user}) => {
  return (
    <footer className="container">
       <h1>&lt;/ {user.name}&gt;</h1>
       <Socials />
    </footer>
  )
}

export default Footer