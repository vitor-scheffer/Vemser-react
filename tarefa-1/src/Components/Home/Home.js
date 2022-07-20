import Cogumelos from "./Cogumelos"
import Title from "./Title"
import About from './About';
import Map from './Map';

const Home = () => {
  return (
    <section>
      <Title title='Estamos aprendendo React.js com o melhor professor de todos'/>
      <Cogumelos c1='cogumelo 1' c2='cogumelo 2' c3='cogumelo 3'/>
      <About />
      <Map title='Endereço da DBC'/>
    </section>
  )
}

export default Home