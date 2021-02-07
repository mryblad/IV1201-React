import {createElement as h} from 'react';
import {ExampleView} from './ExampleView';
import apiService from "../../Services/apiService";

function Example(){
    return h(ExampleView,{
        getPersonById:e=>{
            e.preventDefault();
            console.log(apiService.getPersonById(e.target.personId.value));
        }
    });
}

export {Example};