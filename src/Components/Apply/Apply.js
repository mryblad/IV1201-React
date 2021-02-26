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
  const [startDate, setStartDate]=useState(new Date().toISOString().split("T")[0]);



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
      Validators.isNumber(e.target.experience.value, "e.target.experience.value");
      console.log(e.target.expertise.value);
      setSelectedCompetences([...selectedCompetences,{
        competence_id: e.target.expertise.value,
        years_of_experience:e.target.experience.value
      }])
    },
    selectedPeriods,
    setSelectedPeriods:e=>{
      e.preventDefault();
      let startDate = e.target.startDate.value;
      let endDate = e.target.endDate.value;
      Validators.isNotPastDate(startDate, "startDate");
      Validators.isNotPastDate(endDate, "endDate");
      Validators.dateIsNotPastDate(startDate, endDate, "startDate", "endDate");
      setSelectedPeriods([...selectedPeriods,{
        from_date:startDate,
        to_date:endDate
      }])
    },
    handleSubmit: () => {
      //change name to id
      selectedCompetences
      .map(s => s.competence_id = competencesRaw
        .find(c=>c.competence_translations
          .map(t=>t.translation)
          .includes(s.competence_id)).competence_id)
      console.log(selectedCompetences);

      //api call
      apiService.submitApplication({
        competencies:selectedCompetences,
        periods:selectedPeriods
      }).then(dt=>alert("Application submitted!"))
    },
    translations: Translations[localStorage.getItem("language") || "en"].apply,
    lang: Translations[localStorage.getItem("language") || "en"],
    options: competences,
    startDate: startDate,
    setStartDate: setStartDate,
  });
}

export {Apply};
