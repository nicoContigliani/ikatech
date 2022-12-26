import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CardShop from '../components/CartShop'
import { selectShoes } from '../features/shoes/shoeSlice';
import { useSelector, useDispatch } from 'react-redux';


const Caroursel = () => {
    const shoes = useSelector(selectShoes);
    // const data = shoes.shoes


    const data = [

        {
            "nombre": "Zapato azul4",
            "precio": 5000,
            "referencia": "G40",
            "foto": "14.jpg"
        },
        {
            "nombre": "Zapato azul5",
            "precio": 5000,
            "referencia": "G40",
            "foto": "15.jpg"
        },
        {
            "nombre": "Zapato azul6",
            "precio": 5000,
            "referencia": "G40",
            "foto": "16.jpg"
        },
        {
            "nombre": "Zapato azul7",
            "precio": 5000,
            "referencia": "G40",
            "foto": "17.jpg"
        },
        {
            "nombre": "Zapato azul8",
            "precio": 5000,
            "referencia": "G40",
            "foto": "18.jpg"
        },
        {
            "nombre": "Zapato azul9",
            "precio": 5000,
            "referencia": "G40",
            "foto": "19.jpg"
        }
    ]






    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 4
        }
    };


    return (
        <div className='container'>
            <div className='card2'>


                {/* <Carousel responsive={responsive}
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    autoPlay={true}
                    autoPlaySpeed={1000}
                    keyBoardControl={false}
                    containerClass="carousel-container"
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    dotListClass="custom-dot-list-style"
                    itemClass="carousel-item-padding-40-px"
                > */}

                {
                    data.splice(1, 4).map(item =>


                            <CardShop data={item} />
                    )
                }
                {/* </Carousel> */}
                {/* <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div>
                    <div>Item 1</div>
                    <div>Item 2</div>
                    <div>Item 3</div>
                    <div>Item 4</div> */}

            </div>











        </div >
    )
}

export default Caroursel