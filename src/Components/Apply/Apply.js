import {createElement,useState,useEffect} from 'react';
import {ApplyView} from './ApplyView';
import apiService from "../../Services/apiService";
import Validators from "../../util/Validators";

/*
  Handles the application logic and controlls the ApplyView.
*/
function Apply(){
    function handleSubmit(e){
      console.log("not implemented...");
    }

    return createElement(ApplyView,{
        handleSubmit: e => handleSubmit(e)
    });
}

export {Apply};
