import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import s from "./logout.module.css"
export const Logout = () => {
  const { logout } = useAuth0();

  return (
    <button
    className={s.Logout}
      onClick={() => {
        window.localStorage.setItem("cart", JSON.stringify([]));
        localStorage.removeItem('prodCart')
        logout({ returnTo: window.location.origin });
      }}
    >
      Logout
    </button>
  );
};