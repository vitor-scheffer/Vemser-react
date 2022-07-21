import Image from "./Image"
import Bio from "./Bio"
import Repos from "./Repos"
import styles from "./Home.module.css"

const Home = ({user}) => {
  return (
    <section className="container section">
      <div>
        <Image image={user.avatar_url}/>
        <Bio username={user.login} followers={user.followers} following={user.following} job={user.company} local={user.location} bio={user.bio} join={user.created_at}/>
      </div>
      <Repos title='Principais Repositórios' link={user}/>
    </section>
  )
}
export default Home