import React from 'react';
const ShowApplicationView=({application,handle,goBack,language,translations})=>
    <div>
        <div>{translations.name} {application.person.name} {application.person.surname}</div>
        <br/>
        <div>{translations.competences}</div>
        {application.person.competence_profiles.map((competenceProfile,i)=>
        <div key={i}>
            <span>
                {translations.type} {competenceProfile.competence.competence_translations.map(l =>l.language == language ?l.translation:null)} {translations.years_of_experience} {competenceProfile.years_of_experience}
            </span>
        </div>)}
        <br/>
        <div>{translations.availableStart} {application.from_date} {translations.availableEnd} {application.to_date}</div>
        <br/>
        <div>{translations.applicationDate} {application.createdAt?application.createdAt:translations.missingDate}</div>
        <div>{translations.application_status} {application.application_status?application.application_status:translations.unhandled}</div>
        <div>
            <button onClick={()=>handle("accepted")}>{translations.accept}</button>
            <button onClick={()=>handle("rejected")}>{translations.reject}</button>
            <button onClick={goBack}>{translations.return}</button>
        </div>
    </div>

export {ShowApplicationView};
