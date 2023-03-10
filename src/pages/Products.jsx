import React from 'react'

import shoesPrueba from '../assets/img/11.jpg'
import Shoe from '../features/shoes/Shoe'
import ImageShoesCenter from '../components/ImageShoesCenter'
import MiniCartShop from '../components/MiniCartShop'
import Leyend from './Leyend'
import WallDetailHeader from '../pages/WallDetailHeader'
import WallDetaillColor from './walletDetails/WallDetaillColor'
import Zice from '../pages/walletDetails/Zice'
import ButtonSend from '../components/ButtonSend'
import Caroursel from '../components/Caroursel'


const Products = () => {
    return (
        <>
            <div className="wrapper">
                <Leyend />
                <div className='wall'>
                    <div className="imageShoesCenter">
                        <ImageShoesCenter />


                    </div>


                    <div className="wallAll">

                        <MiniCartShop />
                    </div>

                </div>

                <div className='wallDetail'>

                    <WallDetailHeader />
                    <WallDetaillColor />
                    <Zice />

                    <div className='guiaSice'>
                        GUIA DE TALLAS
                    </div>
                    <div className="ButtonSend">
                        <ButtonSend />
                    </div>



                </div>
                <hr />
                <hr />
            </div>

            <div className='leyendDetailProduct'>
                DETALLE DEL PRODUCTO
            </div>
            <hr className='hrDetalleProducto' />
            <div className="texts">
                Dictumst eu ligula aenean viverra vel neque cursus augue. Praesent aliquet varius praesent neque eu ut fringilla ipsum. Metus ac consequat at aptent neque neque amet ornare luctus faucibus. Nibh consectetur tempus sodales laoreet euismod litora lorem rhoncus auctor cum pharetra mauris. Duis vehicula elementum parturient nullam dis aenean ullamcorper orci phasellus mollis quisque! Donec elit platea inceptos justo justo tristique morbi senectus sed suscipit. Hac condimentum gravida lectus euismod nec libero sit ac erat mus cubilia nisi. Morbi aenean, dignissim?

            </div>
            <div className='leyendDetailProduct'>
                TECNOLOGIAS
            </div>
            <hr className='hrDetalleProducto' />
            <div className="texts">
                Dictumst eu ligula aenean viverra vel neque cursus augue. Praesent aliquet varius praesent neque eu ut fringilla ipsum. Metus ac consequat at aptent neque neque amet ornare luctus faucibus. Nibh consectetur tempus sodales laoreet euismod litora lorem rhoncus auctor cum pharetra mauris. Duis vehicula elementum parturient nullam dis aenean ullamcorper orci phasellus mollis quisque! Donec elit platea inceptos justo justo tristique morbi senectus sed suscipit. Hac condimentum gravida lectus euismod nec libero sit ac erat mus cubilia nisi. Morbi aenean, dignissim?

            </div>
            <div className="divisor">
                <div className="container">
                    COMPLETA TU LOOK

                </div>
            </div>

            <div className='strucutureCoursel'>
                <Caroursel />
            </div>
            <div className='strucutureCoursel'>
                <Caroursel />
            </div>
            <br />
            <div className='titleBody'>
                @HUSHPUPPIESCO <br />
            </div>
            <footer>






                <div className="container">

                    <div className="wrapper">
                        <div class="flex-item1">
                            <strong> Servicio Al cliente</strong> <br />
                            CONTACTENOS <br />
                            CAMBIOS Y DEVOLUCIONES <br />
                            POLITICA DE LA TIENDA <br />
                            POLITICA DE DATOS
                        </div>
                        <div class="flex-item1">   <strong> MI CUENTA</strong> <br />
                            MIS PEDIDOS <br />
                            CAMBIOS Y DEVOLUCIONES <br />

                        </div>
                        <div class="flex-item1">
                            <strong>RECURSOS</strong> <br />
                            TIENDAS <br />
                            DEVOLUCIONES <br />

                        </div>
                        <div class="flex-item1">   <strong> NEWSLATTER</strong> <br />
                            INSCRIBITE PARA SER EL PRIMER EN RECIBIR NUESTRAS NOTICIAS <br />

                            <input type="text" /> </div>

                    </div>
                </div>
            </footer>


        </>
    )
}

export default Products