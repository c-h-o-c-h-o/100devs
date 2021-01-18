// Please create a function that takes in the name of a person. This function should add this person to a names list and let them know their position on the list. The names list should be created outside of the function. 

let names = [];

function listName(name){
    names.push(name);
    let position = names.indexOf(name) + 1
    alert(`${name} is in position ${position}`)
}