let searchButton = document.getElementById('search-button');


function getApi() {
    let userSearch = document.getElementById("user-search").value
    var requestUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${userSearch}&units=imperial&appid=08f021b8984031642c1fe43ac7027511`;

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
      getApi1()
      displayForecast(data.list[3], data.list[11], data.list[19], data.list[27], data.list[35])
      })
};

function getApi1() {
    let userSearch = document.getElementById("user-search").value
    var requestUrl1 = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&units=imperial&appid=910806b278b33f1777e94e6b5bddd6df`;

    fetch(requestUrl1)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
      appendCity(data.name)
      displayInfo(data.name, data.main.temp, data.main.humidity, data.wind.speed)
      })
}

const appendCity = (cityName) => {
    let citylist = cityName
    let searchHistory = document.getElementById("search-history")
    let cityname = document.createElement('h2')
    cityname.textContent = citylist
    searchHistory.appendChild(cityname)
}

const displayInfo = (cityName, cityTemp, cityHumidity, cityWind) => {
    let cityNamedate = document.getElementById('city-name-date')
    let temp = document.getElementById('temp')
    let wind = document.getElementById('wind')
    let humidity = document.getElementById('humidity')
    let today = moment().format("MM-DD-YYYY")

    cityNamedate.textContent = (`${cityName} ${today}`);
    temp.textContent = `Temp: ${cityTemp}°F`;
    wind.textContent = `Wind: ${cityWind} MPH`;
    humidity.textContent = `Humidity: ${cityHumidity} %`;
}

const displayForecast = (day1, day2, day3, day4, day5) => {
    let dayList = [day1, day2, day3, day4, day5]
    let forecastParent = document.getElementById("five-day-forecast")
    while (forecastParent.hasChildNodes()) {
        forecastParent.removeChild(forecastParent.firstChild);
      }

    dayList.forEach(day => {
        let currentDay = moment(day.dt_txt).format("MM-DD-YYYY")
        let currentTemp = day.main.temp
        let currentWind = day.wind.speed
        let currentHumidity = day.main.humidity
        let display = document.createElement('section')
        let dateDisplay = document.createElement('h1')
        let tempDisplay = document.createElement('li')
        let windDisplay = document.createElement('li')
        let humidityDisplay = document.createElement('li')

        dateDisplay.textContent = currentDay
        tempDisplay.textContent = `Temp: ${currentTemp}°F`
        windDisplay.textContent = `Wind: ${currentWind} MPH`
        humidityDisplay.textContent = `Humidity: ${currentHumidity} %`

        forecastParent.appendChild(display)
        display.appendChild(dateDisplay)
        display.appendChild(tempDisplay)
        display.appendChild(windDisplay)
        display.appendChild(humidityDisplay)

    });
}

searchButton.addEventListener('click', getApi);