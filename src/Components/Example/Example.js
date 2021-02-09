import {createElement,useState,useEffect} from 'react';
import {ExampleView} from './ExampleView';
import apiService from "../../Services/apiService";

function Example(){
    const [hej,setHej]=useState("hej");
    const [person,setPerson]=useState();
    const [error,setError]=useState();
    const [promise,setPromise]=useState();

    useEffect(() => {
        promise&&promise.then(dt=>setPerson(dt)).catch(er=>setError(er));
    }, [promise])

    return createElement(ExampleView,{
        hej,
        changeHej:s=>setHej(s),
        person,
        error,
        getPersonById:e=>{
            e.preventDefault();
            setPromise(apiService.getPersonById(e.target.personId.value));
        }
    });
}

export {Example};