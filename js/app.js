const api_key = '7a679961ff329b08730c73d3f5e12f95';

const searchTempature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));
}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = (temapture) => {
    setInnerText('city', temapture.name);
    setInnerText('temp', temapture.main.temp);
    setInnerText('condition', temapture.weather[0].main);

    //set weather icon
    const url = ` http://openweathermap.org/img/wn/${temapture.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}