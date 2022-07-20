import styles from './Nav.module.css';

const Nav = ({val1, val2, val3}) => {
  return (
    <div className={styles}>
    <nav>
      <ul>
        <li><a href="">{val1}</a></li>
        <li><a href="">{val2}</a></li>
        <li><a href="">{val3}</a></li>
      </ul>
    </nav>
    </div>
  )
}

export default Nav