const SetPasswordView=({handleSubmit})=>
    <div>
      <div className="setpassword-from">
        <p>Enter your new password here:</p>
          <form onSubmit={handleSubmit}>
            <label>Password</label><br/>
            <input type="password" name="password" placeholder="Enter Password" required maxLength="24"/>
            <br/><button type="submit">Set password</button>
            </form>
      </div>
    </div>

export {SetPasswordView};
