const UpdatePersonView=({ handleSubmit, handleEmpty, infoText})=>
    <div>
      <p>{infoText}</p>
      <form onSubmit={handleSubmit}>
        <div className="create-form">
          <div className="firstName" style={{display: handleEmpty("name")}}>
            <label htmlFor="firstName">First name:</label>
            <input type="text" id="firstName" name="firstName" placeholder="First name" maxLength="20"/><br></br>
          </div>
          <div className="lastName" style={{display: handleEmpty("surname")}}>
            <label htmlFor="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last name" maxLength="20"/><br></br>
          </div>
          <div className="email" style={{display: handleEmpty("email")}}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="example@email.com"/><br></br>
          </div>
          <div className="ssn" style={{display: handleEmpty("ssn")}}>
            <label htmlFor="ssn">Social security number:</label>
            <input type="text" id="ssn" name="ssn" placeholder="YYMMDDXXXX" maxLength="20"/><br></br>
          </div>
          <div className="username" style={{display: handleEmpty("username")}}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" placeholder="Username" maxLength="16"/><br></br>
          </div>
          <div className="password" style={{display: handleEmpty("password")}}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" placeholder="Password" maxLength="24"/><br></br>
          </div>
          <button type="submit">Update Account</button>
        </div>
      </form>
    </div>

export {UpdatePersonView};
