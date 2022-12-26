/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';

import {
    showImage,
} from '../features/shoes/shoeSlice';
const url = '../assets/img/';

const data = [

    {
        "nombre": "Zapato azul4",
        "precio": 5000,
        "referencia": "G40",
        "foto": "14.jpg"
    },
    {
        "nombre": "Zapato azul5",
        "precio": 5000,
        "referencia": "G40",
        "foto": "15.jpg"
    },
    {
        "nombre": "Zapato azul6",
        "precio": 5000,
        "referencia": "G40",
        "foto": "16.jpg"
    },
    {
        "nombre": "Zapato azul7",
        "precio": 5000,
        "referencia": "G40",
        "foto": "17.jpg"
    },
    {
        "nombre": "Zapato azul8",
        "precio": 5000,
        "referencia": "G40",
        "foto": "18.jpg"
    },
    {
        "nombre": "Zapato azul9",
        "precio": 5000,
        "referencia": "G40",
        "foto": "19.jpg"
    }
]

const MiniCartShop = () => {
    const dispatch = useDispatch();

    const ventana = (item) => {
        dispatch(showImage(item))
    }




    return (
        <div className='miniShopCart'>


            {
                data.map(item =>
                    <img key={item.nombre} onClick={() => ventana(item)} className='miniShopCartImage' src={require(`../assets/img/${item.foto}`)} />)
            }
        </div>
    )
}

export default MiniCartShop