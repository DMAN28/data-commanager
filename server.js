const express = require('express');
//This is used to connect to a MySQL database.
const appPrompts = require('./utils/prompt');

const appFunctions = require('./utils/function')

//Next, express is required and it will be used for creating an Express application.
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



function application() {
  let { answer } = appPrompts.mainPrompt();

  if (answer === 'Quit') {
    console.log('Bye!');
    process.exit();
  };

  appFunctions[answer]();

    application();

    
  };

  
 