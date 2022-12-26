
import React, { useState } from 'react';

import NavsBar from '../../components/NavsBar'
import Buscador from '../../components/Buscador'
import imgPerro from '../../assets/img/12.jpg'
import ButtonModal from '../../components/ButtonModal';


import { selectShoes } from '../../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';



const Headers = () => {

  const shoes = useSelector(selectShoes);
  console.log("🚀 ~ file: Headers.jsx:18 ~ Headers ~ shoes", shoes)



  return (
    <>
      <div className="LineHeader"></div>
      <div className="LineHeader2"></div>
      <Buscador /><br />
      <div className='leyendSendHeader'>
        ENVIO GRATIS PARA PEDIDOS SUPERIORES A $300.000
      </div>
      <div className='buttonCard'>
        <ButtonModal shoes={shoes} />
      </div>


      <img src={imgPerro} alt="" className="logo" />
      <div className="title">
        Hush Puppies
      </div>
      <NavsBar />

    </>
  )
}

export default Headers