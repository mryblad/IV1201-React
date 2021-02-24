# IV1201-React

This project is is a part of the course Design of Global Applications (IV1201) on KTH. The project is a recruiting application for an amusement park where applicants can make applications to work and recruiters can either accept or decline those applications. To fulfill these requirements the project is split into three parts, client side, server side and database. This is the repository for the client side of the project and will only discuss what that entails. More info about the server and database side can be found here: [other repository](https://github.com/Botan-Cosar/iv1201-server).

## React

This client side of the project uses React to develop the website for the users. It is programmed based on functions as opposed to classes which is also popular in React. 

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## Code Style and Architecture

The client side is divided into each component, where each component has its own folder under the src/Components directory. For each component there is one presenter and one view. The presenter controlls the view and send the appropriate information to display.

Folder, Filename, Classes and highest scope Function all use PascalCase. All lower scope function and variables use camelCase. 

Under the Services folder is where all the API calls are handeled, this is where all the requests to the REST server is handeled. More about the REST server can be found in the [other repository](https://github.com/Botan-Cosar/iv1201-server).

## Translations

For Internationalization and Localization purposes the site can be displayed in different languages. Currently the user can click a flag to change language. Under the util directory stands the Translation.js file that stores all the translations on the client side, these then gets used by each view that needs it. In addition to this some things have to be stored in the database, this is currently only the competences which gets fetched from the service layer.

## GitHub Actions

This repository is set up with GitHub Actions to integrate a CI/CD pipeline that deploys to [this](https://console.firebase.google.com/u/2/project/iv1201-g14/overview) firebase project.

