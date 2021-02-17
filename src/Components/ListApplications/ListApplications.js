import {createElement,useState,useEffect} from 'react';
import {ListApplicationsView} from './ListApplicationsView';
import apiService from "../../Services/apiService";
import Validators from '../../util/Validators';

/**
 * ListApplications presenter
 */
function ListApplications(){
    const [promise,setPromise]=useState();
    const [applications,setApplications]=useState();
    const [error,setError]=useState();

    useEffect(()=>{
        promise&&promise.then(dt=>setApplications(dt.success)).catch(er=>setError(er));
    },[promise]);

    return createElement(ListApplicationsView,{
        applications,
        error,
        getApplications:()=>setPromise(apiService.getApplications()),
    });
}

export {ListApplications};