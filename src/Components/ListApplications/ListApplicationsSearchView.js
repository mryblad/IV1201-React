const ListApplicationsSearchView=({getApplications})=>
    <div>
        <form onSubmit={e=>getApplications(e)}>
            <div>
                <label htmlFor="name">Applicant First Name</label>
                <input type="text" id="name"/>
            </div>
            <div>
                <label htmlFor="surname">Applicant Last Name</label>
                <input type="text" id="surname"/>
            </div>
            <div>
                <label htmlFor="start">Available Earliest</label>
                <input type="date" id="start"/>
            </div>
            <div>
                <label htmlFor="end">Available Latest</label>
                <input type="date" id="end"/>
            </div>
            <div>
                <label htmlFor="applicationstart">Applied Earliest</label>
                <input type="date" id="applicationstart"/>
            </div>
            <div>
                <label htmlFor="applicationend">Applied Latest</label>
                <input type="date" id="applicationend"/> 
            </div>
            <div>
                <label htmlFor="competence">Competence</label>
                <select id="competence">
                    <option value="Any">Any</option>
                    {["Korvgrillning", "Karuselldrift"]
                    .map(k=><option key={k}>{k}</option>)}
                </select>
            </div>
            <div>
               <button type="submit">Search</button> 
            </div>
        </form>
    </div>

export {ListApplicationsSearchView};