import {createElement} from 'react';
import {FooterView} from './FooterView';
import {Translations} from './../../util/Translations'

/**
 * Set language of site by setting local storage variable.
 * @param {string} lang The language to set to
 */
function setLanguage(lang){
  console.log("Language: " + lang);
  if(lang == "en" || lang == "se"){
    localStorage.setItem("language", lang);
    location.reload(true); //reload to update site
  }
  else
    console.error("Langauge not recognized");
}

/**
 * Footer presenter
 */
function Footer(){
    return createElement(FooterView,{
      translations: Translations[localStorage.getItem("language") || "en"].footer,
      setLanguage: e => setLanguage(e),
    });
}

export {Footer};
