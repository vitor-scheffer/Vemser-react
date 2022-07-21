import styles from './Header.module.css';

const Header = ({user}) => {
  
  return (
    <header className="container">
        <h1>&lt;{user.name}&gt;</h1>
    </header>
  )
}

export default Header