const $ = document

const weatherAppBox = $.querySelector('.weather__app-box') 
const searchBox = document.querySelector('.search__box-wraper')
const searchButton = searchBox.querySelector('button')
const searchInput = searchBox.querySelector('input')
const error404 = $.querySelector('.not__found')

let now = new Date()
let hour = now.getHours()

const apiData = {
    url:'https://api.openweathermap.org/data/2.5/weather?q=',
    apiKey:'79d42bcb9aed653d61b7e1578d86f3be'
}

const searchWeatherCondition = () => {
    let locationName = searchInput.value

    fetch(`${apiData.url}${locationName}&appid=${apiData.apiKey}`)
        .then(response => {
            response.json()
            .then(data => {
                showWeatherCondition(data)
            })
        })
        .catch(error => console.log(error))
}

const image = document.querySelector('.weather__situation img')

const boxContent = $.querySelector('.box__content')
const situationDetailsWraper = $.querySelector('.situation__details-wraper')
const weatherSituation = $.querySelector('.weather__situation')
const infoHumidity = $.querySelector('.detail__info .humidity__value')
const infoWindspeed = $.querySelector('.detail__info  .windspeed__value')

const showWeatherCondition = (data) => {
    
    if(data.cod == '404') {
        boxContent.style.height = `${error404.clientHeight}px`
        situationDetailsWraper.classList.remove('active')   
        weatherSituation.classList.remove('active')
        error404.classList.add('active')
        document.body.style.background = ' url(https://www.uplooder.net/img/image/87/1248a92223f523652726cd549dcd598f/IMG-20240115-174509-319.jpg)';
        document.body.style.backgroundRepeat = 'no-repeat';
        document.body.style.backgroundSize = 'cover';
        document.body.style.backgroundPosition = 'center';
    } else {    
        boxContent.style.height = `${boxContent.scrollHeight}px`
        weatherAppBox.classList.add('active')
        situationDetailsWraper.classList.add('active')
        weatherSituation.classList.add('active')   
        error404.classList.remove('active')
        
        setTimeout(() => {
            weatherAppBox.classList.remove('active')
        }, 2500);

        let weatherConditions = data.weather[0].main
        if(weatherConditions) {
            console.log(weatherConditions)
            if(hour >= 6 && hour < 18) {
                if(weatherConditions === 'Clear'){
                    image.src = 'images/clear_weather_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/74/c4bc140e39e019693b9c4db5c671d1e4/clear-day-background.png)';
                } else if(weatherConditions === 'Rain') {
                    image.src = 'images/weather_scattered_showers_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/46/d0ff17c84f897edcedee7fce78897beb/rainy-day-background.jpg)';
                } else if(weatherConditions === 'Snow'){
                    image.src = 'images/weather_snow_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/28/fd080eb948de6057d628d8889f481da8/snowy-day-background.jpg)';
                } else if (weatherConditions === 'Clouds') {
                    image.src = 'images/weather_clouds_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/56/8d90fdc6fb4a28ea4e5dd3c85a990dfa/cloudy-day-background.jpg)';
                } else if (weatherConditions === 'Mist') {
                    image.src = 'images/mist.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/81/92be43182832eeade5a5b093dccd910c/mist-day-background.jpg)';
                } else if (weatherConditions === 'Wind') {
                    image.src = 'images/weather_windy_icon.png'
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/5/7e72f88321b95800de87a51d71b7125e/windy-day-background.jpg)';
                } else if (weatherConditions === 'Haze') { 
                    image.src = 'images/mist.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/33/ce83b5ad8c10e4a648ba11502f32cef7/hazy-day-background.jpg)';
                } else if (weatherConditions === 'Sand') {
                    image.src = 'images/weather_day_sand_sandstorm_sun_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/96/f4ba5138056b27d5596e49e9357e6016/sandy-day-background.jpg)';
                } else {
                    image.src = 'images/clear_weather_icon.png'
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/74/c4bc140e39e019693b9c4db5c671d1e4/clear-day-background.png)';
                }
            } else {
                if(weatherConditions === 'Clear'){
                    image.src = 'images/clear_weather_night_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/75/3f5b8863ecc9cf1d0a92566b7e4b4b5b/clear-night-background.jpg)';
                } else if(weatherConditions === 'Rain') {
                    image.src = 'images/weather_scattered_showers_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/41/3610538bcab9e359f331b36cd3314435/rainy-night-background.jpg)';
                } else if(weatherConditions === 'Snow'){
                    image.src = 'images/weather_snow_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/60/8a4fa1b3a7fefea0c46d2a6317a7d7e8/snowy-night-background.jpg)';
                } else if (weatherConditions === 'Clouds') {
                    image.src = 'images/weather_clouds_night_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/1/b606cfe32dd0572bbac110554a3592ea/cloudy-night-background.jpg)';
                } else if (weatherConditions === 'Mist') {
                    image.src = 'images/mist.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/43/bd2e9f129a1ae159ff4bcba5346467b2/mist-night-background.jpg)';
                } else if (weatherConditions === 'Wind') {
                    image.src = 'images/weather_windy_icon.png'
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/25/3ccd882d40e42537b0d4cbc9b473e50d/windy-night-background.jpg)';
                } else if (weatherConditions === 'Haze') {
                    image.src = 'images/mist.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/96/0084c6e9ab7dfbc79659b721e9d2c418/hazy-night-background.jpg)';
                } else if (weatherConditions === 'Sand') {
                    image.src = 'images/weather_sandStorm_night_icon.png';
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/75/fe12b5b196590074c80f8c8d4f7e7726/sandy-night-background.jpg)';
                } else {
                    image.src = 'images/clear_weather_night_icon.png'
                    document.body.style.background = 'url(https://www.uplooder.net/img/image/75/3f5b8863ecc9cf1d0a92566b7e4b4b5b/clear-night-background.jpg)';
                }
            }
        }

        $.querySelector('.location__name').innerText = `${data.name}` 
        $.querySelector('.country__name').innerText = `${data.sys.country}` 
        $.querySelector('.weather__temp').innerHTML = `${parseInt(data.main.temp - 273.15)} <sup>°C</sup>`
        $.querySelector('.situation__name').innerText = `${data.weather[0].main}`
        $.querySelector('.humidity__value').innerHTML = `${data.main.humidity} <span>%</span>`
        $.querySelector('.windspeed__value').innerHTML = `${data.wind.speed} <span>Km / h</span>`
    }

    clearInputs()
} 

function clearInputs () {
    searchInput.value = ''
}

searchButton.addEventListener('click' , searchWeatherCondition)
document.addEventListener('keypress' , (e) => {
    if(e.key === 'Enter'){
        searchWeatherCondition()
    }
})

// https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}