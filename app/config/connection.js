// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

if (process.env.JAWSDB_URL) {

    mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // Set up our connection information
    var connection = mysql.createConnection({
        port: 3306,
        host: "localhost",
        user: "root",
        password: "root",
        database: "emr2_db"
    });
}

// Connect to the database
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;