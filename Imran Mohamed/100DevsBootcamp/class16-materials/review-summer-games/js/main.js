//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 

function arrayProduct(arr){
    alert(arr.reduce((a,b)=>a*b))
}

arrayProduct([1,2,3,4,5,6])