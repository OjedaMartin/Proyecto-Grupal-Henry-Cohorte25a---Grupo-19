import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import cart from '../images/carritoIcon.png';
import ClassesProductCard from './ProductCard.module.css'
import { AiFillMinusSquare, AiFillPlusSquare } from "react-icons/ai"
import { useAuth0 } from '@auth0/auth0-react';

export default function ProductCard(props) {
    const { name, brand, image, price, id, discount, in_Stock, CategoryId, rating, onHandleAdd, onHandleRemove, onHandleAddtoDb } = props
    const dispatch = useDispatch();
    const prodCart = useSelector((state) => state.prodCart);
    const userCart = useSelector((state) => state.cartUser);
    //--------------------------------------------------
    const { isAuthenticated, user } = useAuth0();

    const data = prodCart.length > 0
        ? prodCart.find((el) => el.id === id)
        : undefined
    //-----UNA VEZ QUE CONFIRME QUE AL TRAER EL CART DEL BACK ME LO GUARDA EN PRODCART BORRO ESTO-------
    const data2 = userCart.length > 0
        ? userCart.find((el) => el.ProductId.id === id)
        : undefined
    //----------------------SI YA ESTABA CARGADO, SACO LA CANTIDAD QUE TIENE--------------------------

    const quantityDATA = data !== undefined ? data.quantity : data2 !== undefined ? data2.quantity : 0;

    const objToAdd = {
        id: id,
        name: name,
        image: image,
        price: price,
        brand: brand,
        in_Stock: in_Stock,
        CategoryId: CategoryId,
        rating: rating,
        quantity: quantityDATA,
    }

    return (
        <div className={ClassesProductCard.container1}>
            <div className={ClassesProductCard.top}>
                <h5>{brand.length > 18 ? brand.slice(0, 15).concat('...') : brand}</h5>
            </div>

            <div className={ClassesProductCard.ImgDiv}>
                <Link to={'/details/' + id}>
                    <div className={ClassesProductCard.prodImg}>
                        <img src={image} alt='Img not found!' />
                    </div>
                </Link>
            </div>

            <div className={ClassesProductCard.names} >
                <p>{name.length > 28 ? (name.slice(0, 25)).concat('...') : name}</p>
            </div>
            <p>{ discount>0?  `   ${discount}%SALE   $` + price: `$${price}`}</p>
            <div className={ClassesProductCard.priceAndcart}>
                {
                    quantityDATA > 0
                        ?
                        (
                            <button
                                className={ClassesProductCard.btn}
                                onClick={() => {
                                    onHandleRemove(id,quantityDATA);
                                    onHandleAddtoDb({id:id});
                                }} >
                                <AiFillMinusSquare />
                            </button>
                        )
                        : null
                }
                <p className={ClassesProductCard.num}>{quantityDATA > 0 ? quantityDATA : null}</p>
                <button
                    className={ClassesProductCard.btn}
                    onClick={() => {
                        onHandleAdd(objToAdd, in_Stock, quantityDATA);
                        let newORupdateProd = {
                            id: id,
                            quantity: quantityDATA,
                            in_Stock: in_Stock
                        }
                        onHandleAddtoDb(newORupdateProd);
                    }} >
                    <AiFillPlusSquare />
                </button>
            </div>
        </div>
    )
};

