import {createElement} from 'react';
import {LoginView} from './LoginView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';
import {Translations} from './../../util/Translations';
import user from "../../Model/User";

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
      let username = e.target.username.value
      let password = e.target.password.value

      console.log("Username: " + username);
      console.log("Password: " + password);

      //validate username and password
      Validators.passwordIsValidLength(password, "password");
      Validators.usernameIsValidLength(username, "username");

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
      });
    }

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e),
        translations: Translations[localStorage.getItem("language") || "en"].login,
    });
}

export {Login};
