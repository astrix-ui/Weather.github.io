const apiUrl =  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apiKey = "78df0494d23b9f4137f65d234b5780b5";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search-btn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	if(response.status==404){
		document.querySelector(".error").style.display = "block";
		document.querySelector(".weather").style.display = "none";
	}
	else{

	var data = await response.json();
	console.log(data);

	// CHANGING VALUES OF INNER HTML 
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
	// CHANGING ICON IMAGE 
	if (data.weather[0].main == "Clouds"){
		weatherIcon.src = "/weather-app-img/images/clouds.png"
	}
	else if (data.weather[0].main == "Drizzle"){
		weatherIcon.src = "/weather-app-img/images/Drizzle.png"
	}
	else if (data.weather[0].main == "Mist"){
		weatherIcon.src = "/weather-app-img/images/Mist.png"
	}
	else if (data.weather[0].main == "Rain"){
		weatherIcon.src = "/weather-app-img/images/Rain.png"
	}
	else if (data.weather[0].main == "Snow"){
		weatherIcon.src = "/weather-app-img/images/Snow.png"
	}
	document.querySelector(".weather").style.display = "block";
	document.querySelector(".error").style.display = "none";

}}


searchBtn.addEventListener("click", ()=> {
	checkWeather(searchBox.value);
})
