const cityForm = document.querySelector('form');
const card = document.querySelector('.card');
const details = document.querySelector('.details');
const time = document.querySelector('img.time');
const icon = document.querySelector('.icon img')

const updateUI = (data) => {

    const cityDets = data.cityDets;
    const weather = data.weather;


    // update details template
    details.innerHTML = 
    `<h5 class="my-3">${cityDets.EnglishName}</h5>
    <div class="my-3">${weather.WeatherText}</div>
    <div class="display-5 my-4">
        <span>${weather.Temperature.Metric.Value}</span>
        <span>&deg;C</span>
    </div>`
    //updating the night/day & icon images
    const iconSrc = `images/icons/${weather.WeatherIcon}.svg`;
    icon.setAttribute('src', iconSrc);


    let timeSrc = null;
    if(weather.IsDayTime) {
        timeSrc = 'images/day.svg';
    } else {
        timeSrc = 'images/night.svg';
    }

    time.setAttribute('src', timeSrc);

    // remove the dnone class if present

    if(card.classList.contains('dnone')) {
        card.classList.remove('dnone');
    }

}

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets : cityDets,
        weather: weather
    };
    
};

cityForm.addEventListener('submit', e => {
    e.preventDefault();

    const city = cityForm.city.value.trim();
    cityForm.reset();

    updateCity(city)
    .then(data => updateUI(data))
    .catch(err => console.log(err));

    // set local storage
    localStorage.setItem('loc', city);
    
});

if (localStorage.getItem('loc')){
    updateCity(localStorage.getItem('loc'))
    .then(data => updateUI(data))
    .catch(err => console.log(err));
}