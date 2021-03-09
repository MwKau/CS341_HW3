// Zhi Chen
// This is a copy of users.js, which is modified to create an array
// and convert it into a JSON, which is sent instead of default text.
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
    // Creates a new object to send
    var toppingData = [ {topping: "Cherry", quantity: "2"},
                        {topping: "Plain", quantity: "6"},
                        {topping: "chocolate", quantity: "3"} ];

    // Creates a JSON from object
    var stringToppingData = JSON.stringify(toppingData);

    // Send data
    res.json(stringToppingData);
});

module.exports = router;
