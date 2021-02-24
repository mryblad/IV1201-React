const ForgotPasswordView=({handleSubmit, translations})=>
    <div>
      <div className="forgotpassword-from">
      <p>{translations.description.line1}<br/>
         {translations.description.line2}</p>
        <form onSubmit={handleSubmit}>
          <label>{translations.email}</label><br/>
          <input type="email" name="email" placeholder={translations.enterEmail} required maxLength="24"/>
          <br/><button type="submit">{translations.resetPassword}</button>
          <br/><br/><br/>
          </form>
      </div>
    </div>

export {ForgotPasswordView};
