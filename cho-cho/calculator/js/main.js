/*GLOBAL*/
let num1, num2, op, checkbox
counter = 0
let body = document.querySelector('body')

/******** FUNCTIONS ********/
const light = () => {
    if (document.getElementById('toggle').checked) {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        body.style.transition = '.5s'
        document.getElementById('border-toggle').style.borderColor = 'black'
        document.getElementById('ac').style.borderColor = 'black'
        document.getElementById('del').style.borderColor = 'black'
        document.getElementById('change').style.borderColor = 'black'
        document.getElementById('div').style.borderColor = 'black'
        document.getElementById('sev').style.borderColor = 'black'
        document.getElementById('eight').style.borderColor = 'black'
        document.getElementById('nine').style.borderColor = 'black'
        document.getElementById('times').style.borderColor = 'black'
        document.getElementById('four').style.borderColor = 'black'
        document.getElementById('five').style.borderColor = 'black'
        document.getElementById('six').style.borderColor = 'black'
        document.getElementById('subtract').style.borderColor = 'black'
        document.getElementById('one').style.borderColor = 'black'
        document.getElementById('two').style.borderColor = 'black'
        document.getElementById('three').style.borderColor = 'black'
        document.getElementById('plus').style.borderColor = 'black'
        document.getElementById('zero').style.borderColor = 'black'
        document.getElementById('decimal').style.borderColor = 'black'
        document.getElementById('equals').style.borderColor = 'black'
        document.getElementById('result').style.borderStyle = 'black'
    } else {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        body.style.transition = '.5s'
        document.getElementById('border-toggle').style.borderColor = 'white'
        document.getElementById('ac').style.borderColor = 'white'
        document.getElementById('del').style.borderColor = 'white'
        document.getElementById('change').style.borderColor = 'white'
        document.getElementById('div').style.borderColor = 'white'
        document.getElementById('sev').style.borderColor = 'white'
        document.getElementById('eight').style.borderColor = 'white'
        document.getElementById('nine').style.borderColor = 'white'
        document.getElementById('times').style.borderColor = 'white'
        document.getElementById('four').style.borderColor = 'white'
        document.getElementById('five').style.borderColor = 'white'
        document.getElementById('six').style.borderColor = 'white'
        document.getElementById('subtract').style.borderColor = 'white'
        document.getElementById('one').style.borderColor = 'white'
        document.getElementById('two').style.borderColor = 'white'
        document.getElementById('three').style.borderColor = 'white'
        document.getElementById('plus').style.borderColor = 'white'
        document.getElementById('zero').style.borderColor = 'white'
        document.getElementById('decimal').style.borderColor = 'white'
        document.getElementById('equals').style.borderColor = 'white'
    }
}
const add = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'add'
}
const min = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'min'
}
const mult = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'mult'
}
const div = () => {
    num1 = Number(document.querySelector('#result').value)
    document.querySelector('#result').value = ''
    op = 'div'
}
const changeSign = () => {
    if (document.querySelector('#result').value >= 0) {
        document.querySelector('#result').value *= -1    
    } else {
        document.querySelector('#result').value *= -1
    }
}
const dec = () => {
    if (!document.querySelector('#result').value.includes('.')) {
        document.querySelector('#result').value += '.'
    } 
}
const equals = () => {
    num2 = Number(document.querySelector('#result').value)
    counter += 1
    if (counter >= 3) {
        document.querySelector('#reveal').classList.remove('hidden')
    }
    if (!document.getElementById('fix').checked) {
        if (op ==='add') {
            document.querySelector('#result').value = num1 - num2
        }
        if (op ==='min') {
            document.querySelector('#result').value = num1 + num2
        }
        if (op ==='mult') {
            document.querySelector('#result').value = num1 / num2
        }
        if (op ==='div') {
            document.querySelector('#result').value = num1 + num2
        }
    } else {
        if (op ==='add') {
            document.querySelector('#result').value = num1 + num2
        }
        if (op ==='min') {
            document.querySelector('#result').value = num1 - num2
        }
        if (op ==='mult') {
            document.querySelector('#result').value = num1 * num2
        }
        if (op ==='div') {
            document.querySelector('#result').value = num1 / num2
        }
    }
    num1, num2 = 0
    op = ''
}

const clear = () => {
    document.querySelector('#result').value = ''

}
const del = () => {
    document.querySelector('#result').value = document.querySelector('#result').value.slice(0,-1)
}
const zero = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 1
        } else {
            document.querySelector('#result').value += 1
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 0
        } else {
            document.querySelector('#result').value += 0
        }
    }
}
const one = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 0
        } else {
            document.querySelector('#result').value += 0
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 1
        } else {
            document.querySelector('#result').value += 1
        }
    }
}
const two = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 1
        } else {
            document.querySelector('#result').value += 1
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 2
        } else {
            document.querySelector('#result').value += 2
        }
    }
}
const three = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 2
        } else {
            document.querySelector('#result').value += 2
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 3
        } else {
            document.querySelector('#result').value += 3
        }
    }
}
const four = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 3
        } else {
            document.querySelector('#result').value += 3
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 4
        } else {
            document.querySelector('#result').value += 4
        }
    }
}
const five = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 4
        } else {
            document.querySelector('#result').value += 4
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 5
        } else {
            document.querySelector('#result').value += 5
        }
    }
}
const six = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 5
        } else {
            document.querySelector('#result').value += 5
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 6
        } else {
            document.querySelector('#result').value += 6
        }
    }
}
const sev = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 6
        } else {
            document.querySelector('#result').value += 6
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 7
        } else {
            document.querySelector('#result').value += 7
        }
    }
}
const eight = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 7
        } else {
            document.querySelector('#result').value += 7
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 8
        } else {
            document.querySelector('#result').value += 8
        }
    }
}
const nine = () => {
    if (!document.getElementById('fix').checked) {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 8
        } else {
            document.querySelector('#result').value += 8
        }
    } else {
        if (document.querySelector('#result').value == '') {
            document.querySelector('#result').value = 9
        } else {
            document.querySelector('#result').value += 9
        }
    }
}

/**************Event Listeners****************/
document.querySelector('#ac').addEventListener('click', clear)
document.querySelector('#del').addEventListener('click', del)
document.querySelector('#change').addEventListener('click', changeSign)
document.querySelector('#div').addEventListener('click', div)
document.querySelector('#times').addEventListener('click', mult)
document.querySelector('#subtract').addEventListener('click', min)
document.querySelector('#plus').addEventListener('click', add)
document.querySelector('#decimal').addEventListener('click', dec)
document.querySelector('#equals').addEventListener('click', equals)
document.querySelector('#toggle').addEventListener('click', light)

/**************Add numbers to the DOM***************/
document.querySelector('#zero').addEventListener('click', zero)
document.querySelector('#one').addEventListener('click', one)
document.querySelector('#two').addEventListener('click', two)
document.querySelector('#three').addEventListener('click', three)
document.querySelector('#four').addEventListener('click', four)
document.querySelector('#five').addEventListener('click', five)
document.querySelector('#six').addEventListener('click', six)
document.querySelector('#sev').addEventListener('click', sev)
document.querySelector('#eight').addEventListener('click', eight)
document.querySelector('#nine').addEventListener('click', nine)

/*******Reveal fix-it *******/
