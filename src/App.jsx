import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Expereince from './Expereince'
import Home from './Home'
import { TextContext } from './context'

function App() {
  const [title,setTitle] = useState("title")
  return (
    <>
    <TextContext.Provider value={{title,setTitle}}>
    <Home />
    <Expereince />
    </TextContext.Provider>
    </>
  )
}

export default App
