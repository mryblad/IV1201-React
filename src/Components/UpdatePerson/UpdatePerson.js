import { createElement, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {UpdatePersonView} from './UpdatePersonView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';
import {Translations} from './../../util/Translations'

/**
 * Handles the Login logic and controlls the LoginView.
 */
function UpdatePerson(){
  let token = useParams().token;

  let translations = Translations[localStorage.getItem("language") || "en"].updatePerson;

  const [missingFields,setMissingFields]=useState({});
  const [infoText,setInfoText]=useState(translations.infoText.fillGeneralInfoText);
  const [promise,setPromise]=useState(apiService.getEmptyFields(token));

  const [errorMessage,setErrorMessage]=useState(null);

  //console.log("(Param) Token found: " + token);

  useEffect(() => {
    promise && promise.then(e => {
      //console.log(e);
      if(e.success){
        if(e.success.emptyFields)
          setMissingFields(e.success.emptyFields);
        else{ //nothing is missing, means change password.
          setMissingFields({"password": true});
          setInfoText(translations.infoText.setPasswordText);
        }
      }
    }).catch(console.error);
  }, [promise]);

  function handleEmpty(str){
    if(missingFields){
      if(missingFields[str]){
        return "block";
      }
      else{
        return "none";
      }
    }
    else{
      return "none";
    }
  }

   /**
    * Handles what happens when the "set password" form is submitted.
    * @param {HTML form} e The form that was submitted.
    */
    function handleSubmit(e){
      e.preventDefault();
      let body = {};
      if(e.target.firstName.value)
        body.name = e.target.firstName.value;
      if(e.target.lastName.value)
        body.surname = e.target.lastName.value;
      if(e.target.email.value)
        body.email = e.target.email.value;
      if(e.target.ssn.value)
        body.ssn = e.target.ssn.value;
      if(e.target.username.value)
        body.username = e.target.username.value;
      if(e.target.password.value)
        body.password = e.target.password.value;

      apiService.updatePerson({body, token}).then(response => {
        if(response.success)
          setInfoText(translations.infoText.success);
        else if(response.error)
          setErrorMessage("Error: " + translations.error);
          console.error(response.error);
      });
    }

    return createElement(UpdatePersonView,{
        handleSubmit: e => handleSubmit(e),
        handleEmpty: e => handleEmpty(e),
        infoText: infoText,
        translations: Translations[localStorage.getItem("language") || "en"].updatePerson,
        errorMessage: errorMessage,
    });
}

export {UpdatePerson};
