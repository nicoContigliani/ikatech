import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectShoes } from './shoeSlice';

const Shoe = () => {
    const shoes = useSelector(selectShoes);
    console.log("🚀 ~ file: Shoe.js:7 ~ Shoe ~ shoes", shoes)

  return (
    <div>Shoe</div>
  )
}

export default Shoe