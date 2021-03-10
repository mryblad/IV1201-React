import { createElement, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {UpdatePersonView} from './UpdatePersonView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';
import {Translations} from './../../util/Translations';
import {useHistory} from 'react-router-dom';

/**
 * Handles the update person logic and controls the UpdatePersonView.
 */
function UpdatePerson(){
  let token = useParams().token;

  const translations = Translations[localStorage.getItem("language") || "en"].updatePerson;

  const [missingFields,setMissingFields]=useState({});
  const [infoText,setInfoText]=useState(translations.infoText.fillGeneralInfoText);
  const [promise,setPromise]=useState(apiService.getEmptyFields(token));
  const [errorMessage,setErrorMessage]=useState(null);
  const history=useHistory();
  //console.log("(Param) Token found: " + token);

  useEffect(() => {
    promise && promise.then(e => {
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
    * Handles what happens when the missing fields/set password form is submitted.
    * @param {HTML form} e The form that was submitted.
    */
    function handleSubmit(e){
      e.preventDefault();
      try {
        let body = {};
        if(e.target.firstName.value){
          try{
            Validators.stringIsValidLength(e.target.firstName.value, "name");
            Validators.isAlphaString(e.target.firstName.value,"name");
            body.name = e.target.firstName.value;
          } catch (err) {
            setErrorMessage("Error: " + translations.error.validators.name);
            return;
          }
        }
        if(e.target.lastName.value){
          try{
            Validators.stringIsValidLength(e.target.lastName.value, "surname");
            Validators.isAlphaString(e.target.lastName.value,"surname");
            body.surname = e.target.lastName.value;
          } catch (err) {
            setErrorMessage("Error: " + translations.error.validators.surname);
            return;
          }
        }
        if(e.target.email.value){
          try{
            Validators.isEmailValid(e.target.email.value);
            body.email = e.target.email.value;
          } catch (err) {
            setErrorMessage("Error: " + translations.error.validators.email);
            return;
          }
        }
        if(e.target.ssn.value){
          try{
            Validators.stringIsValidLength(e.target.ssn.value, "ssn");
            body.ssn = e.target.ssn.value;
          } catch (err) {
            setErrorMessage("Error: " + translations.error.validators.ssn);
            return;
          }
        }
        if(e.target.username.value){
          if(missingFields["username"]){
            try{
              Validators.usernameIsValidLength(e.target.username.value, "username");
              body.username = e.target.username.value;
            } catch (err) {
              setErrorMessage("Error: " + translations.error.validators.username);
              return;
            }
          }
        }
        if(e.target.password.value){
          try{
            Validators.passwordIsValidLength(e.target.password.value, "password");
            body.password = e.target.password.value;
          } catch (err) {
            setErrorMessage("Error: " + translations.error.validators.password);
            return;
          }
        }

        apiService.updatePerson({body, token}).then(response => {
          if(response.success){
            setInfoText(translations.infoText.success);
            alert(translations.infoText.success);
            history.push({
              pathname:'/'
            });
          }
          else if(response.error){
            setErrorMessage("Error: " + translations.saveFailed);
            //console.error(response.error);
          }
        });
      } catch (error) {
        console.error(error);
        setErrorMessage(error.message);
      }
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
