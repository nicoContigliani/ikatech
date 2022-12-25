import React from 'react'

import shoesPrueba from '../assets/img/11.jpg'
import Shoe from '../features/shoes/Shoe'
import ImageShoesCenter from '../components/ImageShoesCenter'
import MiniCartShop from '../components/MiniCartShop'




const Products = () => {
    return (
        <>
            <div className="wrapper">
                <div className='wall'>
                    <div className="imageShoesCenter">
                            <ImageShoesCenter />


                    </div>


                    <div className="wallAll">
                        <MiniCartShop />
                    </div>

                </div>
                <div className='wallDetail'>Two</div>

            </div>

        </>
    )
}

export default Products