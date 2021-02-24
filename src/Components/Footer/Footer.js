import {createElement} from 'react';
import {FooterView} from './FooterView';
import {Translations} from './../../util/Translations'

/**
 * Footer presenter
 */
function Footer(){
    return createElement(FooterView,{
      translations: Translations[localStorage.getItem("language") || "en"].footer,
    });
}

export {Footer};
