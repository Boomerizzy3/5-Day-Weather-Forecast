let searchButton = document.getElementById('search-button');


function getApi() {
    let userSearch = document.getElementById("user-search").value
    var requestUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userSearch}&appid=08f021b8984031642c1fe43ac7027511`;

    fetch(requestUrl)
        .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
      })
};

searchButton.addEventListener('click', getApi);
