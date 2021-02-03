//https://www.codewars.com/kata/550498447451fbbd7600041c

//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(a, b) {
    return (a != null && b != null) ? (a.sort((c, d) => c - d).map(x => x**2).join('') === b.sort((c,d) => c - d).join('')) : false
 }

 //This is the first one line solution I've submitted! 

 //https://www.codewars.com/kata/54dc6f5a224c26032800005c

 /*A bookseller has lots of books classified in 26 categories labeled A, B, ... Z. Each book has a code c of 3, 4, 5 or more characters. The 1st character of a code is a capital letter which defines the book category.

In the bookseller's stocklist each code c is followed by a space and by a positive integer n (int n >= 0) which indicates the quantity of books of this code in stock.

For example an extract of a stocklist could be:

L = {"ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"}.
or
L = ["ABART 20", "CDXEF 50", "BKWRK 25", "BTSQZ 89", "DRTYM 60"] or ....
You will be given a stocklist (e.g. : L) and a list of categories in capital letters e.g :

M = {"A", "B", "C", "W"} 
or
M = ["A", "B", "C", "W"] or ...
and your task is to find all the books of L with codes belonging to each category of M and to sum their quantity according to each category.

For the lists L and M of example you have to return the string (in Haskell/Clojure/Racket a list of pairs):

(A : 20) - (B : 114) - (C : 50) - (W : 0)
where A, B, C, W are the categories, 20 is the sum of the unique book of category A, 114 the sum corresponding to "BKWRK" and "BTSQZ", 50 corresponding to "CDXEF" and 0 to category 'W' since there are no code beginning with W.

If L or M are empty return string is "" (Clojure and Racket should return an empty array/list instead).*/

// This is a fugly ass code

function stockList(listOfArt, listOfCat){
    if (listOfArt == false || listOfCat == false) {
      return ''
    }
    let nums = []
    let res = []
    let chars = []
    let first = []
    listOfArt.forEach((x, i) => {
      nums.push(x.split(' '))
  })
   
    nums.forEach((x, i) => {
        chars.push(`(${x[0][0]} : ${x[1]})`)
        first.push(x[0][0].toUpperCase())
      })
    console.log(chars)
    
    listOfCat.forEach((x, i) => {
      if (first.join('').includes(x) == false) {
        res.push(`(${x} : 0)`)
      }
      chars.forEach((y, i) => {
        let counter = 0
        if (y[1] === x)  {
        res.push(y)
      } 
    })
  })
  
    let pairs = res.map(s => s.match(/\w+/g)); // extract the relevant info
    let obj = Object.assign(...pairs.map(([k]) => ({ [k]: 0 }))); // start with 0
    for (let [k, v] of pairs) obj[k] += +v; // add all values
    let result = Object.entries(obj).map(([k, v]) => `(${k} : ${v})`); // format
    return result.join(' - ')
  
  }
  