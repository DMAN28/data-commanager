const mysql = require('mysql2');
// The code starts by requiring the mysql2 library.
const express = require('express');
//This is used to connect to a MySQL database.
const inquirer = require('inquirer');

//Next, express is required and it will be used for creating an Express application.

const PORT = process.env.PORT || 8000;
const app = express();


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      //user: process.env.DB_USER,
      user: 'root',
      // Your MySQL password
      //password: process.env.DB_PW,
      password: 'Admc#4512ay',
      database: 'fonedrvrtrkr',
    },
    console.log('Connected to database.')
  );

 //GET a single driver
 db.query(`SELECT * FROM drivers WHERE id = 1`, (err, row) => {
    if (err) {
      console.log(err);
    }
    console.log(row);
  });  

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

}


  //Response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  driverMain ();