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
        // console.log(data);
        // console.log(data.weather[0].icon);
        // console.log(data.weather[0].main);
        // console.log(data.weather[0].description);
        // console.log(data.name);
        // console.log(data.main);
        // console.log(data.main.temp_min);
        // console.log(data.main.temp_max);

        result.innerHTML =`<h1>${data.name}</h1>
        <h3 class ="weather">${data.weather[0].main}</h3>
        
        <h3 class ="desc">${data.weather[0].description}</h3>
        <h1>${data.main.temp}&#176</h1>
        <div class = "temp-container">
            <div class= "temp-box">
                <h4 class = "title">Min</h4>
                <h4 class= "temp">${data.main.temp_min}&#176</h4>
            </div>
            <div class= "temp-box">
                <h4 class = "title">Max</h4>
                <h4 class= "temp">${data.main.temp_max}&#176</h4>
            </div>
        </div>`;
    })
    .catch(() => {
        result.innerHTML = `<h3>No such City found </h3>`;
    })
    }
};
searchBtn.addEventListener('click', getWeather);
window.addEventListener('load', getWeather);