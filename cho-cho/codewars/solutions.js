//https://www.codewars.com/kata/550498447451fbbd7600041c

//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

function comp(a, b) {
    return (a != null && b != null) ? (a.sort((c, d) => c - d).map(x => x**2).join('') === b.sort((c,d) => c - d).join('')) : false
 }

 //This is the first one line solution I've submitted! 