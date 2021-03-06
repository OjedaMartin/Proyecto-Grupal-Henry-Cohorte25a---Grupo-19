
import React, { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import { Link,NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { FaShoppingCart } from "react-icons/fa";

import Style from "./Header.module.css";
// import { Login } from '../Users/LogIn';
import { Logout } from "../Users/LogOut";

//--------------CART-USER--------------
import { useDispatch, useSelector } from 'react-redux';
import { addCartToBack, getCartbyUser } from '../redux/actions'
import Admin from "../Admin/Admin";


export default function Header() {
  const { isAuthenticated,user} = useAuth0();
  //console.log("header", isAuthenticated);

  //----------------------------------------MANTIENE ACTUALIZADO EL CART DEL USER EN TEORIA xD----------------------------------------
  const [confirmCondition, setConfirmCondition] = useState(false);
  const dispatch = useDispatch();
  const prodCart = useSelector((state) => state.prodCart);
  const userCart = useSelector((state) => state.cartUserPRUEBA);

  if (isAuthenticated && !confirmCondition && userCart?.length === 0) {
    if (prodCart?.length > 0) {
      setConfirmCondition(true)
      const porductsOfLocalStorage = [];
      prodCart.map((e) => porductsOfLocalStorage.push({ id: e.id, cant: e.quantity }));
      dispatch(addCartToBack({ productsId: porductsOfLocalStorage, email: user.email }));
      localStorage.removeItem('prodCart')
    }
  }
  useEffect(() => {
    console.log('ENTRE AL USEEFFECT(1)')
    if (isAuthenticated) {
      console.log('ENTRE AL DISPATCH')
      dispatch(getCartbyUser(user.email))
    }
  },[]);

  const Cats = useSelector((state) => state.category);
  console.log("cats", Cats)

  //-----------------------------------------------------------------------------------------------------------------------------------


  return (
    <div className={Style.main}>
      <div className={Style.header}>
        {/*<Link to="/create" ><button className={Style.btnH}> New Product </button></Link>*/}
        <SearchBar />
        <h1 className={Style.title}>
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            RITUAL
          </Link>
        </h1>
        <div className={Style.contIcons}>
        {isAuthenticated && (user.email==="rechavarria2@gmail.com"||user.email==="rechavarria2@gmail.com"||user.email==="rechavarria2@gmail.com"||user.email==="rechavarria2@gmail.com"||user.email==="rechavarria2@gmail.com"||user.email==="rechavarria2@gmail.com"||user.email==="rechavarria2@gmail.com"||user.email==="rechavarria2@gmail.com")?<div> 
        <Link to="/admin">
                <button className={Style.admin}>
                  Admin
                </button>
              </Link>
</div>: null}
          {isAuthenticated ? (
            <>
              <Logout />
            </>
          ) : (
            <>
              <Link to="/cart">
                <button className={Style.iconCart}>
                  <FaShoppingCart />
                </button>
              </Link>

            </>
          )}
        </div>
      </div>
      <nav className={Style.Navbar}>

            {Cats?.map((item, index)=>{
              return(
                <NavLink style={{ textDecoration: "none", color: "black" }} key={index} to={`/SearchDetail/collection/${item.id}`}>
                  <h3 className={Style.subT}>{item.name}</h3>
                </NavLink>

              )


            })
              
              
              }

           

      </nav>
    </div>
  );
}

      //  <Link to="/SearchDetail/collection/cat140006">
      //    <button className={Style.subT}>Makeup</button>
      //  </Link>
      //  <Link to="/SearchDetail/collection/cat150006">
      //    <button className={Style.subT}>Skincare</button>
      //  </Link>
      //  <Link to="/SearchDetail/collection/cat130042">
      //    <button className={Style.subT}>Tools & Brushes</button>
      //  </Link>
      //  <Link to="/SearchDetail/collection/cat130038">
      //    <button className={Style.subT}>Hair</button>
      //  </Link>
      //  {/* <Link to="/SearchDetail/"><button className='subT'>Sale</button></Link> */}