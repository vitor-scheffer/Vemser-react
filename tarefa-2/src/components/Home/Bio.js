import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons'
import {faCalendarDays} from '@fortawesome/free-solid-svg-icons'

import styles from './Home.module.css'

const Bio = ({username, followers, following, job, bio, local, join }) => {
  return (
    <div className="card">
      <p>Username: {username}</p>
      <div className={styles.follows}>
        <small><FontAwesomeIcon icon={faUsers} />Seguindo: {following}</small>
        <small>Seguidores: {followers}</small>
      </div>
      <small><FontAwesomeIcon icon={faBuilding} />{job}</small>
      <small><FontAwesomeIcon icon={faEarthAmericas} />{local}</small>
      <small><FontAwesomeIcon icon={faCalendarDays} />{join}</small>
      <p>{bio}</p>
    </div>
  )
}

export default Bio