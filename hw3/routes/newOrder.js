// Zhi Chen
// This is a copy of users.js, which is modified to send the order to a database
var exports = require('./dbms');
var express = require('express');
var router = express.Router();


router.post('/', function(req, res, next) {
    var topping = data.topping;
    var quantity = data.quantity;
    var orderText = data.orderText
    
    // Call included function with prepared SQL request
    exports.dbquery("INSERT INTO ORDERS (ORDERID, MONTH, DAY, QUANTITY, TOPPING, NOTES) VALUES (69, \"JAN\", 1, " + quantity + ", \"" + topping + "\", \"" + orderText + "\");", function(error, results){
        console.log(results);

    });
});

module.exports = router;
