const ExampleView=({getPersonById})=>
    <div>
        <form onSubmit={e=>getPersonById(e)}>
            <input type="text" id="personId"/>
            <button type="submit">submit</button>
        </form>
    </div>

export {ExampleView};