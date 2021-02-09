const CreateAccountView=({handleSubmit})=>
    <div>
      <form onSubmit={handleSubmit}>
      <div className="create-form">
        <div className="firstName">
          <label for="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="First name" required/><br></br>
        </div>
        <div className="lastName">
          <label for="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName" placeholder="Last name" required/><br></br>
        </div>
        <div className="email">
          <label for="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="example@email.com" required/><br></br>
        </div>
        <div className="ssn">
          <label for="ssn">Social security number:</label>
          <input type="text" id="ssn" name="ssn" placeholder="YYMMDDXXXX" required/><br></br>
        </div>
        <div className="username">
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" placeholder="Username" required/><br></br>
        </div>
        <div className="password">
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Password" required/><br></br>
        </div>
      </div>
      </form>
    </div>

export {CreateAccountView};
