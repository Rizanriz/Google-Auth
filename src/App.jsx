
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Signin from './googleSignin/Signin'
import Home from './googleSignin/Home'
// import Animationlog from './animation/Animationlog'

function App() {

  return (
    <>
      <Routes>
        {/* <Route path='/' element={<Animationlog/>}/> */}
        <Route path='/' element={<Signin/>}/>
        <Route path='/home' element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
