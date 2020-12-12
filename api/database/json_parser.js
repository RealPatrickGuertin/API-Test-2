const json = require('./cocktails.json');


var arr = []
for(i = 0; i < json.cocktails.length; i++){
arr.push(json.cocktails[i]);
}
console.log(arr)