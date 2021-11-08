function getWeather() {
    let cityName = document.getElementById("city").value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=81d83a3681625cfbb1b88058b299cbcf`)
        .then(function (response) {
            console.log(response);
            document.getElementById("temp").innerText = `Tempearture: ${Math.round(response.data.main.temp - 273)} degrees Celcius`;
            document.getElementById("feel").innerText = `Feels Like: ${Math.round(response.data.main.feels_like - 273)} degrees Celcius`;
            document.getElementById("humidity").innerText = `Humidity: ${response.data.main.humidity} grams of water vapor per kilogram of air`;
        })
}