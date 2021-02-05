
const result = () => {
    let city = document.querySelector('#city').value
    let state = document.querySelector('#state').value
    let country = document.querySelector('#country').value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=271ce07adb517155700319e44e81fb5b`
    fetch (url) 
        .then (res => res.json())
        .then (data => {
            console.log(data)
            document.querySelector('h2').innerHTML = `Temperature (Kelvin): ${data.main.temp}`
        })
}
document.querySelector('button').addEventListener('click', result)

//Need to make a Kelvin to Fahrenheit converter function as well as F-C converter function. The fetch works and grabs data correctly. I can also combine this with an api that takes long & lat. 