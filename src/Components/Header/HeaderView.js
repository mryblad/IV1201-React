import React from 'react';
const HeaderView=({logOut, translations, authToken})=>
    <div className="header">
        <p>{translations.headerText}</p>
        <br/>
        {authToken?(<button onClick={logOut}>{translations.logoutButton}</button>):null}

    </div>

export {HeaderView};
