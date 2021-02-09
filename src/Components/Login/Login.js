import {createElement,useState,useEffect} from 'react';
import {LoginView} from './LoginView';
import apiService from "../../Services/apiService";

function Login(){
    function handleSubmit(e){
      e.preventDefault();

      var username = e.target.username.value;
      var password = e.target.password.value;
      console.log("Username: " + e.target.username.value);
      console.log("Password: " + e.target.password.value);

      apiService.login({
          "username": username,
          "password": password
      });
    }

    useEffect(() => {
        promise&&promise.then(dt=>setPerson(dt)).catch(er=>setError(er));
    }, [promise])

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {Login};
