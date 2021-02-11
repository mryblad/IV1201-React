import {useState,useEffect} from 'react';
//import {user} from '../../Model/User';

function Authorized({children}){
    const token= localStorage.getItem("authToken");

    

    return token?children:null;
}

export {Authorized};