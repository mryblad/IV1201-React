import {Link} from 'react-router-dom';

const HomePageView=({translations})=>
    <div>
        <ul>
            <h1>{translations.header}</h1>
            <li><Link to="/login">{translations.login}</Link></li>
            <li><Link to="/create">{translations.createAccount}</Link></li>
        </ul>
    </div>

export {HomePageView}
