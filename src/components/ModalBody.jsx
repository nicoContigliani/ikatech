import React, { useState } from 'react'


const ModalBody = ({ data }) => {
   


    const pay = (pay) => {
        alert(`Forma de pagos`)
    }
    return (
        <div className='modals'>



            <br />

            {/* <ul>
                {
                    data.map((item, index) =>
                        <li key={index}>
                            Nombre:{item?.nombre} <br />
                            Precio:{item?.precio} <br />
                            Referencia:{item?.referencia} <br />

                            <img src={require(`../assets/img/${item?.foto}`)} className="imgShoesCenter" alt="" srcset="" />
                        </li>
                    )
                }
            </ul> */}


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