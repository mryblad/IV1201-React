import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const MenuView=({type,translations})=>
    <div className="menu">
        <ul>
            <li><Link to="/example">{translations.example}</Link></li>
            {type==="applicant"?
            <Fragment>
                <li><Link to="/apply">{translations.apply}</Link></li>
                <li><Link to="/updateperson">{translations.updatePerson}</Link></li>
            </Fragment>
            :false}
            {type==="recruiter"?
            <Fragment>
                <li><Link to="/applications">{translations.applications}</Link></li>
            </Fragment>:false}
        </ul>
    </div>

export {MenuView};
