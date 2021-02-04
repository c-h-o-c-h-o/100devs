
const search = () => {
    let Owlbot = require('owlbot-js');
    let client = Owlbot('32ab64950853c8eca37ac3382a985aa5e69e3c7f');
    let input = document.querySelector('input').value
    client.define(input).then(function(result){
        document.querySelector('h2').innerHTML = result.word
     });
}

document.querySelector('button').addEventListener('click', search)