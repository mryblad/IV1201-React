import { createElement, useState, useEffect } from 'react';
import {ApplyView} from './ApplyView';
import apiService from "../../Services/apiService";
import Validators from "../../util/Validators";
import {Translations} from './../../util/Translations'

/**
 * Handles the application logic and controlls the ApplyView.
 */
function Apply(){

  const [competencesRaw,setCompetencesRaw]=useState(null);
  const [competences,setCompetences]=useState(null);
  const [promise,setPromise]=useState(apiService.getCompetences());
  const [selectedCompetences,setSelectedCompetences]=useState([]);
  const [selectedPeriods,setSelectedPeriods]=useState([]);

  useEffect(() => {
    promise&&promise.then(data => {
      let lang = localStorage.getItem("language") || "en";
      let jsx = []
      if(data.success){
        setCompetencesRaw(data.success);
        data.success.map((e, i) =>
          e.competence_translations.map(l =>
            l.language == lang ? jsx.push(<option value={l.translation} key={i}>{l.translation}</option>) : null
          )
        )
      }
      setCompetences(jsx)
    }).catch(console.error);
  }, [promise])

  return createElement(ApplyView,{
    selectedCompetences,
    setSelectedCompetences:e=>{
      e.preventDefault();
      setSelectedCompetences([...selectedCompetences,{
        competence_id:competencesRaw.find(c=>c.competence_translations.map(t=>t.translation).includes(e.target.expertise.value)).competence_id,
        years_of_experience:e.target.experience.value
      }])
    },
    selectedPeriods,
    setSelectedPeriods:e=>{
      e.preventDefault();
      setSelectedPeriods([...selectedPeriods,{
        from_date:e.target.startDate.value,
        to_date:e.target.endDate.value
      }])
    },
    handleSubmit: () => apiService.submitApplication({
      competencies:selectedCompetences,
      periods:selectedPeriods
    }).then(dt=>alert("Application submitted!")),
    translations: Translations[localStorage.getItem("language") || "en"].apply,
    lang: Translations[localStorage.getItem("language") || "en"],
    options: competences,
  });
}

export {Apply};
