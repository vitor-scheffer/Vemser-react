import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './Socials.module.css'

const Socials = ({link}) => {
  const linkedin = 'https://www.linkedin.com/in/-vitorscheffer/'
  return (
    <div className={styles.icons}>
      <a href={link} target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
      <a href={linkedin} target="_blank"><FontAwesomeIcon icon={faLinkedin} /></a>
    </div>
  )
}
export default Socials