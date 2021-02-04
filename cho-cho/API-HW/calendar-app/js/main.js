const search = () => {
    let country = document.querySelector('#country').value
    let year = document.querySelector('#year').value
    let url = `https://calendarific.com/api/v2/holidays?api_key=9b6f31b8d17d7625dc87421ff2d062bc92ccaca4&country=${country}&year=${year}`
    fetch (url)
    .then (res => res.json())
    .then (data => {
        let number = Math.floor(Math.random()* data.response.holidays.length)
        document.querySelector('#holiday').innerHTML = data.response.holidays[number].name
        document.querySelector('#date').innerHTML = data.response.holidays[number].date.iso
        document.querySelector('#description').innerHTML = data.response.holidays[number].description
        document.querySelector('#observance').innerHTML = data.response.holidays[number].type
    })
}

document.querySelector('button').addEventListener('click', search)