import { createElement, useState, useEffect } from 'react';
import {ApplyView} from './ApplyView';
import apiService from "../../Services/apiService";
import Validators from "../../util/Validators";
import {Translations} from './../../util/Translations'

/**
 * Handles the application logic and controlls the ApplyView.
 */
function Apply(){

  const [competences,setCompetences]=useState(null);
  const [promise,setPromise]=useState(apiService.getCompetences());

  useEffect(() => {
    promise&&promise.then(data => {
      let lang = localStorage.getItem("language") || "en";
      let jsx = []
      if(data.success){
        data.success.map((e, i) =>
          e.competence_translations.map(l =>
            l.language == lang ? jsx.push(<option value={l.translation} key={i}>{l.translation}</option>) : null
          )
        )
      }
      setCompetences(jsx)
    }).catch(console.error);
  }, [promise])

  function handleSubmit(e){
    console.log("not implemented...");
  }

  return createElement(ApplyView,{
    handleSubmit: e => handleSubmit(e),
    translations: Translations[localStorage.getItem("language") || "en"].apply,
    lang: Translations[localStorage.getItem("language") || "en"],
    options: competences,
  });
}

export {Apply};
