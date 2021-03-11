import React from 'react';

const CreateAccountView=({handleSubmit, translations, errorMessage})=>
    <div>
      <form onSubmit={handleSubmit}>
      <div className="create-form">
        <div className="firstName">
          <label htmlFor="firstName">{translations.firstName}:</label>
          <input type="text" id="firstName" name="firstName" placeholder={translations.firstName} required maxLength="20"/><br></br>
        </div>
        <div className="lastName">
          <label htmlFor="lastName">{translations.lastName}:</label>
          <input type="text" id="lastName" name="lastName" placeholder={translations.lastName} required maxLength="20"/><br></br>
        </div>
        <div className="email">
          <label htmlFor="email">{translations.email}:</label>
          <input type="email" id="email" name="email" placeholder={translations.placeholder.email} required/><br></br>
        </div>
        <div className="ssn">
          <label htmlFor="ssn">{translations.ssn}:</label>
          <input type="date" id="ssn" name="ssn" placeholder={translations.placeholder.ssn} required /><br></br>
        </div>
        <div className="username">
          <label htmlFor="username">{translations.username}:</label>
          <input type="text" id="username" name="username" placeholder={translations.username} required maxLength="16"/><br></br>
        </div>
        <div className="password">
          <label htmlFor="password">{translations.password}:</label>
          <input type="password" id="password" name="password" placeholder={translations.password} required maxLength="24"/><br></br>
        </div>
        <button type="submit">{translations.createAccount}</button>
      </div>
      </form>
      <button onClick={() => window.location="/"}>{translations.homeRedirect}</button>
      <p>{errorMessage}</p>
    </div>

export {CreateAccountView};
