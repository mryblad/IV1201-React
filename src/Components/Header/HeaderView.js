const HeaderView=({logOut, translations, authToken})=>
    <div className="header">
        {translations.headerText}
        <br/>
        {authToken?(<button onClick={logOut}>{translations.logoutButton}</button>):null}

    </div>

export {HeaderView};
