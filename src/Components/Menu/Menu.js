import {createElement,useState,useEffect} from 'react';
import {MenuView} from './MenuView';
import user from '../../Model/User';
import useModelProp from '../../Model/UseModelProp';

/**
 * Menu presenter
 */
function Menu(){
    const type=useModelProp(user,"type");

    return createElement(MenuView,{
        type,
    });
}

export {Menu};
