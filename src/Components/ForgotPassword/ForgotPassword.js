import {createElement} from 'react';
import {ForgotPasswordView} from './ForgotPasswordView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';


/**
 * Handles the Login logic and controlls the LoginView.
 */
function ForgotPassword(){

   /**
    * Handles what happens when the "reset password" form is submitted.
    * @param {HTML form} e The form that was submitted.
    */
    function handleSubmit(e){
      e.preventDefault();
      let email = e.target.email.value;

      console.log("(mail) Go to this link [link] to reset your password.")
      apiService.resetPassword(email).then(console.log);
    }

    return createElement(ForgotPasswordView,{
        handleSubmit: e => handleSubmit(e),
    });
}

export {ForgotPassword};
