//The user will enter a date. Use that date to get the NASA picture of the day from that date! https://api.nasa.gov/

const getDate = () => {
    let date = `https://api.nasa.gov/planetary/apod?api_key=yMEKHgy9eEPhFZDIJFP7YW0ahyV9FasS3qaZM6bq&date=${document.querySelector('input').value}` 
    fetch(date)
        .then (res => res.json())
        .then (data => {
            console.log(data)
            document.querySelector('#title').innerHTML = data.title
            document.querySelector('img').src = data.url
            document.querySelector('#explanation').innerHTML = data.explanation
        })
        .catch (err => {
            console.log(`error ${err}`)
        })   
}



document.querySelector('button').addEventListener('click', getDate)

