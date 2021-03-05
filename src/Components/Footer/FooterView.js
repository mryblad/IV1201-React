import React from 'react';
const FooterView=({translations, setLanguage})=>
    <div className="footer">
        {/*translations.footerText*/}
        <img src="se_icon.png" onClick={() => setLanguage("se")} alt="se flag"/>
        <img src="en_icon.png" onClick={() => setLanguage("en")} alt="en flag"/>
    </div>

export {FooterView};
