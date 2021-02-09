const LoginView=({handleSubmit})=>
    <div>
      <form onSubmit={handleSubmit}>
      <div className="login-from">
        <label>Username</label><br/>
        <input type="text" name="username" placeholder="Enter Username" required/>
        <br/><label>Password</label><br/>
        <input type="password" name="password" placeholder="Enter password" required/>
        <br/><button type="submit">Login</button>
      </div>
      </form>
    </div>

export {LoginView};
