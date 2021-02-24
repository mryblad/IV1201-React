import {Link} from 'react-router-dom';

const HomePageView=()=>
    <div>
        <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/create">Create Account</Link></li>
        </ul>
    </div>

export {HomePageView}