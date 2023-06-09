// Import the mssql package
var sql = require("mssql");

// Create a configuration object for our Azure SQL connection parameters
var dbConfig = {
    server: "weddingzin.database.windows.net", // Use your SQL server name
    database: "weddingz", // Database to connect to
    user: "msrty", // Use your username
    password: "nearbyyou@123", // Use your password
    port: 1433,
    // Since we're on Windows Azure, we need to set the following options
    options: {
        encrypt: true
    }
};

// This function connects to a SQL server, executes a SELECT statement,
// and displays the results in the console.
function getRecords() {
    // Create connection instance
    var conn = new sql.ConnectionPool(dbConfig);

    conn.connect()
        // Successfull connection
        .then(function () {

            // Create request instance, passing in connection instance
            var req = new sql.Request(conn);

            // Call mssql's query method passing in params
            req.query("SELECT * FROM test;")
                .then(function (recordset) {
                    console.log(recordset);
                    conn.close();
                })
                // Handle sql statement execution errors
                .catch(function (err) {
                    console.log(err);
                    conn.close();
                })

        })
        // Handle connection errors
        .catch(function (err) {
            console.log(err);
            conn.close();
        });
}


getRecords();