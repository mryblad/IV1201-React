
export const Translations = {
  "en": {
    "header": {
      headerText: "IV1201 Group 14 Recruiting Application",
      logoutButton: "Logout",
    },
    "footer": {
      footerText: "This is a footer",
    },
    "menu": {
      example: "Example",
      login: "Login",
      forgotPassword: "Forgot Password",
      create: "Create",
      apply: "Apply",
      applications: "Applications",
      updatePerson: "Update Person",
    },
    "login": {
      username: "Username",
      enterUsername: "Enter Username",
      password: "Password",
      enterPassword: "Enter Password",
      login: "Login",
      homeRedirect: "Home",
      loginText: {
        beforeLink: "Have you forgot your password or can't login to an old account? Click ",
        afterLink: "here",
      },
      error: "Invalid username or password."
    },
    "forgotPassword": {
      description: {
        line1: "Have you forgot your password or cannot access an old account?",
        line2: "Enter your email to reset your password.",
      },
      email: "Email",
      enterEmail: "Enter Email",
      resetPassword: "Reset Password",
      homeRedirect: "Home",
      error: "There is no account connected to this email address",
    },
    "createAccount": {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      ssn: "Birthdate",
      username: "Username",
      password: "Password",
      createAccount: "Create Account",
      homeRedirect: "Home",
      placeholder: {
        email: "example@email.com",
        ssn: "YYMMDDXXXX",
      },
      error: {
        autoLogin: "Failed to login to new account, try to log in manually.",
        createAccount: {
          username: "Failed to create account. Username already taken",
          email: "Failed to create account. Email already in use",
        },
        validators: {
          name: "First Name needs to be only characters and within 20 characters long",
          surname: "Last Name needs to be only characters and within 20 characters long",
          email: "Email has to be a valid email",
          ssn: "Birthdate has to be a valid",
          password: "Password has to 24 characters or less",
          username: "Username has to 16 characters or less",
        },
      },
    },
    "updatePerson": {
      firstName: "First Name",
      lastName: "Last Name",
      email: "Email",
      ssn: "Social Security Number",
      username: "Username",
      password: "Password",
      updateAccount: "Update Account",
      homeRedirect: "Home",
      placeholder: {
        email: "example@email.com",
        ssn: "YYMMDDXXXX",
      },
      infoText: {
        setPasswordText: "Set new password",
        fillGeneralInfoText: "Please fill out this information to continue",
        success: "Changes saved successfully!"
      },
      error: {
        saveFailed: "Failed to save changes, try again in a moment.",
        validators: {
          name: "First Name needs to be only characters and within 20 characters long",
          surname: "Last Name needs to be only characters and within 20 characters long",
          email: "Email has to be a valid email",
          ssn: "Birthdate has to be a valid",
          password: "Password has to 24 characters or less",
          username: "Username has to 16 characters or less",
        },
      },
    },
    "apply": {
      title: "APPLICATION",
      expertise: "Area of expertise",
      none: "None",
      yearsOfExperience: "Years of experience",
      addExpertise: "Add Expertise",
      startDate: "Available from",
      to: "to",
      addPeriod: "Add Period",
      submit: "Submit",
      error: {
        yoe: "Years of experience needs to be a number",
        periods: "Application periods have to be valid",
        empty: "Availabilityperiods cannot be empty",
      },
    },
    "homePage": {
      header: "IV1201 Group 14 Recruiting Application",
      login: "Login",
      createAccount: "Create Account",
    },
    "listApplications":{
      firstName: "Applicant First Name",
      lastName: "Applicant Last Name",
      availableStart: "Available Earliest",
      availableEnd: "Available Latest",
      applicationStart: "Applied Earliest",
      applicationEnd: "Applied Latest",
      competence: "Competence",
      any: "Any",
      search: "Search",
      error: "Could not get applications",
      name: "Name",
      applicationDate: "Application Date"
    },
    "showApplication":{
      name: "Name: ",
      competences: "Competences: ",
      type: "Type: ",
      years_of_experience: " Years of Experience: ",
      availableStart: "Can work from: ",
      availableEnd: " to: ",
      applicationDate: "Application submitted on: ",
      missingDate: "No submission date",
      unhandled: "Unhandled",
      application_status: "Status: ",
      msg: "Updated application status",
      errMsg: "Could not update application status",
      accept: "Accept",
      reject: "Reject",
      return: "Return"
    }
  },
  "se": {
    "header": {
      headerText: "IV1201 Grupp 14 Rekryteringsapplikation",
      logoutButton: "Logga ut",
    },
    "footer": {
      footerText: "Det här är en footer",
    },
    "menu":  {
      example: "Exempel",
      login: "Logga In",
      forgotPassword: "Glömt Lösenord",
      create: "Skapa Användare",
      apply: "Ansök",
      applications: "Ansökningar",
      updatePerson: "Uppdatera Person",
    },
    "login": {
      username: "Användarnamn",
      enterUsername: "Skriv Användarnamn",
      password: "Lösenord",
      enterPassword: "Skriv Lösenord",
      login: "Logga in",
      homeRedirect: "Hem",
      loginText: {
        beforeLink: "Har du glömt ditt lösenord eller kan inte logga in till ett gamalt konto? Klicka ",
        afterLink: "här",
      },
      error: "Fel användarnamn eller lösenord"
    },
    "forgotPassword": {
      description: {
        line1: "Har du glömt ditt lösenord eller kan inte logga in till ett gamalt konto?",
        line2: "Skriv in din email för att återställa ditt lösenord.",
      },
      email: "Email",
      enterEmail: "Skriv Email",
      resetPassword: "Återställ Lösenord",
      homeRedirect: "Hem",
      error: "Det finns inget konto kopplat till emailadressen",
    },
    "createAccount": {
      firstName: "Förnamn",
      lastName: "Efternamn",
      email: "Email",
      ssn: "Födelsedag",
      username: "Användarnamn",
      password: "Lösenord",
      createAccount: "Skapa Konto",
      homeRedirect: "Hem",
      placeholder: {
        email: "exempel@email.com",
        ssn: "YYMMDDXXXX",
      },
      error: {
        autoLogin: "Inloggning till nytt konto misslyckades, försök igen manuellt.",
        createAccount: {
          username: "Kunde inte skapa konto, användarnamnet är upptaget.",
          email: "Kunde inte skapa konto, emailadressen är kopplat till ett annat konto",
        },
      },
      validators: {
        name: "Förnamn måste bestå av bara bokstäver och vara inom 20 tecken långt",
        surname: "Efternamn måste bestå av bara bokstäver och vara inom 20 tecken långt",
        email: "Email måste vara giltig",
        ssn: "Birthdate måste vara giltig",
        password: "Lösenordet måste vara inom 24 karaktärer långt",
        username: "Användarnamnet måste vara inom 24 karaktärer långt",
      },
    },
    "updatePerson": {
      firstName: "Förnamn",
      lastName: "Efternamn",
      email: "Email",
      ssn: "Personnummer",
      username: "Användarnamn",
      password: "Lösenord",
      updateAccount: "Uppdatera Konto",
      homeRedirect: "Hem",
      placeholder: {
        email: "exempel@email.com",
        ssn: "YYMMDDXXXX",
      },
      infoText: {
        setPasswordText: "Bestäm nytt lösenord",
        fillGeneralInfoText: "Var god fyll i följande information för att fortsätta",
        success: "Ändringarna har sparats!"
      },
      error: {
        saveFailed: "Ändringen misslyckades, försök igen senare",
        validators: {
          name: "Förnamn måste bestå av bara bokstäver och vara inom 20 tecken långt",
          surname: "Efternamn måste bestå av bara bokstäver och vara inom 20 tecken långt",
          email: "Email måste vara giltig",
          ssn: "Birthdate måste vara giltig",
          password: "Lösenordet måste vara inom 24 karaktärer långt",
          username: "Användarnamnet måste vara inom 24 karaktärer långt",
        },
      },
    },
    "apply": {
      title: "ANSÖKAN",
      expertise: "Kunskapsområde",
      none: "Inget",
      yearsOfExperience: "År av erfarenhet",
      addExpertise: "Lägg till kunskapsområde",
      startDate: "Tillgänglig från",
      to: "till",
      addPeriod: "Lägg till period",
      submit: "Ansök",
      error: {
        yoe: "År av erfarenhet måste vara ett nummer",
        periods: "Ansöksperioden måste vara giltig",
        empty: "Tillgänglighetperioder får ej vara tomma",
      }
    },
    "homePage": {
      header: "IV1201 Grupp 14 Rekryteringsapplikation",
      login: "Logga in",
      createAccount: "Skapa Konto",
    },
    "listApplications":{
      firstName: "Sökandens Förnamn",
      lastName: "Sökandens Efternamn",
      availableStart: "Tillgänglig från och med",
      availableEnd: "Tillgänglig fram tills",
      applicationStart: "Sökte tidigast",
      applicationEnd: "Sökte senast",
      competence: "Kompetens",
      any: "Alla",
      search: "Sök",
      error: "Kunde inte hämta ansökningar",
      name: "Namn",
      applicationDate: "Ansökans datum"
    },
    "showApplication":{
      name: "Namn: ",
      competences: "Kompetenser: ",
      type: "Typ: ",
      years_of_experience: " År av erfarenhet: ",
      availableStart: "Tillgänglig från och med: ",
      availableEnd: " tills: ",
      applicationDate: "Ansökte den: ",
      missingDate: "Ansökningsdatum saknas",
      unhandled: "Ej hanterat",
      application_status: "Status: ",
      msg: "Updaterade ansökans status",
      errMsg: "Kunde ej uppdatera ansökans status",
      accept: "Acceptera",
      reject: "Avböj",
      return: "Tillbaka"
    }
  },
}
