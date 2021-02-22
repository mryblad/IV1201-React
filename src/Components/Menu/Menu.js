import {createElement} from 'react';
import {MenuView} from './MenuView';
import {Translations} from './../../util/Translations'

/**
 * Menu presenter
 */
function Menu(){
    return createElement(MenuView,{
      translations: Translations[localStorage.getItem("language") || "en"].menu,
    });
}

export {Menu};
