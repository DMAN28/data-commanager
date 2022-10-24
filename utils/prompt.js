const inquirer = require('inquirer');
//The code starts by importing the inquirer module.
// The function prompts the user to select an option and returns a promise that resolves when they do so.
//The code above returns an object containing the following keys: type: 'list', name: 'answer', message: 'Please Select an Option: ',
function driverMain () {
    inquirer.prompt({
       type:'list',
       name:'answer',
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
           'View drivers by team',
       
       ]
   })
   
   .then((res)=> {
             
     switch (res.answer){
   
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
     console.log(answer)
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
   
   
   function viewTeams(){ 
   return table = "SELECT * FROM team";
   
   };

   driverMain ();

   module.exports = appPrompts;