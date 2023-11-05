import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../components/Authprovide";
import PropTypes from 'prop-types';

const PrivateOfCreateAssig = ({children}) =>{
 
    const{loading,user}=useContext(AuthContext)
 const location=useLocation()

     
     if(loading){
           return <span className="loading loading-spinner loading-lg text-center"></span>;
     }
 
      if(user){
        return children
      }







    return <Navigate state={location.pathname} to='/login'></Navigate>
};



PrivateOfCreateAssig.propTypes={
    children:PropTypes.node,
    
    
    }




export default PrivateOfCreateAssig;