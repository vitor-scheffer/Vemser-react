import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Sobre from './Components/Sobre/Sobre'
import Contato from './Components/Contato/Contato'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function App() {
  return (
    <>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Home/>}>
          
        </Route>
        <Route path='/sobre' element={<Sobre title='Sobre a DBC' />}>
         
        </Route>
        <Route path='/contato' element={<Contato title='Contato' />}>
          
        </Route>
      </Routes>
      <Footer/>
    </Router>
      
      
      
    </>
  );
}

export default App;
