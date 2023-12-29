import React from 'react'
import imagenUsuario from '../assets/user.png'
import imagenPassword from '../assets/password.png'
import './styles/Login.css'

const Login = () => {
  return (
    <div className="inputs">
      <div className='userInput'>
        <img src={imagenUsuario} alt="" />
        <input type="text" placeholder='Usuario' label="Usuario" />
      </div>
      <div className='userInput'>
        <img src={imagenPassword} alt="" />
        <input type="password" placeholder='Contraseña' name="Contraseña" id="" />
      </div>
      <button className='loginButton'>Iniciar Sesion</button>
    </div>
  )
}

export default Login