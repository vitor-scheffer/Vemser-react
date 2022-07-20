import styles from './Map.module.css'

const Map = ({title}) => {
  const addressDBC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13847.86701386904!2d-51.14808575!3d-29.80750485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951977775fc4c071%3A0x6de693cbd6b0b5e5!2sDBC%20Company!5e0!3m2!1spt-BR!2sbr!4v1658283524029!5m2!1spt-BR!2sbr"

  return (
    <section className={styles.section}>
      <h3>{title}</h3>
      <iframe className={styles.map} src={addressDBC} width="800" height="600"></iframe>
    </section>
    
  )
}

export default Map;