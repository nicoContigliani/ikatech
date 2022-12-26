import React from 'react'

import { selectShoes, productForPay } from '../../src/features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';
// import shoesPrueba from '../../src/assets/img/1.jpg'
const shoesPrueba = require('../assets/img/1.jpg')




const CartShop = ({ data }) => {
    const dispatch = useDispatch();

    const send = (item) => {
        console.log("🚀 ~ file: CartShop.jsx:15 ~ send ~ item", item)
        dispatch(productForPay(item))
    }
    return (
        <div className='card'>
            <div className="imgCard">
                {

                    <img src={data.length == 0 ? shoesPrueba : require(`../assets/img/${data?.foto}`)
                    } className="imgCards" alt="" srcset="" />
                }

            </div>
            <div className='miniShopCart2'>
                <br />

                <img src={data.length == 0 ? shoesPrueba : require(`../assets/img/${data?.foto}`)
                } className="imgCards" alt="" srcset="" />

            </div>
            <br />
            <div className="detailCard">

                {data.nombre} <br />
                ${data.precio} <br />
                <div className='ButtonSendModal'
                    onClick={() => send(data)}
                >
                    AÑADIR AL CARRITO

                </div>

            </div>


        </div>
    )
}

export default CartShop