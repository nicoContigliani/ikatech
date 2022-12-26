import React from 'react'
// import shoesPrueba from '../../src/assets/img/1.jpg'
const shoesPrueba = require('../assets/img/1.jpg')
const CartShop = ({ data }) => {
    console.log("🚀 ~ file: CartShop.jsx:5 ~ CartShop ~ data", data)
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

                nombre de las zapatillas:{data.nombre}
                precio:{data.precio}
                <div className='ButtonSendModal'>
                    botón de seleccion

                </div>

            </div>


        </div>
    )
}

export default CartShop