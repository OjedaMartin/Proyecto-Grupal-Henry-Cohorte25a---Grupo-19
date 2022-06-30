import React, { useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import {
    getAllCategories,
    getfilterCategories,
    getAllProducts
} from '../redux/actions';
import ProductCard from './ProductCard';
import Pagination from './Pagination';
import ClassesCartDetail from './SearchDetail.module.css'



export default function SearchDetail() {
    const [, setReloadState] = useState(false);
    const { name } = useParams();
    const { category } = useParams();
    const { allProducts } = useParams();
    
    const dispatch = useDispatch();

    const productsResults = useSelector((state) => state.products);
    const allCategories = useSelector((state) => state.category);

    const cartProducts = useSelector((state) => state.cart)
   
    useEffect(() => {

    }, [dispatch]);

  
        return (
            <Fragment>
                <main className={ClassesCartDetail.division}>
                    <div className={ClassesCartDetail.todo}>
                        <div className={ClassesCartDetail.params}>
                            <h1>Cart</h1>
                            {/* Agregar el length de la cantidad de items */}
                        </div>
                        <div>
                            <h1>Saved</h1>
                        </div>
                        
               
                    </div>
                    <section className={ClassesCartDetail.sectionFlex}>
                        {cartProducts.map((e) => {
                            return (
                                <Fragment key={e.id}>
                                    <div>
                                        <ProductCard
                                            key={e.id}
                                            name={e.name}
                                            brand={e.brand}
                                            image={e.image}
                                            price={e.price}
                                            id={e.id}
                                        />
                                    </div>
                                </Fragment>
                            )
                        })}
                        <div>
                            <Pagination
                                productsPerPage={productsPerPage}
                                amountProducts={productsResults.length}
                                paginated={paginated}
                            />
                        </div>

                    </section>

                </main>

            </Fragment>

        )
    }
