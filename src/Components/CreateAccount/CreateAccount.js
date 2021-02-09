import {createElement} from 'react';
import {CreateAccountView} from './CreateAccountView';
import apiService from "../../Services/apiService";

function CreateAccount(){
    function handleSubmit(e){
      e.preventDefault();
    }

    return createElement(CreateAccountView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {CreateAccount};
