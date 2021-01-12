/*GLOBAL*/
let num1, num2, op, checkbox
counter = 0
let body = document.querySelector('body')
let butans = document.getElementsByClassName('butans')
/******** FUNCTIONS ********/
const light = () => {
    if (document.getElementById('toggle').checked) {
        body.style.backgroundColor = 'white'
        body.style.color = 'black'
        body.style.transition = '.5s'
        document.getElementById('border-toggle').style.borderColor = 'black'
        for (let butan of butans) {
            butan.style.borderColor = 'black'
        }
    } else {
        body.style.backgroundColor = 'black'
        body.style.color = 'white'
        body.style.transition = '.5s'
        document.getElementById('border-toggle').style.borderColor = 'white'
        for (let butan of butans) {
            butan.style.borderColor = 'white'
        }
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
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
}
const one = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
 
}
const two = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
  
}
const three = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
 
}
const four = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
   
}
const five = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
   
}
const six = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
   
}
const sev = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
  
}
const eight = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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
   
}
const nine = () => {
    let len = document.querySelector('#result').value.length
    if (len<= 11) {
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

