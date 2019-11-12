mysql = require('mysql');
connectionString = 'mysql://root:@localhost/projetofinal';

db = {}
db.cnn = {};
db.cnn.exec = function(query, callback) {
  var connection = mysql.createConnection(connectionString);
  connection.query(query, function(err, rows) {
    callback(rows, err);
    connection.end();
  });
};

var App = {
   db: db
}

module.exports = App;