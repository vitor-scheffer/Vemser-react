import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'

function App() {
  const Setup = async () => {
    try {
      let {data} = await axios.get('https://api.github.com/users/vitor-scheffer')
     console.log(data)
    } catch (e) {
      console.log(e)
    }
     
  }

  useEffect(() => {
    Setup()
  },[])

  return (
    <>
    <Header />
    <Home />
    <Footer />
    </>
  );
}

export default App;
