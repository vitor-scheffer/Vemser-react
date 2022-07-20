import Video from './Video';
import Lorem from './Lorem';
import styles from './Sobre.module.css';

const Sobre = ({title}) => {
  return (
    <section className={styles.container}>
      <h2>{title}</h2>
      <Video />
      <Lorem />
    </section>
    
  )
}

export default Sobre