const getWeather = () => {
    let search = document.getElementById("search");
    const city = search.value;
    const key = "335dcff536a2f62b3026496409a50962";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    if(city === ""){
        weatherInfo.innerHTML = `
                <span class="text-2xl font-semibold">Please Enter A City Name</span>
            `
        return;
    }


    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            const weatherInfo = document.getElementById("weatherInfo");

            // const name = data.name;
            // const Tempetature = data.main.temp;
            // const Weather = data.weather[0].description;
            // const Humidity = data.main.humidity;
            // const windSpeed = data.wind.speed;

            weatherInfo.innerHTML = `
                <h4 class="text-2xl"><span class="text-2xl font-semibold">Place:</span> ${data.name}</h4>
                <h4 class="text-2xl"><span class="text-2xl font-semibold">Tempetature:</span> ${data.main.temp}°C</h4>
                <h4 class="text-2xl"><span class="text-2xl font-semibold">Weather:</span> ${data.weather[0].description}</h4>
                <h4 class="text-2xl"><span class="text-2xl font-semibold">Humidity:</span> ${data.main.humidity}%</h4>
                <h4 class="text-2xl"><span class="text-2xl font-semibold">Wind Speed:</span> ${data.wind.speed} m/s</h4>
            `
        })
        .catch(error => {
            console.error('Error:', error);
            weatherInfo.innerHTML = `
                <span class="text-2xl font-semibold">Not City Found</span>
            `
        })

        search.value = "";
}

