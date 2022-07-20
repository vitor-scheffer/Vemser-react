import styles from './Nav.module.css';
import {Link} from 'react-router-dom'

const Nav = ({val1, val2, val3}) => {
  return (
    <div className={styles}>
    <nav>
      <ul>
        <li>
          <Link to="/">{val1}</Link>
          </li>
        <li>
          <Link to="/sobre">{val2}</Link>
          </li>
        <li>
          <Link to="/contato">{val3}</Link>
          </li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav