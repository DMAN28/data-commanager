//This is used to connect to a MySQL database.
const mysql = require('mysql2');
// The code starts by requiring the mysql2 library.

// Connect to database
const connection = mysql.createConnection(
    {
      host: 'localhost',
      // Your MySQL username,
      //user: process.env.DB_USER,
      user: 'root',
      // Your MySQL password
      //password: process.env.DB_PW,
      password: 'Admc#4512ay',
      database: 'f1racers',
    },
    console.log('You now have access to this database')
    );
      

    connection.connect((err) => {
        if(err) throw err
    })

    // Export connection 
    module.exports = connection;