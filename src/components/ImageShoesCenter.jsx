import React from 'react'
import shoesPrueba from '../assets/img/11.jpg'
import { selectShoes } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';


const ImageShoesCenter = () => {
    const shoes = useSelector(selectShoes);

    return (
        <img src={shoes?.shoesShow.length == 0 ? shoesPrueba : require(`../assets/img/${shoes?.shoesShow?.foto}`)
        } className="imgShoesCenter" alt="" srcset="" />
    )
}

export default ImageShoesCenter