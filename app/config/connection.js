// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {

    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    // Set up our connection information
    connection = mysql.createConnection({
        port: 3306,
        host: "k9xdebw4k3zynl4u.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        user: "chzu42rvc2qcqsa5",
        password: "ujg5rdu7cdnmazhu",
        database: "iixt272nmqi3lny8"
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