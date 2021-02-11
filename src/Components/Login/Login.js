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

      apiService.login({
          "username": username,
          "password": password
      }).then(response => {
        console.log(response);
        //save token as cookie...
        if(response.success){
          window.localStorage.setItem("authToken", response.success.token);
          console.log("setting token...");
          window.location.pathname = "/example";
        }
      });
    }

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {Login};
