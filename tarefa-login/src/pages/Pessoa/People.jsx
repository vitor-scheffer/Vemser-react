import { useEffect, useState } from 'react';
import apiDBC from '../../Services/apiDBC'
import FlatList from '../../components/FlatList/FlatList'
import { useNavigate } from 'react-router-dom'
import NavBarLeft from '../../components/NavBar/NavBar';
import { Card } from '../../components/Card/Card'
import { Button } from '../../components/Button/Button'
import { Section } from '../../components/Section/Section'
import { ContainerPeople } from './People.styled';
import { Tittle } from '../../components/Fonts/Fonts';
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
      <div>
        <Tittle>Pessoas</Tittle>
      </div>
      <Card width="100%" height="100%">
      <ContainerPeople>
        <div>
          <h1>Colaboradores</h1>
          <Button onClick={handleCreate}>Cadastrar</Button>
        </div>
        <FlatList list={pessoas} setup={setup}/>
      </ContainerPeople>
      </Card>
    </Section>
  )
}
export default People