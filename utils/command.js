const connection = require('../db/connection');
// The code starts by importing the database connection and then defines three commands that will be used to draw SQL tables.
// The first command, showTeams(), returns a table of all teams ordered by name.
// Get all candidates
// Creates class constructor functions for 'server.js' to refer to and utilize
class DB {
    // Keeping a reference to the connection on the class in case it is needed later
    constructor(connection) {
        this.connection = connection;
    }

    // Find and display all teams
    findAllTeams() {
        return this.connection.promise().query(
            `SELECT * FROM teams;`
        );
    }
};


//The second command, showRoles(), returns a table of all cars
// The third command, showDrivers(),
 // GET a single employee


 module.exports = new DB(connection); 