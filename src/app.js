let test = console.log("Test");

let weather = {
    "apiKey":"4fad4032923c1deb5a9b743a47dc07e5",
    fetchWeather: function (city){
        fetch(
        "https://api.openweathermap.org/data/2.5/weather?q="
        + city 
        + "&units=metric&appid="
        + this.apiKey
        ).then((response) => response.json())
        .then((data) => console.log(data)); 
    },
    displayWeather: function (data) {
        const { name } = data;
        //const {icon} = data.weather[3];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, temp);
        document.querySelector(".city").innerText = "Weather in " + name;
        //document.querySelector("icon").src = "Weather in " + name;
        document.querySelector(".description").innerText = "Weather in " + name;
        document.querySelector(".temp").innerText = temp + "°";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
    },
};


// let cityName;
// let apiPull = url("https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + weather{apiKey};
