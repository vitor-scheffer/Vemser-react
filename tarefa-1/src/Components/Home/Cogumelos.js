import Cogumelo from '../img/cogumelo.jpg'
import styles from './Cogumelos.module.css'

const Cogumelos = ({c1, c2, c3}) => {
  return (
    <div className={styles.cogumelos}>
      <div className="card">
        <img src={Cogumelo} alt="Cogumelo do Mario" />
        <span>{c1}</span>

      </div>
      <div className="card">
        <img src={Cogumelo} alt="Cogumelo do Mario" />
        <span>{c2}</span>

      </div>
      <div className="card">
        <img src={Cogumelo} alt="Cogumelo do Mario" />
        <span>{c3}</span>

      </div>
    </div>
    
  )

}

export default Cogumelos