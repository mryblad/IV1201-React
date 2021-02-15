import {createElement, useState} from 'react';
import {LoginView} from './LoginView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';


/**
 * Handles the Login logic and controlls the LoginView.
 */
function Login(){
  const [formDisplay, setformDisplay]= useState({login: "block", forgotPassword: "none"});

   /**
    * Handles what happens when the login form is submitted.
    * @param {HTML form} e The form that was submitted.
    */
    function handleSubmit(e){
      e.preventDefault();
      let username, password, email;

      if(e.target.username && e.target.password){
        username = e.target.username.value;
        password = e.target.password.value;
        login();
      }
      else if(e.target.email){
        email = e.target.email.value;
        forgotPassword();
      }
      else{
        return new Error("invalid input");
      }


      function login(){
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

      function forgotPassword(){
        console.log("forgot password API not implemented");
        console.log("Email: " + email);
      }
    }

    /**
     * Toggles between showing the login form and the forgot password form.
     * @param  {[type]} e The button that was pressed.
     */
    function toggleForgot(e){
      e.preventDefault();
      let tempObj = {
        login: formDisplay.forgotPassword,
        forgotPassword: formDisplay.login
      }
      setformDisplay(tempObj);
    }

    return createElement(LoginView,{
        handleSubmit: e => handleSubmit(e),
        toggleForgot: e => toggleForgot(e),
        formDisplay: formDisplay
    });
}

export {Login};
