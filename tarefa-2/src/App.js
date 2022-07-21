import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer/Footer'


function App() {
  const [userInfo, setUserInfo] = useState([])
  
  const Setup = async () => {
    try {
      let {data} = await axios.get('https://api.github.com/users/vitor-scheffer')
      setUserInfo(data)
      return 
    } catch (e) {
      console.log(e)
    }
  }



  useEffect(() => {
    Setup()
  },[])

  return (
    <>
    <Header user={userInfo}/>
    <main>
    <Home user={userInfo}/>
    </main>
    <Footer user={userInfo}/>
    </>
  );
}

export default App;
