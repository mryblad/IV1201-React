import {createElement} from 'react';
import {HeaderView} from './HeaderView';

/**
 * Header presenter
 */
function Header(){
    return createElement(HeaderView,{
        logOut:()=>{
            window.localStorage.removeItem("authToken");
            window.dispatchEvent(new Event('storage'));
        }
    });
}

export {Header};
