import {createElement,useState,useEffect} from 'react';
import {MenuView} from './MenuView';
import user from '../../Model/User';
import useModelProp from '../../Model/UseModelProp';
import {Translations} from './../../util/Translations'

/**
 * Menu presenter
 */
function Menu(){
    const type=useModelProp(user,"type");
        
    return createElement(MenuView,{
        type,
        translations: Translations[localStorage.getItem("language") || "en"].menu,
    });
}

export {Menu};
