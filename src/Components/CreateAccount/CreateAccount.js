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

    const t = Translations[localStorage.getItem("language") || "en"].createAccount;

    try {
      try{
        Validators.stringIsValidLength(firstName, "name");
        Validators.isAlphaString(firstName, "name")
      } catch (err) {
        setErrorMessage("Error: " + t.error.validators.name);
        return;
      }
      try{
        Validators.stringIsValidLength(lastName, "surname");
        Validators.isAlphaString(lastName,"surname");
      } catch (err) {
        setErrorMessage("Error: " + t.error.validators.surname);
        return;
      }
      try{
        Validators.isEmailValid(email);
      } catch (err) {
        setErrorMessage("Error: " + t.error.validators.email);
        return;
      }
      try{
        Validators.stringIsValidLength(ssn, "ssn");
      } catch (err) {
        setErrorMessage("Error: " + t.error.validators.ssn);
        return;
      }
      try{
        Validators.passwordIsValidLength(password, "password");
      } catch (err) {
        setErrorMessage("Error: " + t.error.validators.password);
        return;
      }
      try{
        Validators.usernameIsValidLength(username, "username");
      } catch (err) {
        setErrorMessage("Error: " + t.error.validators.username);
        return;
      }


      //Validators.stringIsValidLength(firstName, "name")
      //Validators.isAlphaString(firstName,"name");
      // Validators.stringIsValidLength(lastName, "surname");
      // Validators.isAlphaString(lastName,"surname");
      //Validators.isEmailValid(email);
      // Validators.stringIsValidLength(ssn, "ssn");
      // Validators.passwordIsValidLength(password, "password");
      // Validators.usernameIsValidLength(username, "username");

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
                setErrorMessage("Error: " + t.error.autoLogin);
              }
          })
        }
        else if(createResponse.error){
          console.log(createResponse.error);
          if(createResponse.error.includes("username"))
            setErrorMessage("Error: " + t.error.createAccount.username);
          else if(createResponse.error.includes("email"))
            setErrorMessage("Error: " + t.error.createAccount.email);
        }
      }).catch(err => {
        console.log(err);
        setErrorMessage("Error: " + t.error.apiFail);
      });
    } catch (error) {
      console.error(error);
      setErrorMessage("Error: " + error.message);
    }
  }


  return createElement(CreateAccountView,{
      handleSubmit: e => handleSubmit(e),
      translations: Translations[localStorage.getItem("language") || "en"].createAccount,
      errorMessage: errorMessage,
  });
}

export {CreateAccount};
