import React, { useState } from 'react'

import { selectShoes, productForPay } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';


const ButtonSend = () => {
    const dispatch = useDispatch();

    const shoes = useSelector(selectShoes);
    const shoesShow = shoes?.shoesShow

    const send = (item) => {
        dispatch(productForPay(item))
    }
    return (
        <div>

            {
                <div
                    onClick={() => send(shoes?.shoesShow)}
                >AÑADIR AL CARRITO</div>

            }

        </div>

    )
}

export default ButtonSend