import {createElement} from 'react';
import {ApplyView} from './ApplyView';
import apiService from "../../Services/apiService";
import Validators from "../../util/Validators";
import {Translations} from './../../util/Translations'

/**
 * Handles the application logic and controlls the ApplyView.
 */
function Apply(){
    function handleSubmit(e){
      console.log("not implemented...");
    }

    return createElement(ApplyView,{
        handleSubmit: e => handleSubmit(e),
        translations: Translations[localStorage.getItem("language") || "en"].apply,
    });
}

export {Apply};
