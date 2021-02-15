import {createElement} from 'react';
import {CreateAccountView} from './CreateAccountView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';

/*
*  Presenter for CreateAccountView view that
*  handles the create account logic and controls the CreateAccountView.
*/
function CreateAccount(){
    /**
     * Handles what happens when the create account form is submitted.
     *
     * @param {HTML form} e The form that was submitted.
     */
    function handleSubmit(e){
      e.preventDefault();

      let firstName = e.target.firstName.value;
      let lastName = e.target.lastName.value;
      let email = e.target.email.value;
      let ssn = e.target.ssn.value;
      let username = e.target.username.value;
      let password = e.target.password.value;

      Validators.stringIsValidLength(firstName, "name");
      Validators.stringIsValidLength(lastName, "surname");
      Validators.stringIsValidLength(ssn, "ssn");
      Validators.passwordIsValidLength(password, "password");
      Validators.usernameIsValidLength(username, "username");

      console.log(apiService.registerAccount({
            "name": firstName,
            "surname": lastName,
            "ssn": ssn,
            "password": password,
            "email": email,
            "username": username
        }));
    }

    return createElement(CreateAccountView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {CreateAccount};
