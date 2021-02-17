const ListApplicationsResultsView=({applications,error})=>
    <div>
        {error?<div>
            Could not get applications
        </div>:
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Application Date</th>
                </tr>
            </thead>
            <tbody>
                {applications&&applications.map(application=>
                <tr key={application.availability_id}>
                    <td>{application.person.name} {application.person.surname}</td>
                    <td>{application.createdAt}</td>
                </tr>)}
            </tbody>
        </table>}
    </div>

export {ListApplicationsResultsView};