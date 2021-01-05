let dwight = document.getElementById('dwight')
let jim = document.getElementById('jim')
let michael = document.getElementById('michael')
let angela = document.getElementById('angela')
let kevin = document.getElementById('kevin')
let meredith = document.getElementById('meredith')
let phyllis = document.getElementById('phyllis')
let stanley = document.getElementById('stanley')
let ryan = document.getElementById('ryan')
let kelly = document.getElementById('kelly')
let toby = document.getElementById('toby')
let pam = document.getElementById('pam')

/*FUNCTION*/

const generate = () => {
    let dob = document.querySelector('#dob').value
    let dobArray = dob.split('-')
    /*Capricorn December 22 - January 19*/
    if (dobArray[1]=='01' && dobArray[2]<= '19' || dobArray[1]=='12' && dobArray[2] >='22') {
        dwight.classList.remove('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        pam.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /*Aquarius January 20 - February 18*/
    if (dobArray[1]=='01' && dobArray[2]>= '20' || dobArray[1]=='02' && dobArray[2] <='18') {
        pam.classList.remove('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /* Pisces February 19 - March 20*/
    if (dobArray[1]=='02' && dobArray[2]>= '19' || dobArray[1]=='03' && dobArray[2] <='20') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.remove('hidden')
        toby.classList.add('hidden')
    } 
    /*Aries March 21 - April 19 */
    if (dobArray[1]=='03' && dobArray[2]>= '21' || dobArray[1]=='04' && dobArray[2] <='19') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.remove('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /*Taurus April 20 - May 20*/
    if (dobArray[1]=='04' && dobArray[2]>= '20' || dobArray[1]=='05' && dobArray[2] <='20') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.remove('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /*Gemini May 21 - June 20*/
    if (dobArray[1]=='05' && dobArray[2]>= '21' || dobArray[1]=='06' && dobArray[2] <='20') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.remove('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /*Cancer June 21 - July 22*/
    if (dobArray[1]=='06' && dobArray[2]>= '21' || dobArray[1]=='07' && dobArray[2] <='22') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.remove('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /* leo July 23 - August 22*/
    if (dobArray[1]=='07' && dobArray[2]>= '23' || dobArray[1]=='08' && dobArray[2] <='22') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.remove('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /*Virgo August 23 - September 22*/

    if (dobArray[1]=='08' && dobArray[2]>= '23' || dobArray[1]=='09' && dobArray[2] <='22') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.remove('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
    /*Libra September 23 - October 22*/
    if (dobArray[1]=='09' && dobArray[2]>= '23' || dobArray[1]=='10' && dobArray[2] <='22') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.remove('hidden')
    } 
    /*Scorpio October 23 - November 21*/
    if (dobArray[1]=='10' && dobArray[2]>= '23' || dobArray[1]=='11' && dobArray[2] <='21') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.add('hidden')
        angela.classList.remove('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    }
     /*Sagittarius November 22 - December 21*/
    if (dobArray[1]=='11' && dobArray[2]>= '22' || dobArray[1]=='12' && dobArray[2] <='21') {
        pam.classList.add('hidden')
        dwight.classList.add('hidden')
        jim.classList.add('hidden')
        michael.classList.remove('hidden')
        angela.classList.add('hidden')
        kevin.classList.add('hidden')
        phyllis.classList.add('hidden')
        meredith.classList.add('hidden')
        stanley.classList.add('hidden')
        ryan.classList.add('hidden')
        kelly.classList.add('hidden')
        toby.classList.add('hidden')
    } 
}
document.querySelector('#generate').addEventListener('click', generate)