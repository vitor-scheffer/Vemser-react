import {useEffect, useState} from 'react'
import axios from 'axios'
import './App.css';

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
    <div>
      
    </div>
  );
}

export default App;
