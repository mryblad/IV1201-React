import {createElement,useState,useEffect} from 'react';
import {LoginView} from './LoginView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';


/**
 * Handles the Login logic and controlls the LoginView.
 */
function Login(){
   /**
    * Handles what happens when the login form is submitted.
    * @param {HTML form} e The form that was submitted.
    */
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
        if(response.success){
          window.localStorage.setItem("authToken", response.success.token);
          window.dispatchEvent(new Event('storage'));
          console.log("setting token...");
        }
      });
    }

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {Login};
