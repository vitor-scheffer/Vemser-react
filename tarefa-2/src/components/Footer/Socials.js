import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import styles from './Socials.module.css'

const Socials = () => {
  return (
    <div className={styles.icons}>
      <FontAwesomeIcon icon={faGithub} />
      <FontAwesomeIcon icon={faTwitter} />
    </div>
  )
}
export default Socials