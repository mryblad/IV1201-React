import {createElement} from 'react';
import {ShowApplicationView} from './ShowApplicationView';

/**
 * ShowApplication presenter
 */
function ShowApplication(props){
    return createElement(ShowApplicationView,{
        application:props.location.application,
        acceptHandler:()=>{
            alert("application accepted");
        },
        rejectHandler:()=>{
            alert("application rejected");
        }
    });
}

export {ShowApplication};