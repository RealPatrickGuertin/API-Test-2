const json = require('./cocktails.json');

function jsonParse() {
    var arr = []
    for(let i = 0; i < json.cocktails.length; i++){
        arr.push(json.cocktails[i]);
    }
    return arr
}

export default jsonParse