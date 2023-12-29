import React, { useState } from 'react';
import './styles/MapButtons.css'
import DarkCart from '../assets/DarkCart.png'
import WhiteCart from '../assets/WhiteCart.png'
import DarkFork from '../assets/DarkFork.png'
import WhiteFork from '../assets/WhiteFork.png'


function MapButtons() {
    const [isRestaurantActive, setIsRestaurantActive] = useState(true);

    return (
        <div className='mapButtons'>
            <button
                onClick={() => setIsRestaurantActive(true)}
                style={{ backgroundColor: isRestaurantActive ? '#122B39' : 'white',
                color: isRestaurantActive ? '#F9E8C5' :  '#122B39'}}
            >
                Restaurante
                <img src={isRestaurantActive? WhiteFork : DarkFork} alt="" />
            </button>
            <button
                onClick={() => setIsRestaurantActive(false)}
                style={{ backgroundColor: !isRestaurantActive ? '#122B39':'white' ,
                color: isRestaurantActive ? '#122B39' : '#F9E8C5'}}
            >
                Tiendas
                <img src={!isRestaurantActive ? WhiteCart : DarkCart} alt="" />
            </button>
        </div>
    );
}

export default MapButtons;
