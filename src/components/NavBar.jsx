import React from 'react'
import MapImage from '../assets/Map.png'
import Review from '../assets/Review.png'
import Settings from '../assets/Settings.png'
import './styles/NavBar.css'

const NavBar = () => {
  return (
    <div className="navWrapper">
        <button className="left">
            <img src={Review} alt="Imagen de unos globos de texto" />
        </button>
        <button>
            <img src={MapImage} alt="Imagen de un mapa" />
        </button>
        <button className="rig">
            <img src={Settings} alt="Imagen de una tuerca de ajustes" />
        </button>
    </div>
  )
}

export default NavBar