import {useState,useEffect} from 'react';

function Authorized({value,children}){
    const [token,setToken]= useState(localStorage.getItem("authToken"));
    
    useEffect(()=>{
        const callback=()=>setToken(localStorage.getItem("authToken"));
        window.addEventListener('storage',callback);
        return ()=>window.removeEventListener("storage",callback);
    },[])

    return (token&&value)||(!token&&!value)?children:false;
}

export {Authorized};