const HeaderView=({logOut, translations})=>
    <div className="header">
        {translations.headerText}
        <br/><button onClick={logOut}>{translations.logoutButton}</button>
    </div>

export {HeaderView};
