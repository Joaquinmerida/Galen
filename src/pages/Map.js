import React from 'react'
import NavBar from '../components/NavBar'
import MapView from '../components/MapView'
import './styles/Map.css'
import MapButtons from '../components/MapButtons'

const Map = () => {
  return (
    <div className='mapWrapper'>
      <NavBar />
      <MapView />
      <MapButtons />
    </div>
  )
}

export default Map