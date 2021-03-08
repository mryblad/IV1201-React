import {createElement, useState} from 'react';
import {CreateAccountView} from './CreateAccountView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';
import {Translations} from './../../util/Translations';
import user from '../../Model/User';

/*
*  Presenter for CreateAccountView view that
*  handles the create account logic and controls the CreateAccountView.
*/
function CreateAccount(){

  const [errorMessage,setErrorMessage]=useState(null);

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

    try {
      Validators.stringIsValidLength(firstName, "name");
      Validators.stringIsValidLength(lastName, "surname");
      Validators.isAlphaString(firstName,"name");
      Validators.isAlphaString(lastName,"surname");
      Validators.isEmailValid(email);
      Validators.stringIsValidLength(ssn, "ssn");
      Validators.passwordIsValidLength(password, "password");
      Validators.usernameIsValidLength(username, "username");
      
      apiService.registerAccount({
        "name": firstName,
        "surname": lastName,
        "ssn": ssn,
        "password": password,
        "email": email,
        "username": username
      }).then(createResponse => {
        if(createResponse.success){
          apiService.login({
            "username": username,
            "password": password
          }).then(response=>{
            if(response.success){
              window.localStorage.setItem("authToken", response.success.token);
              window.dispatchEvent(new Event('storage'));

              //If the user has any empty fields in database to fill out
              if(response.success.emptyFields){
                  user.setEmptyFields(response.success.emptyFields);
              }
            }
              else{
                const t = Translations[localStorage.getItem("language") || "en"].createAccount;
                setErrorMessage("Error: " + t.error.autoLogin);
              }
          })
        }
        else if(createResponse.error){
          console.log(createResponse.error);
          const t = Translations[localStorage.getItem("language") || "en"].createAccount;
          if(createResponse.error.includes("username"))
            setErrorMessage("Error: " + t.error.createAccount.username);
          else if(createResponse.error.includes("email"))
            setErrorMessage("Error: " + t.error.createAccount.email);
        }
      }).catch(err => {
        console.log(err);
        const t = Translations[localStorage.getItem("language") || "en"].createAccount;
        setErrorMessage("Error: " + t.error.createAccount);
      });
    } catch (error) {
      setErrorMessage(error.message);
    }
  }
    

  return createElement(CreateAccountView,{
      handleSubmit: e => handleSubmit(e),
      translations: Translations[localStorage.getItem("language") || "en"].createAccount,
      errorMessage: errorMessage,
  });
}

export {CreateAccount};
