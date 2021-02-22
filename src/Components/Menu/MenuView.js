import {Link} from 'react-router-dom';


const MenuView=({translations})=>
    <div className="menu">
        <ul>
            <li><Link to="/example">{translations.example}</Link></li>
            <li><Link to="/login">{translations.login}</Link></li>
            <li><Link to="/forgotpassword">{translations.forgotPassword}</Link></li>
            <li><Link to="/create">{translations.create}</Link></li>
            <li><Link to="/apply">{translations.apply}</Link></li>
            <li><Link to="/applications">{translations.applications}</Link></li>
            <li><Link to="/updateperson">{translations.updatePerson}</Link></li>
        </ul>
    </div>

export {MenuView};
