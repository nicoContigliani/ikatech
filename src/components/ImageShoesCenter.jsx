import React from 'react'
import shoesPrueba from '../assets/img/11.jpg'
import { selectShoes } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';


const ImageShoesCenter = () => {
    const shoes = useSelector(selectShoes);

    return (
        <img src={shoes?.shoesShow.length == 0 ? shoesPrueba : shoes?.shoesShow[0]} className="imgShoesCenter" alt="" srcset="" />
    )
}

export default ImageShoesCenter