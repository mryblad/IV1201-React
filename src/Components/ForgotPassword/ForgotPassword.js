import {createElement, useState} from 'react';
import {ForgotPasswordView} from './ForgotPasswordView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';
import {Translations} from './../../util/Translations'

/**
 * Handles the Login logic and controlls the LoginView.
 */
function ForgotPassword(){

  const [errorMessage,setErrorMessage]=useState(null);

 /**
  * Handles what happens when the "reset password" form is submitted.
  * @param {HTML form} e The form that was submitted.
  */
  function handleSubmit(e){
    e.preventDefault();
    let email = e.target.email.value;

    apiService.resetPassword(email).then(response => {
      if(response.success){
        window.location=response.success.resetLink
      }
      else{
        const t = Translations[localStorage.getItem("language") || "en"].forgotPassword;
        setErrorMessage("Error: " + t.error);
      }
    });
  }

  return createElement(ForgotPasswordView,{
      handleSubmit: e => handleSubmit(e),
      translations: Translations[localStorage.getItem("language") || "en"].forgotPassword,
      errorMessage,
  });
}

export {ForgotPassword};
