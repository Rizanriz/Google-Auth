import React from 'react'
import { Link } from 'react-router-dom'

function Home() {

    const logout = () =>{
        localStorage.clear()
        window.location.reload()
    }
  return (
    <div>
        home
        <button onClick={logout}><Link to={'/'}>Logout</Link></button>
    </div>
  )
}

export default Home