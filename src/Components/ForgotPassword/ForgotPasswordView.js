const ForgotPasswordView=({handleSubmit})=>
    <div>
      <div className="forgotpassword-from">
      <p>Have you forgot your password or cannot access an old account?<br/>
         Enter your email to reset your password.</p>
        <form onSubmit={handleSubmit}>
          <label>Email</label><br/>
          <input type="email" name="email" placeholder="Enter Email" required maxLength="24"/>
          <br/><button type="submit">Reset password</button>
          <br/><br/><br/>
          </form>
      </div>
    </div>

export {ForgotPasswordView};
