var db = require('./database');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '10.200.0.79',
    user: 'master',
    password: '123456',
    database: 'dev',
    port: 3306
});
connection.connect();
connection.query('SELECT * FROM report_column_config WHERE column_type="metric"', function (err, results) {
    if (err) {
        console.log(err);
        return;
    }
    console.log(results);
});
connection.end();
var User = function () {
};

User.prototype.find = function (id, callback) {
    var sql = 'SELECT * FROM report_column_config WHERE column_type="metric"';
    // get a connection from the pool
    // db.pool.getConnection(function (err, connection) {
    //     if (err) {
    //         console.log(err);
    //         callback(true);
    //         return;
    //     }
    //     // make the query
    //     console.log(connection);
    //     connection.query(sql, [], function (err, results) {
    //         if (err) {
    //             console.log(err);
    //             callback(true);
    //             return;
    //         }
    //         callback(false, results);
    //     });
    // });


};

module.exports = User;