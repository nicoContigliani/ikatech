import React from 'react'
import NavsBar from '../../components/NavsBar'
import Buscador from '../../components/Buscador'
import imgPerro from '../../assets/img/12.jpg'



const Headers = () => {
  return (
    <>
      <div className="LineHeader"></div>
      <div className="LineHeader2"></div>
      <Buscador /><br />
      <img src={imgPerro} alt="" className="logo" />
      <div className="title">
        Hush Puppies
      </div>
      <NavsBar />
      
    </>
  )
}

export default Headers