import React from 'react'
import { selectShoes } from '../../features/shoes/shoeSlice'
import { useSelector, useDispatch } from 'react-redux';
import shoesPrueba from '../../assets/img/11.jpg'



const WallDetaillColor = () => {

    const shoes = useSelector(selectShoes);


    return (
        <div className='WallDetailColor'>
            color

            <img src={shoes?.shoesShow.length == 0 ? shoesPrueba : require(`../../assets/img/${shoes?.shoesShow?.foto}`)
        } className="imgShoesColor" alt="" srcset="" />

        </div>
    )
}

export default WallDetaillColor