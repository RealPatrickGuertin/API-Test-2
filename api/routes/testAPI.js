var express = require('express');
var router = express.Router();
const json = require('../database/cocktails.json');

function jsonToArray() {
    var arr = []
    for(let i = 0; i < json.cocktails.length; i++){
        arr.push(json.cocktails[i]);
    }
    return arr
}

var arr = jsonToArray();


router.get('/', function(req, res, next) {
    res.send(arr.toString())
});

module.exports = router