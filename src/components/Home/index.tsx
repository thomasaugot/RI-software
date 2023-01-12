import React from 'react'
import {useNavigate} from 'react-router-dom'
const Home = () => {
    const navigate = useNavigate()
    const logout = () => {
        localStorage.removeItem("token")
        localStorage.removeItem("isLogged")
        navigate('/login')
    }
  return (
    <div style={{
        height: '100vh',
        display:'flex',
        alignItems:'center'
    }}>
      <div style={{margin:'0 auto'}}>
      <h1>Home Page</h1>
      <button onClick={logout}>log out</button>
      </div>
      
    </div>
  )
}

export default Home
