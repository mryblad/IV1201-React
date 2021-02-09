const CreateAccountView=({handleSubmit})=>
    <div>
      <form onSubmit={handleSubmit}>
      <div className="create-form">
        <div className="firstName">
          <label htmlFor="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="First name" required/><br></br>
        </div>
        <div className="lastName">
          <label htmlFor="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last name" required/><br></br>
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="example@email.com" required/><br></br>
        </div>
        <div className="ssn">
          <label htmlFor="ssn">Social security number:</label>
          <input type="text" id="ssn" name="ssn" placeholder="YYMMDDXXXX" required/><br></br>
        </div>
        <div className="username">
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Username" required/><br></br>
        </div>
        <div className="password">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" required/><br></br>
        </div>
        <button type="submit">Create Account</button>
      </div>
      </form>
    </div>

export {CreateAccountView};
