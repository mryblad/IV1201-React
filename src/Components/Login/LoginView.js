import {Link} from 'react-router-dom';
const LoginView=({handleSubmit, translations, errorMessage})=>
    <div>
      <div className="login-from">
        <form onSubmit={handleSubmit}>
          <label>{translations.username}</label><br/>
          <input type="text" name="username" placeholder={translations.enterUsername} required maxLength="16"/>
          <br/><label>{translations.password}</label><br/>
          <input type="password" name="password" placeholder={translations.enterPassword} required maxLength="24"/>
          <br/><button type="submit">{translations.login}</button>
        </form>
        <button onClick={() => window.location="/"}>{translations.homeRedirect}</button>
        <p>{errorMessage}</p>
      </div>
      <p>{translations.loginText.beforeLink}<Link to="/forgotPassword">{translations.loginText.afterLink}</Link></p>
    </div>

export {LoginView};
