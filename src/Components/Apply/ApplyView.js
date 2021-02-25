const ApplyView=({selectedCompetences,setSelectedCompetences,selectedPeriods,setSelectedPeriods,handleSubmit, translations, lang, options})=>
  <div>
    <h1>{translations.title}</h1>
    {selectedCompetences.map((entry,i)=>
    <div key={i}>
      <label htmlFor="expertise">{translations.expertise}:</label>
      <select id="expertise" disabled={true}>
        <option value={entry.competence_id}>{entry.competence_id}</option>
      </select>
      <input type="number" value={entry.years_of_experience} disabled={true}/>
    </div>)}
    <form onSubmit={e=>setSelectedCompetences(e)}>
      <label htmlFor="expertise">{translations.expertise}:</label>
      <select id="expertise">
        <option value="none">{translations.none}</option>
        {options}
      </select>
      <input type="number" name="experience" placeholder={translations.yearsOfExperience} size="4" required/>
      <br/>
      <button type="submit">{translations.addExpertise}</button>
    </form>
    <br/>
    {selectedPeriods.map((entry,i)=>
    <div key={i}>
      <label htmlFor="startDate">{translations.startDate}:</label>
      <input type="date" id="startDate" name="startDate" value={entry.from_date} disabled={true}/>
      <label htmlFor="endDate">{translations.to}:</label>
      <input type="date" id="endDate" name="endDate" value={entry.to_date} disabled={true}/><br/>
    </div>)}
    <form onSubmit={e=>setSelectedPeriods(e)}>
      <label htmlFor="startDate">{translations.startDate}:</label>
      <input type="date" id="startDate" name="startDate"></input>
      <label htmlFor="endDate">{translations.to}:</label>
      <input type="date" id="endDate" name="endDate"></input><br/>
      <button type="submit">{translations.addPeriod}</button><br/>
    </form>
    <button onClick={handleSubmit}>{translations.submit}</button>
  </div>

export {ApplyView};
