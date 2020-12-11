document.querySelector('#check').addEventListener('click', confetti)
document.querySelector('#x').addEventListener('click', bell)
document.querySelector('#stats').addEventListener('click', stats)

let body = document.querySelector('body')
const username = document.querySelector('#username').value

confetti_counter = 0
x_counter = 0



function confetti() {
    confetti_counter += 1
    if (body.style.backgroundImage != "url('confetti.gif')") {
        body.style.backgroundImage = "url('confetti.gif')"
        body.style.backgroundSize = 'cover'
        document.querySelector('#shame').classList.add('hidden')
    }
    if (confetti_counter % 2 == 0) {
        body.style.backgroundImage = 'initial'
        document.querySelector('#shame').classList.add('hidden')
    }   
}

function bell() {
    document.querySelector('#shame').classList.toggle('hidden')
    document.querySelector('body').style.backgroundImage = 'initial'
    x_counter += 1
}

function stats() {
    const username = document.querySelector('#username').value
    document.querySelector('#output1').innerHTML = `${username} has pushed code ${confetti_counter} times!`
    document.querySelector('#output2').innerHTML = `${username} has slacked off ${x_counter} times!` 
}

/* function confetti() {
    confetti_counter += 1
    if (body.style.backgroundImage != "url('confetti.gif')") {
        body.style.classList.add('confetti')
        document.querySelector('#shame').classList.add('hidden')
    }
    if (body.style.backgroundImage == "url('confetti.gif')") {
        body.style.classList.remove('confetti')
        document.querySelector('#shame').classList.add('hidden')
    }   
} this doesnt work, syntax error
*/