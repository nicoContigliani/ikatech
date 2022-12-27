import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



import { selectShoes } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';
import ModalBody from './ModalBody';




const ButtonModal = ({ shoes }) => {


    const [open, setOpen] = useState(false);
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);


    return (
        <div className='modalFloat'>

            {(shoes?.shoesSelected)?.length == 0 ? "0 Carro" :
                <div onClick={onOpenModal}> + Carro</div>
            }

            {/* <div onClick={onOpenModal}>{(shoes?.shoesSelected)?.length == 0 ? "0" : "+"} Carro</div> */}
            <Modal open={open} onClose={onCloseModal} center><hr />

                <ModalBody data={shoes?.shoesSelected} />

            </Modal>
        </div>
    )
}

export default ButtonModal