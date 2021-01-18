//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function evensFromArr(arr){

//iteration

    let even=[]
    arr.forEach( x => {if (x % 2 ===0) even.push(x) })

//filter

let evenFiltered = arr. filter(x => x % 2 == 0)

// map

let evenMapped =[] 
arr.map(x => x % 2 ===0 && evenMapped.push(x) )

console.log(evenFiltered, evenMapped, even)

}

evenArr([1,2,3,4,5,6])




