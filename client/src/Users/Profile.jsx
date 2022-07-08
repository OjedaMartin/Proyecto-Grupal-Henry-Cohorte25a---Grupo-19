import React, { useEffect} from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { getProfile} from "../redux/actions";
const Profile = () => {
  const {  user } = useAuth0();
  console.log("info de aut0!!!",user)
  const perfil= useSelector((state) => state.actual) 
  console.log("estado del perfil!!!!!",perfil)
  const dispatch = useDispatch();
  useEffect(() => {
  dispatch(getProfile(user?.email))
},[dispatch, user?.email])

  return (
    
      <div>
      
      
        <br/>
        <label>Name:</label>
        <h2>{perfil?.name===null?"name":perfil?.name} </h2>
        <br/>
      
        <img src={perfil?.image===null?"https://us.123rf.com/450wm/pixelpic/pixelpic2008/pixelpic200800992/153285753-logotipo-de-la-letra-r-vintage-vector-de-dise%C3%B1o-de-letra-r-cl%C3%A1sico-con-color-negro-y-dibujado-a-mano.jpg?ver=6":perfil?.image} alt="" />
        <br/>
        
        <label>Email:</label>
       
        <h2> {perfil?.email} </h2>
        <div  >
          <Link exact to="/user/settings">
            <Button >
              Settings
            </Button>
          </Link>

          <Link  exact to="/user/myorders">
          <Button >
              My Orders
              </Button>
            </Link>
        </div>
      </div>
    
  );
};

export default Profile;