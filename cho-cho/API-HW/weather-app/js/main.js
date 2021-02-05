let lat, lng
const result = () => {
    let city = document.querySelector('#city').value
    let state = document.querySelector('#state').value
    let country = document.querySelector('#country').value
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=271ce07adb517155700319e44e81fb5b`
    let params = 'airTemperature,windSpeed,gust,cloudCover,visibility,humidity,precipitation,snowDepth'
    fetch (url) 
        .then (res => res.json())
        .then (data => {
            console.log(data)
            lat = data.coord.lat
            lng = data.coord.lon
            fetch(`https://api.stormglass.io/v2/weather/point?lat=${lat}&lng=${lng}&params=${params}`, {
                headers: {
                  'Authorization': '71a629b6-67e0-11eb-b2a7-0242ac130002-71a62a92-67e0-11eb-b2a7-0242ac130002'
                }
            })
                .then (res => res.json())
                .then (data => {
                    console.log(data)
                })
        })
}
document.querySelector('button').addEventListener('click', result)

//Got nested fetches working. I use openweather api to grab a location's lng and lat coords and input that data into stormglass api to retrieve air temp, windspeed, gust, cloud cover, visibility, humidity, precipitation, and snowdepth. 
//Now need to figure out how to output the data into empty html divs. It looks like data is output in a 10 day forecast each array representing an hourly forecast for a specific day. 
//Would like to output a detailed 10 day forecast, with each hourly forecast outputting to their own column for a day's hourly forecast. 