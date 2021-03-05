import {createElement, useState} from 'react';
import {LoginView} from './LoginView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';
import {Translations} from './../../util/Translations';
import user from "../../Model/User";

/**
 * Handles the Login logic and controlls the LoginView.
 */
function Login(){

    const [errorMessage,setErrorMessage]=useState(null);

   /**
    * Handles what happens when the login form is submitted.
    * @param {HTML form} e The form that was submitted.
    */
    function handleSubmit(e){
      e.preventDefault();
      let username = e.target.username.value
      let password = e.target.password.value

      //validate username and password
      Validators.usernameIsValidLength(username, "username");
      Validators.passwordIsValidLength(password, "password");

      apiService.login({
          "username": username,
          "password": password
      }).then(response => {
        if(response.success){
          window.localStorage.setItem("authToken", response.success.token);
          window.dispatchEvent(new Event('storage'));

          //If the user has any empty fields in database to fill out
          if(response.success.emptyFields){
            user.setEmptyFields(response.success.emptyFields);
          }
        }
        else if(response.error){
          const t = Translations[localStorage.getItem("language") || "en"].login;
          setErrorMessage("Error: " + t.error);
        }
      });
    }

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e),
        translations: Translations[localStorage.getItem("language") || "en"].login,
        errorMessage: errorMessage,
    });
}

export {Login};
