const ShowApplicationView=({application,handle,goBack})=>
    <div>
        <div>Name: {application.person.name} {application.person.surname}</div>
        <br/>
        <div>Competences:</div>
        {application.person.competence_profiles.map((competenceProfile,i)=>
        <div key={i}>
            <span>Type: {competenceProfile.competence.competence_translations[0].translation} Years of Experience: {competenceProfile.years_of_experience}</span>
        </div>)}
        <br/>
        <div>Can work from: {application.from_date} to: {application.to_date}</div>
        <br/>
        <div>Application submitted on: {application.createdAt?application.createdAt:"No submission date"}</div>
        <div>Status: {application.application_status?application.application_status:"Unhandled"}</div>
        <div>
            <button onClick={()=>handle("accepted")}>Accept</button>
            <button onClick={()=>handle("rejected")}>Reject</button>
            <button onClick={goBack}>Return</button>
        </div>
    </div>

export {ShowApplicationView};
