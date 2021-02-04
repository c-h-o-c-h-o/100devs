const owlbot = require('./index.js')


var client = owlbot(process.env.OWLBOT_TOKEN);
var arg_values = process.argv
var word = arg_values[2]
if(word){
    client.define(word).then(function(result){
       console.log(result);
    });
}