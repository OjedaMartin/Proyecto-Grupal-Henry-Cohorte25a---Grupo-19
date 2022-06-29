import React from 'react';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
import cart from '../images/carritoIcon.png';
import style from './ProductCard.module.css'



export default function ProductCard({ name, brand, image, price, id }) {
    //const dispatch = useDispatch();
    
    
    // const handleCart = (e) => {
    //     e.preventDefault();
    //     dispatch(addToCart(id))
    // }
    return (
        <div className={style.container1}>

            <div>
                <Link to={'/details/' + id}>
                    <div className={style.prodImg}>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>
            <div className={style.prodInfo}>
                <h2>{brand}</h2>
                <h3>{name}</h3> {/*{name.length>30? <h3>{(name.slice(0,45)).concat('...')}</h3> :  */}
                <h3>{price}</h3>
            </div>
            <button className={style.cartBtn}>{/*onClick={handleCart} */}
                <img className={style.photo} src={cart} alt='Buy'/>
            </button> 
        </div>
    )
}