const ListApplicationsView=({applications,error,getApplications})=>
    <div>
        <button onClick={getApplications}>get applications</button>
        {error?<div>
            Could not get applications
        </div>:
        <div>
            {JSON.stringify(applications)}
        </div>}
    </div>

export {ListApplicationsView};