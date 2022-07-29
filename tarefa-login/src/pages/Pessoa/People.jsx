import { useEffect, useState } from 'react';
import apiDBC from '../../Services/apiDBC'
import FlatList from '../../components/FlatList/FlatList'
import { useNavigate } from 'react-router-dom'

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
    <div>
      <h1>Tickets</h1>
      
      <div>
        <button onClick={handleCreate}>Cadastrar</button>
        <h1>Pessoas</h1>
        <FlatList list={pessoas} setup={setup}/>
      </div>

      
    </div>
  )
}
export default People