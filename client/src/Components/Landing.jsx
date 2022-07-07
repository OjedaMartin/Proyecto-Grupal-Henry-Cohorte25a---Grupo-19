import React, { useEffect } from "react";
import { getAllProducts, getAllCategories, Log } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

import Carousel1 from "./Carousel";
import WhatsNew from "./whatsnew";
import Carousel from "./CardsFront";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "../Users/Profile";

import s from "./Landing.module.css";
export default function Landing() {
  const dispatch = useDispatch();
  const { isAuthenticated, user } = useAuth0();

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);
  (() => {
    if (isAuthenticated) {
      dispatch(Log(user))
    }})()
  
  return (
    <>
      <Carousel1 />
      <Carousel />
      <WhatsNew />

      {isAuthenticated ? (
        
        <div class={s.body}>
          <nav class={s.side}>
            <ul>
              <li>
                <a href="/profile">
                  {user.name}
                  
                  <span>
                    <i class="fa fa-map-marker"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="/">
                  Buy
                  <span>
                    <i class="fa fa-compass"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      ) : (
        <div class={s.body}>
          <nav class={s.side}>
            <ul>
              <li>
                <a href="/login">
                  {" "}
                  Login
                  <span>
                    <i class="fa fa-map-marker"></i>
                  </span>
                </a>
              </li>
              <li>
                <a href="/cart">
                  Buy
                  <span>
                    <i class="fa fa-compass"></i>
                  </span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
