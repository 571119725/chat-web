import {useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
const RouterBeforeEach = ()=>{
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    if(sessionStorage.getItem('userId') === null){
      navigate('/login');
    }
  },[location.pathname,navigate]);
} 
 
export default RouterBeforeEach