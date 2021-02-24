const FooterView=({translations, flags, setLanguage})=>
    <div className="footer">
        {/*translations.footerText*/}
        <img src={flags.se.default} onClick={() => setLanguage("se")} alt="se flag"/>
        <img src={flags.en.default} onClick={() => setLanguage("en")} alt="en flag"/>
    </div>

export {FooterView};
