import {createElement} from 'react';
import {HeaderView} from './HeaderView';
import {Translations} from './../../util/Translations'

/**
 * Header presenter
 */
function Header(){
    return createElement(HeaderView,{
        logOut:()=>{
            window.localStorage.removeItem("authToken");
            window.dispatchEvent(new Event('storage'));
        },
        translations: Translations[localStorage.getItem("language") || "en"].header,
    });
}

export {Header};
