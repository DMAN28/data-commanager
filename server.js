const mysql = require('mysql2');
// The code starts by requiring the mysql2 library.
const express = require('express');
//This is used to connect to a MySQL database.
const inquirer = require('inquirer');
// The code starts by
const db = require('./db/connection');

const appPrompts = require('./utils/prompt');

//Next, express is required and it will be used for creating an Express application.

const PORT = process.env.PORT || 8000;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


    console.log(
      
      `Connected to the server 
      ╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗  ╔╦╗╔═╗  ╔╦╗╦ ╦╔═╗
      ║║║║╣ ║  ║  ║ ║║║║║╣    ║ ║ ║   ║ ╠═╣║╣ 
      ╚╩╝╚═╝╩═╝╚═╝╚═╝╩ ╩╚═╝   ╩ ╚═╝   ╩ ╩ ╩╚═╝ 
      ╔═╗┌─┐┬─┐┌┬┐┬ ┬┬  ┌─┐  ╔═╗╔╗╔╔═╗  ╔╦╗╔═╗╔╦╗╔═╗╔╗ ╔═╗╔═╗╔═╗
      ╠╣ │ │├┬┘││││ ││  ├─┤  ║ ║║║║║╣    ║║╠═╣ ║ ╠═╣╠╩╗╠═╣╚═╗║╣ 
      ╚  └─┘┴└─┴ ┴└─┘┴─┘┴ ┴  ╚═╝╝╚╝╚═╝  ═╩╝╩ ╩ ╩ ╩ ╩╚═╝╩ ╩╚═╝╚═╝
     `);


  
  driverMain ();