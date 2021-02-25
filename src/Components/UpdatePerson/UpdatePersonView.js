const UpdatePersonView=({ handleSubmit, handleEmpty, infoText, translations, errorMessage})=>
    <div>
      <p>{infoText}</p>
      <form onSubmit={handleSubmit}>
        <div className="create-form">
          <div className="firstName" style={{display: handleEmpty("name")}}>
            <label htmlFor="firstName">{translations.firstName}:</label>
            <input type="text" id="firstName" name="firstName" placeholder={translations.firstName} maxLength="20"/><br></br>
          </div>
          <div className="lastName" style={{display: handleEmpty("surname")}}>
            <label htmlFor="lastName">{translations.lastName}:</label>
            <input type="text" id="lastName" name="lastName" placeholder={translations.lastName} maxLength="20"/><br></br>
          </div>
          <div className="email" style={{display: handleEmpty("email")}}>
            <label htmlFor="email">{translations.email}:</label>
            <input type="email" id="email" name="email" placeholder={translations.placeholder.email}/><br></br>
          </div>
          <div className="ssn" style={{display: handleEmpty("ssn")}}>
            <label htmlFor="ssn">{translations.ssn}:</label>
            <input type="text" id="ssn" name="ssn" placeholder={translations.placeholder.ssn} maxLength="20"/><br></br>
          </div>
          <div className="username" style={{display: handleEmpty("username")}}>
            <label htmlFor="username">{translations.username}:</label>
            <input type="text" id="username" name="username" placeholder={translations.username} maxLength="16"/><br></br>
          </div>
          <div className="password" style={{display: handleEmpty("password")}}>
            <label htmlFor="password">{translations.password}:</label>
            <input type="password" id="password" name="password" placeholder={translations.password} maxLength="24"/><br></br>
          </div>
          <button type="submit">{translations.updateAccount}</button>
        </div>
      </form>
      <button onClick={() => window.location="/"}>{translations.homeRedirect}</button>
      <p>{errorMessage}</p>
    </div>

export {UpdatePersonView};
