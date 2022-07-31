import { useEffect, useState } from 'react';
import apiDBC from '../../Services/apiDBC'
import FlatList from '../../components/FlatList/FlatList'
import { useNavigate } from 'react-router-dom'
import NavBarLeft from '../../components/NavBar/NavBar';
import { Card } from '../../components/Card/Card'
import { Button } from '../../components/Button/Button'
import { Section } from '../../components/Section/Section'

const People = () => {
  const navigate = useNavigate()
  const [pessoas, setPessoas] = useState([])

  const handleCreate = () => {
    navigate('/cadastro')
  }

  const setup = async () => {
    try {
      const { data } = await apiDBC.get('/pessoa?pagina=0&tamanhoDasPaginas=20')
      setPessoas(data.content)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    setup()
  },[])

  return (
    <Section>
      <NavBarLeft />
      <Card height="100%">
      <h1>Tickets</h1>
      
      <div>
        <Button onClick={handleCreate}>Cadastrar</Button>
        <h1>Pessoas</h1>
        <FlatList list={pessoas} setup={setup}/>
      </div>
      </Card>
    </Section>
  )
}
export default People