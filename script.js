let result = document.querySelector('.result');
let searchBtn = document.querySelector('.search-btn');
let cityRef = document.querySelector('#city');


let getWeather =  () => {
    let cityValue = cityRef.value; 
    //if input field is empty
    if(cityRef.value == 0){
        result.innerHTML = `<h3> Please Enter the City </h3>`;
    }
    else{
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric`;
    fetch(url)
    .then((resp) => resp.json())
    //if input field is valid
    .then((data) => {
        console.log(data);
    })
    .catch(() => {
        result.innerHTML = `<h3>No such City found </h3>`;
    })
    }
};
window.addEventListener('load', getWeather);