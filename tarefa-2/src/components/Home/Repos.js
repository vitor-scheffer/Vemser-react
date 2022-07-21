import {useEffect, useState} from 'react'
import axios from 'axios'
import styles from './Home.module.css';


const Repos = ({title}) => {
  const [Repos, setRepos] = useState([])
  
  const Setup = async () => {
    try {
      let {data} = await axios.get('https://api.github.com/users/vitor-scheffer/repos')
      setRepos(data)
      return 
    } catch (e) {
      console.log(e)
    }
  }
  const urls = Repos.map(e => e.html_url)
  const nomes = Repos.map(e => e.name)


  useEffect(() => {
    Setup()
  },[])


  return (
    <div className="card card-lg">
       <h1>{title}</h1>
       <div className={styles.repos}>
        <div>
          <div className="card-lg card-sm"><a href={urls[2]} target="_blank"><span>{nomes[2]}</span></a></div>
          <div className="card-lg card-sm"><a href={urls[8]} target="_blank"><span>{nomes[8]}</span></a></div>
          <div className="card-lg card-sm"><a href={urls[4]} target="_blank"><span>{nomes[4]}</span></a></div>
        </div>
        <div>
          <div className="card-lg card-sm"><a href={urls[5]} target="_blank"><span>{nomes[5]}</span></a></div>
          <div className="card-lg card-sm"><a href={urls[6]} target="_blank"><span>{nomes[6]}</span></a></div>
          <div className="card-lg card-sm"><a href={urls[7]} target="_blank"><span>{nomes[7]}</span></a></div>
        </div>
       </div>

    </div>
  )
}

export default Repos