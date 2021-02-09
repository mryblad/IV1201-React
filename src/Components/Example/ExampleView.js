const ExampleView=({hej,changeHej,person,error,getPersonById,register})=>
    <div>
        <form onSubmit={e=>getPersonById(e)}>
            <input type="text" id="personId"/>
            <button type="submit">submit</button>
        </form>
        <div>{hej}</div>
        <button onClick={()=>changeHej("hallå")}>click me</button>
        <div>{error?JSON.stringify(error):JSON.stringify(person)}</div>
        <button onClick={register}>register</button>
    </div>

export {ExampleView};