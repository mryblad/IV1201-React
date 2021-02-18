import {Link} from 'react-router-dom';
const LoginView=({handleSubmit})=>
    <div>
      <div className="login-from">
        <form onSubmit={handleSubmit}>
          <label>Username</label><br/>
          <input type="text" name="username" placeholder="Enter Username" required maxLength="16"/>
          <br/><label>Password</label><br/>
          <input type="password" name="password" placeholder="Enter password" required maxLength="24"/>
          <br/><button type="submit">Login</button>
        </form>
      </div>
      <p>Have you forgot your password or can{'\''}t login to an old account? Click <Link to="/forgotPassword">here</Link></p>
    </div>

export {LoginView};
