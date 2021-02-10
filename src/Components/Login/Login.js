import {createElement,useState,useEffect} from 'react';
import {LoginView} from './LoginView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';

/*
  Handles the Login logic and controlls the LoginView.
*/
function Login(){
    function handleSubmit(e){
      e.preventDefault();

      let username = e.target.username.value;
      let password = e.target.password.value;
      console.log("Username: " + username);
      console.log("Password: " + password);

      //validate username and password
      Validators.passwordIsValidLength(password, "password");
      Validators.usernameIsValidLength(username, "username");

      console.log(apiService.login({
          "username": username,
          "password": password
      }));
    }

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {Login};
