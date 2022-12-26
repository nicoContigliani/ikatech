import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';



import { selectShoes } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';
import ModalBody from './ModalBody';




const ButtonModal = ({ shoes }) => {
    console.log("🚀 ~ file: ButtonModal.jsx:16 ~ ButtonModal ~ shoes", shoes)


    const [open, setOpen] = useState(false);
    const [data, setData] = useState([shoes?.shoesShow])
    const [todo, setTodo] = useState([
      
    ])
    console.log("🚀 ~ file: ButtonModal.jsx:20 ~ ButtonModal ~ data", data?.nombre)

    // useEffect(() => {
    //     setData(shoes?.shoesShow)
    // }, [shoes]);

    // console.log((data)?.length)

    const onOpenModal = () => {


        setData(shoes?.shoesShow)
         setTodo({
             data,
             ...todo
         })


        setOpen(true);
    }

    const onCloseModal = () => setOpen(false);


    return (
        <div>
            <div onClick={onOpenModal}>{(shoes?.shoesSelected)?.length == 0 ? "0" : "+"} Carro</div>
            <Modal open={open} onClose={onCloseModal} center><hr />

                <ModalBody data={data} />

            </Modal>
        </div>
    )
}

export default ButtonModal