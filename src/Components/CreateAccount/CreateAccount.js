import {createElement} from 'react';
import {CreateAccountView} from './CreateAccountView';
import apiService from "../../Services/apiService";

function CreateAccount(){
    function handleSubmit(e){
      e.preventDefault();

      let firstName = e.target.firstName.value;
      let lastName = e.target.lastName.value;
      let email = e.target.email.value;
      let ssn = e.target.ssn.value;
      let username = e.target.username.value;
      let password = e.target.password.value;


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
