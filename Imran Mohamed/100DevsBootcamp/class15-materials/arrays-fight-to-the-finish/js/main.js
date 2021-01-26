//Create an array of movie titles. Loop through the array and each element to the h2.
const title = document.querySelector('h2')

let movies = ['jaws', 'jaws 2', 'jaws 3']

movies.forEach(x => title.innerText += x )

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums = [1,2,3,4,5]

nums.forEach(x => x+=3)

console.log(nums);

//Find the average of all the numbers from question three
console.log( (nums.reduce((a,b)=>a+b))/nums.length)