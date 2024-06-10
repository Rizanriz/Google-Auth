import React from 'react'
import { Link } from 'react-router-dom'
import "../index.css"

function Home() {

    const logout = () =>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <>
    <div className='main'>
        <h2>Welcome to the home page</h2>
        <h3>Nice to meet yo</h3>
        <button onClick={logout}><Link to={'/'}>Logout</Link></button>
    </div>
    </>
  )
}

export default Home