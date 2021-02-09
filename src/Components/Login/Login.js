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

      if(username && password){
        apiService.login({
            "username": username,
            "password": password
        });
      }
      else{
        throw new Error("Invalid username or password");
      }
    }

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {Login};
