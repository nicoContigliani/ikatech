import React from 'react'
import { selectShoes } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';
const Leyend = () => {
    const shoes = useSelector(selectShoes);

    const text = 'HUSHPUPPIESCO /CALZADO/ZAPATILLA HOMBRES  PELIKAN'
    const data = shoes?.shoesShow?.nombre
    return (
        <><br />
            <div className='leyend'>{typeof (data) === 'undefined' ? 'HUSHPUPPIESCO /CALZADO/ZAPATILLA HOMBRES  PELIKAN' : `HUSHPUPPIESCO /CALZADO/ZAPATILLA HOMBRES/ ${shoes?.shoesShow?.nombre}`}</div>
        </>
    )
}

export default Leyend