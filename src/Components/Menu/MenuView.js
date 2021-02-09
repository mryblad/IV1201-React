import {Link} from 'react-router-dom';

const MenuView=({})=>
    <div className="menu">
        <ul>
            <li><Link to="/example">Example</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/create">Create</Link></li>
        </ul>
    </div>

export {MenuView};
