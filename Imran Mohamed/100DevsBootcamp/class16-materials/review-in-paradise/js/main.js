// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = 'burgers'
food = 'pizza'
alert(food)

//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let string = 'whattup'
alert(string.charAt(1))


// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.

function divideAndMultiply(n1,n2,n3){
    alert((n1/n2)*n3)
}
divideAndMultiply(7,14,10)

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeRoot(n){
    console.log(n**(1/3));
}
cubeRoot(27)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function summerTime(month){
    let m = month.toLowerCase()
    if (m === 'june' || m === 'july' || m === 'august') alert('YAY')
    else alert('Booo')
}


//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function missFives(n){
    let i = 1
    while(i<=n){
        i%5 !==0 && console.log(i);
        i++
    }
}

missFives(26)