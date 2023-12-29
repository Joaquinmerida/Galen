import React from 'react'
import imagenLogo from '../assets/LogoGalen.png'
import './styles/Logo.css'

const Logo = () => {
return (
    <>
        <img alt="Logo de Galen" className='logo' src={imagenLogo}/>
    </>
)
}

export default Logo