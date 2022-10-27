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
      })
}

const appendCity = (cityName) => {
    let citylist = cityName
    let searchHistory = document.getElementById("search-history")
    let cityname = document.createElement('h2')
    cityname.textContent = citylist
    searchHistory.appendChild(cityname)
}

searchButton.addEventListener('click', getApi);