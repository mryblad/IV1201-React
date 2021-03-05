import React from 'react';
const ListApplicationsResultsView=({applications,error,handleRowClick,translations})=>
    <div>
        {error?<div>
            {translations.error}
        </div>:
        <table>
            <thead>
                <tr>
                    <th>{translations.name}</th>
                    <th>{translations.applicationDate}</th>
                </tr>
            </thead>
            <tbody>
                {applications&&applications.map(application=>
                <tr key={application.availability_id} onClick={()=>handleRowClick(application)}>
                    <td>{application.person.name} {application.person.surname}</td>
                    <td>{application.createdAt}</td>
                </tr>)}
            </tbody>
        </table>}
    </div>

export {ListApplicationsResultsView};
