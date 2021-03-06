import { createElement, useState, useEffect } from 'react';
import {ApplyView} from './ApplyView';
import apiService from "../../Services/apiService";
import Validators from "../../util/Validators";
import {Translations} from './../../util/Translations';
import {useHistory} from 'react-router-dom';

/**
 * Handles the application logic and controlls the ApplyView.
 */
function Apply(){

  const translations = Translations[localStorage.getItem("language") || "en"].apply;

  const [competencesRaw,setCompetencesRaw]=useState(null);
  const [competences,setCompetences]=useState(null);
  const [promise,setPromise]=useState(apiService.getCompetences());
  const [selectedCompetences,setSelectedCompetences]=useState([]);
  const [selectedPeriods,setSelectedPeriods]=useState([]);
  const [startDate, setStartDate]=useState(new Date().toISOString().split("T")[0]);
  const [error,setError]=useState();
  const history=useHistory();

  const [unsavedValues,setUnsavedValues]=useState({
    competencies: {
      competence_id: null,
      years_of_experience: null,
    },
    periods:{
      from_date: null,
      to_date: null,
    },
  });

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

      try {
        Validators.isNumber(e.target.experience.value, "Years of experience");
        setSelectedCompetences([...selectedCompetences,{
          competence_id: e.target.expertise.value,
          years_of_experience:e.target.experience.value
        }])
      } catch (error) {
        setError("Error: " + translations.error.yoe);
      }
    },
    selectedPeriods,
    setSelectedPeriods:e=>{
      e.preventDefault();
      let startDate = e.target.startDate.value;
      let endDate = e.target.endDate.value;
      try {
        Validators.isNotPastDate(startDate, "Start Date");
        Validators.isNotPastDate(endDate, "End Date");
        Validators.dateIsNotPastDate(startDate, endDate, "Start Date", "End Date");
        setSelectedPeriods([...selectedPeriods,{
          from_date:startDate,
          to_date:endDate
        }])
      } catch (error) {
        setError("Error: " + translations.error.periods);
      }
    },
    onChange: (e) => {
      switch(e.target.name){
        case "selectExpertice":
          unsavedValues.competencies.competence_id = e.target.value;
          break;
        case "experience":
          unsavedValues.competencies.years_of_experience = e.target.value;
          break;
        case "startDate":
          unsavedValues.periods.from_date = e.target.value;
          break;
        case "endDate":
          unsavedValues.periods.to_date = e.target.value;
          break;
        default:
          console.log("Unexpected change: " + e.target.name);
          return;
      }
      setUnsavedValues(unsavedValues);
    },
    handleSubmit: (e) => {
      try {
        try {
          unsavedValues.competencies.years_of_experience&&Validators.isNumber(unsavedValues.competencies.years_of_experience, "Years of experience");
        } catch (err) {
          setError("Error: " + translations.error.yoe);
          return;
        }
        try {
          unsavedValues.periods.from_date&&Validators.isNotPastDate(unsavedValues.periods.from_date, "Start Date");
          unsavedValues.periods.to_date&&Validators.isNotPastDate(unsavedValues.periods.to_date, "End Date");
          unsavedValues.periods.from_date&&unsavedValues.periods.to_date&&Validators.dateIsNotPastDate(unsavedValues.periods.from_date, unsavedValues.periods.to_date, "Start Date", "End Date");
        } catch (err) {
          setError("Error: " + translations.error.periods);
          return;
        }

        //change name to id
        unsavedValues.competencies.years_of_experience&&selectedCompetences.push(unsavedValues.competencies);
        unsavedValues.periods.from_date&&unsavedValues.periods.to_date&&selectedPeriods.push(unsavedValues.periods);

        let filteredCompetences = [];
        selectedCompetences && selectedCompetences
        .map(s => s.competence_id == "none" || s.competence_id == null ? null : filteredCompetences
          .push({competence_id: competencesRaw
            .find(c=>c.competence_translations
              .map(t=>t.translation)
              .includes(s.competence_id)).competence_id, years_of_experience: s.years_of_experience}));

        try {
          //Validators.isNotEmpty(filteredCompetences,"Competences");
          Validators.isNotEmpty(selectedPeriods,"Periods");
        } catch (err) {
          setError("Error: " + translations.error.empty);
          return;
        }

        //api call
        apiService.submitApplication({
          competencies:filteredCompetences,
          periods:selectedPeriods
        }).then(dt=>{
          alert(translations.submitted);
          history.goBack();
        })
      } catch (error) {
        console.error(error);
        setError(error.message);
      }
    },
    translations: translations,
    lang: Translations[localStorage.getItem("language") || "en"],
    options: competences,
    startDate: startDate,
    setStartDate: setStartDate,
    error
  });
}

export {Apply};
