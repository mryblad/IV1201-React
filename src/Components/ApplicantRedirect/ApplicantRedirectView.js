import {Redirect} from 'react-router-dom';

const ApplicantRedirectView=({emptyFields})=>
    <Redirect to={emptyFields?"/updateperson":"/"}/>

export {ApplicantRedirectView};