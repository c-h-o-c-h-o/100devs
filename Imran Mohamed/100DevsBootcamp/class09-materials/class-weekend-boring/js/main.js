document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()

  switch (day){
    case "monday" : 
      alert("I F***ing HATE Mondays");
    break;
    case "wednesday" : 
      alert ("Humpday!! Halfway there");
    break;
    case "tuesday":
    case "thursday":
      alert("100 Devs Class Tonight Baby!")
    break;
    case "friday":
      alert("TGIF!!!")
    break;
    case "saturday":
      alert("Office Hours today!!!")
    break;
    case "sunday":
      alert ("Time To Chillax and Stream Mandalorian; This Is The Way!!! ")
    default: alert("Woah There Buddy! Something Went Wrong!!!")
  }


}
