var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, [tableInput], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },

    insertOne: function(tableInput, burger_name) {
        var queryString = "INSERT into ?? (burger_name) value (?)";
        connection.query(queryString, [tableInput, burger_name], function(err, result) {
            if (err) throw err;
            console.log(result);
          });
    },

    updateOne: function(tableInput, devoured, id) {
        var queryString = "UPDATE ?? SET ?? = true where id = ?";
        connection.query(queryString, [tableInput, devoured, id], function(err, result) {
            if (err) throw err;
            console.log(result);
          });
}}

module.exports = orm