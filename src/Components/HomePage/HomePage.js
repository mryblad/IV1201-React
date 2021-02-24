import {createElement} from 'react';
import {HomePageView} from './HomePageView';
import {Translations} from './../../util/Translations';

/**
 * HomePage presenter
 */
function HomePage(){
    return createElement(HomePageView,{});
}

export {HomePage};