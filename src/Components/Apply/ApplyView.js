const ApplyView=({handleSubmit})=>
  <div>
    <h1>APPLICATION</h1>

    <form onSubmit={handleSubmit}>
      <label htmlFor="expertise">Area of expertise:</label>
      <select name="expertise" id="expertise">
      <option value="none">None</option>
        <option value="hotdogStand">Hotdog Stand</option>
        <option value="merryGoAround">Merry Go Around</option>
      </select>
      <input type="number" name="experience" placeholder="Years of experience" size="4" required/><br/>
      <button>Add Expertise</button><br/>
      <label htmlFor="startDate">Available from:</label>
      <input type="date" id="startDate" name="startDate"></input>
      <label htmlFor="endDate">to:</label>
      <input type="date" id="endDate" name="endDate"></input>
      <br/><button>Add Period</button><br/>
      <button>Submit</button>
    </form>
  </div>

export {ApplyView};
