import {createElement} from 'react';
import {HeaderView} from './HeaderView';
import {Translations} from './../../util/Translations';
import user from "../../Model/User";

/**
 * Header presenter
 */
function Header(){
    return createElement(HeaderView,{
        logOut:()=>{
            user.reset();
            window.localStorage.removeItem("authToken");
            window.dispatchEvent(new Event('storage'));
        },
        translations: Translations[localStorage.getItem("language") || "en"].header,
        authToken: window.localStorage.getItem("authToken"),
    });
}

export {Header};
