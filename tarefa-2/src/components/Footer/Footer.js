import styles from './Footer.module.css';
import Socials from './Socials'

const Footer = ({user}) => {
  return (
    <footer className="container">
       <h1>&lt;/ {user.name}&gt;</h1>
       <Socials link={user.html_url}/>
    </footer>
  )
}

export default Footer