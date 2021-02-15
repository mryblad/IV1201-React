import {useState,useEffect} from 'react';
import apiService from "../../Services/apiService";

/**
 * Authorized component used to determine if the user is logged in and should
 * have access or not.
 *
 * @param {boolean} value true or false. Determines that children should be
 *                        rendered depending on if the token is valid. If
 *                        token is false and boolean value is false, then
 *                        render children.
 * @param {JSX objects} children JSX objects to be rendered if token's boolean
 *                               value is same as the value argument.
 */
function Authorized({value,children}){
    const [token,setToken]= useState(localStorage.getItem("authToken"));
    const [checkedToken,setCheckedToken]= useState();

    useEffect(()=>{
        const callback=()=>setToken(localStorage.getItem("authToken"));
        window.addEventListener('storage',callback);
        return ()=>window.removeEventListener("storage",callback);
    },[])
    useEffect(()=>{
      apiService.checkTokenValidity().then(r => {
        if(r.success)
          setCheckedToken(r.success)
      }).catch(err => console.error("Old token is invalid")); //+ redirect to login?
    },[token])

    return (checkedToken&&value)||(!checkedToken&&!value)?children:false;
}

export {Authorized};
