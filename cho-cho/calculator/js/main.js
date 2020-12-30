let ta_da = document.querySelector('#result').value



/* FUNCTIONS */
const add = (num1, num2) => {
    ta_da.innerText = num1 + num2
}
const min = (num1, num2) => {
    ta_da.innerText = num1-num2
}
const mult = (num1, num2) => {
    ta_da.innerText = num1*num2
}
const div = (num1, num2) => {
    ta_da.innerText = num1/num2
}
const change = (num) => {
    if (num>=0) {
        ta_da.innerText = num *= -1
    } else {
        ta_da.innerText = num *= -1
    }
}
const clear = () => {
    ta_da.innerText = 0
}
const del = (num) => {
    ta_da.innerText = num.toString().slice(0, -1)
}
const one = () => {
    document.querySelector('#result').value = 1
}
const two = () => {
    document.querySelector('#result').value = 2
}
const three = () => {
    document.querySelector('#result').value = 3
}
const four = () => {
    document.querySelector('#result').value = 4
}
const five = () => {
    document.querySelector('#result').value = 5
}
const six = () => {
    document.querySelector('#result').value = 6
}
const sev = () => {
    document.querySelector('#result').value = 7
}
const eight = () => {
    document.querySelector('#result').value = 8
}
const nine = () => {
    document.querySelector('#result').value = 9
}

/*Event Listeners*/
document.querySelector('#ac').addEventListener('click', clear)
document.querySelector('#del').addEventListener('click', del)
document.querySelector('#change').addEventListener('click', change)
document.querySelector('#div').addEventListener('click', div)
document.querySelector('#times').addEventListener('click', clear)
document.querySelector('#subtract').addEventListener('click', clear)
document.querySelector('#plus').addEventListener('click', clear)
document.querySelector('#zero').addEventListener('click', clear)
document.querySelector('#decimal').addEventListener('click', clear)
document.querySelector('#equals').addEventListener('click', clear)

/*Add numbers to the DOM*/
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#sev').addEventListener('click', sev)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)
