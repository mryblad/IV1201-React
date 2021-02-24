import user from '../../Model/User';
import useModelProp from '../../Model/UseModelProp';
import {createElement} from 'react';
import {ApplicantRedirectView} from './ApplicantRedirectView';

/**
 * Presenter for ApplicantRedirectView. Redirects applicants if they have missing fields to fill in. 
 */
function ApplicantRedirect(){
    const emptyFields=useModelProp(user,"emptyFields");

    return createElement(ApplicantRedirectView,{
        emptyFields
    })
}

export {ApplicantRedirect};