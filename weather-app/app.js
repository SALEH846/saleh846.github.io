function getWeather() {
    let cityName = document.getElementById("city").value;
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q={cityName}&appid=81d83a3681625cfbb1b88058b299cbcf`)
        .then(function (response) {
            console.log(response);
        })
}