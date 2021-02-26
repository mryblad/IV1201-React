const ListApplicationsSearchView=({competences,getApplications,translations})=>
    <div>
        <form onSubmit={e=>getApplications(e)}>
            <div>
                <label htmlFor="name">{translations.firstName}</label>
                <input type="text" id="name"/>
            </div>
            <div>
                <label htmlFor="surname">{translations.lastName}</label>
                <input type="text" id="surname"/>
            </div>
            <div>
                <label htmlFor="start">{translations.availableStart}</label>
                <input type="date" id="start"/>
            </div>
            <div>
                <label htmlFor="end">{translations.availableEnd}</label>
                <input type="date" id="end"/>
            </div>
            <div>
                <label htmlFor="applicationstart">{translations.applicationStart}</label>
                <input type="date" id="applicationstart"/>
            </div>
            <div>
                <label htmlFor="applicationend">{translations.applicationEnd}</label>
                <input type="date" id="applicationend"/> 
            </div>
            <div>
                <label htmlFor="competence">{translations.competence}</label>
                <select id="competence">
                    <option value={translations.any}>{translations.any}</option>
                    {competences}
                </select>
            </div>
            <div>
               <button type="submit">{translations.search}</button> 
            </div>
        </form>
    </div>

export {ListApplicationsSearchView};