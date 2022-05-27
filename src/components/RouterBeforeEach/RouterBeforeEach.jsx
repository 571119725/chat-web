import {useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RouterBeforeEach = ()=>{
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem('userId') === null){
      console.log(location);
      navigate('/login');
    }
  },[location.pathname]);
} 
 
export default RouterBeforeEach