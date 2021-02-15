const LoginView=({handleSubmit, toggleForgot, formDisplay})=>
    <div>
      <div className="login-from" style={{display: formDisplay.login}}>
        <form onSubmit={handleSubmit}>
          <label>Username</label><br/>
          <input type="text" name="username" placeholder="Enter Username" required maxLength="16"/>
          <br/><label>Password</label><br/>
          <input type="password" name="password" placeholder="Enter password" required maxLength="24"/>
          <br/><button type="submit">Login</button>
        </form>
      </div>
      <div className="forgotPassword-from" style={{display: formDisplay.forgotPassword}}>
        <form onSubmit={handleSubmit}>
          <label>Email</label><br/>
          <input type="email" name="email" placeholder="Enter Email" required maxLength="24"/>
          <br/><button type="submit">Request password reset</button>
          </form>
      </div>
      <br/><button onClick={toggleForgot}>Forgot password?</button>
    </div>

export {LoginView};
