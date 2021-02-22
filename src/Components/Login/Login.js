import {createElement, useState, useEffect} from 'react';
import {LoginView} from './LoginView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';
import {useHistory} from 'react-router-dom';
import {Translations} from './../../util/Translations'

/**
 * Handles the Login logic and controlls the LoginView.
 */
function Login(){

  // const history=useHistory();
  //
  // const [emptyFields,setEmptyFields]=useState(false);
  //
  // useEffect(() => {
  //   if(emptyFields){
  //     console.log("trying to redirect");
  //     history.push({
  //       pathname:'updateperson',
  //     });
  //   }
  // }, [emptyFields])

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
        console.log(response);
        if(response.success){
          window.localStorage.setItem("authToken", response.success.token);
          window.dispatchEvent(new Event('storage'));
          console.log("setting token...");

          //If the user has any empty fields in database to fill out
          if(response.success.emptyFields){
            console.log("Empty fields:");
            console.log(response.success.emptyFields);
            //setEmptyFields(response.success.emptyFields);
            alert("Should redirect to /updateperson");
            //window.location.pathname = "/updateperson";
            // history.push({
            //   pathname:'updateperson',
            // });
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
