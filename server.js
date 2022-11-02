const express = require('express');
//This is used to connect to a MySQL database.
const appPrompts = require('./utils/prompt');

const appFunctions = require('./utils/function')

//Next, express is required and it will be used for creating an Express application.
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());



const inquirer = require('inquirer');
//The code starts by importing the inquirer module.
// The function prompts the user to select an option and returns a promise that resolves when they do so.
//The code above returns an object containing the following keys: type: 'list', name: 'answer', message: 'Please Select an Option: ',

console.log(
      
    `----------------------------------------------------------------
----------------------------------------------------------------
        You are connected to the 2022 F1 Database
---------------------------------------------------------------
----------------------------------------------------------------
          ╦ ╦╔═╗╦  ╔═╗╔═╗╔╦╗╔═╗  ╔╦╗╔═╗  ╔╦╗╦ ╦╔═╗
          ║║║║╣ ║  ║  ║ ║║║║║╣    ║ ║ ║   ║ ╠═╣║╣ 
          ╚╩╝╚═╝╩═╝╚═╝╚═╝╩ ╩╚═╝   ╩ ╚═╝   ╩ ╩ ╩╚═╝ 
 ╔═╗┌─┐┬─┐┌┬┐┬ ┬┬  ┌─┐  ╔═╗╔╗╔╔═╗  ╔╦╗╔═╗╔╦╗╔═╗╔╗ ╔═╗╔═╗╔═╗
 ╠╣ │ │├┬┘││││ ││  ├─┤  ║ ║║║║║╣    ║║╠═╣ ║ ╠═╣╠╩╗╠═╣╚═╗║╣ 
 ╚  └─┘┴└─┴ ┴└─┘┴─┘┴ ┴  ╚═╝╝╚╝╚═╝  ═╩╝╩ ╩ ╩ ╩ ╩╚═╝╩ ╩╚═╝╚═╝
         `);
    
         

function driverMain () {
    inquirer.prompt([{
       type:'list',
       name:'menuSelection',
       message: 'Select an option',
       choices:[
           //View teams
           'View teams',
   
           //View car
           'View cars',
   
           //View driver
           'View driver', 
   
           //Add a teams
           'Add a team',
   
           //Add a car
           'Add a car', 
   
           //Add a driver
           'Add a driver', 
   
           //Update driver role
           'Update driver id',
   
           // Update primary driver
           'Update primary driver',
   
           //View teammates?
   
           //View by team
           'View drivers by team',],
           default: 'View all teams'
       

   }])
   
   .then(res => {
             
     switch (res.menuSelection){
   
         case 'View teams':
         viewTeams();
         break;
         
         case "View cars":
          viewCars();
         break;
         
         case "Add a team'":
         addTeam();
         break;
   
         case "Add a car":
         addCar();
         break;
   
         case "Add a driver'":
         addDriver();
         break;
   
         case "Add car":
         addCar();
         break;
     }
     //console.log(answer)
   });
   }
   
   
   function addDriver () {
     inquirer.prompt([
         {
             type:'input',
             name:'firstName',
             message:'First name?',  
         },
         {
             type:'input',
             name:'lastName',
             message:'Last name?',  
         },
         {
             type:'input',
             name:'Car',
             message:'Car?',  
         },
         {
             type:'input',
             name:'Team',
             message:'Team?',  
         },
     ])
   }
   
   function addTeam () {
     inquirer.prompt([
         {
             type:'input',
             name:'Team',
             message:'Team name?',  
         },
       
     ])
   }
   
   function addCar () {
     inquirer.prompt([
         {
             type:'input',
             name:'Car',
             message:'Car?',  
         },
       
     ])
   }
   
   
//    function viewTeams(){ 
//    return table = "SELECT * FROM team";

   
//    };

   driverMain ();

  
 