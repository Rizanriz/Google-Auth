
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './googleSignin/Home'
import Animationlog from './animation/Animationlog'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Animationlog/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
