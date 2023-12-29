import React from 'react'
import Logo from '../components/Logo'
import './styles/Landing.css'
import Login
 from '../components/Login'
const Landing = () => {
return (
    <div className="wrapper">
        <Logo/>
        <h1>Galen</h1>
        <Login/>
    </div>
)
}

export default Landing