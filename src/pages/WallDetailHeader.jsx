import React from 'react'
import { selectShoes } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';
const WallDetailHeader = () => {
  const shoes = useSelector(selectShoes);
  const dataName = shoes?.shoesShow?.nombre
  const dataCost = shoes?.shoesShow?.precio
  const dataRef = shoes?.shoesShow?.referencia
  return (
    <div className='WallDetailHeader'>
      <div className="WallDetailHeaderTitle">

        {
          typeof (dataName) === 'undefined' ? 'ZAPATILLA HOMBE PELIKAN' : shoes?.shoesShow?.nombre
        }
      </div>
      <div className="WallDetailHeaderCost">
        {
          typeof (dataCost) === 'undefined' ? '$00.00' : `$ ${shoes?.shoesShow?.precio}`
        }
      </div>
      <div className="WallDetailHeaderCode">
        {
          typeof (dataRef) === 'undefined' ? 'G40' : shoes?.shoesShow?.referencia

        }
      </div>

    </div>
  )
}

export default WallDetailHeader