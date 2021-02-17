import {createElement} from 'react';
import { useParams } from 'react-router-dom';
import {SetPasswordView} from './SetPasswordView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';


/**
 * Handles the Login logic and controlls the LoginView.
 */
function SetPassword(){
  let token = useParams().token;

   /**
    * Handles what happens when the "set password" form is submitted.
    * @param {HTML form} e The form that was submitted.
    */
    function handleSubmit(e){
      e.preventDefault();
      let password = e.target.password.value;

      apiService.setPassword({password, token}).then(response => {
        console.log(response);
      });
    }

    return createElement(SetPasswordView,{
        handleSubmit: e => handleSubmit(e),
    });
}

export {SetPassword};
