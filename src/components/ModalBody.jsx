import React, { useState } from 'react'


const ModalBody = ({ data }) => {
   


    const pay = (pay) => {
        alert(`Forma de pagos`)
    }
    return (
        <div className='modals'>
            <br />
            Nombre:{data?.nombre} <br />
            Precio:{data?.precio} <br />
            Referencia:{data?.referencia} <br />
            <img src={require(`../assets/img/${data?.foto}`)} className="imgShoesCenter" alt="" srcset="" />
            <br /><br /><hr />
            <div
                className='ButtonSendModal'
                onClick={() => pay(data)}
            >PAGAR</div>

   


        </div>
    )
}

export default ModalBody