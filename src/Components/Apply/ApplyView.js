const ApplyView=({handleSubmit, translations})=>
  <div>
    <h1>{translations.title}</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="expertise">{translations.expertise}:</label>
      <select name="expertise" id="expertise">
      <option value="none">{translations.none}</option>
        <option value="hotdogStand">Hotdog Stand</option>
        <option value="merryGoAround">Merry Go Around</option>
      </select>
      <input type="number" name="experience" placeholder={translations.yearsOfExperience} size="4" required/><br/>
      <button>{translations.addExpertise}</button><br/>
      <label htmlFor="startDate">{translations.startDate}:</label>
      <input type="date" id="startDate" name="startDate"></input>
      <label htmlFor="endDate">{translations.to}:</label>
      <input type="date" id="endDate" name="endDate"></input>
      <br/><button>{translations.addPeriod}</button><br/>
      <button>{translations.submit}</button>
    </form>
  </div>

export {ApplyView};
