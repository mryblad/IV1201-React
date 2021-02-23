import {Link} from 'react-router-dom';

const MenuView=({type})=>
    <div className="menu">
        <ul>
            <li><Link to="/example">Example</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/forgotpassword">Forgot Password</Link></li>
            <li><Link to="/create">Create</Link></li>
            {type==="applicant"?<li><Link to="/apply">Apply</Link></li>:false}
            <li><Link to="/applications">Applications</Link></li>
            <li><Link to="/updateperson">Update Person</Link></li>
        </ul>
    </div>

export {MenuView};
