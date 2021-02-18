import {createElement} from 'react';
import {ShowApplicationView} from './ShowApplicationView';
import apiService from '../../Services/apiService';

/**
 * ShowApplication presenter
 */
function ShowApplication(props){
    return createElement(ShowApplicationView,{
        application:props.location.application,
        handle:application_status=>{
            apiService.handleApplication(props.location.application.availability_id,{
                application_status
            })
            alert("application "+application_status);
        }
    });
}

export {ShowApplication};