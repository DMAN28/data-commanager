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

 // GET a single driver
//  db.query(`SELECT * FROM drivers WHERE id = 1`, (err, row) => {
//     if (err) {
//       console.log(err);
//     }
//     console.log(row);
//   });  

function driverMain () {

return inquirer.prompt({
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
});

}


  //Response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  
  driverMain ();