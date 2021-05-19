// ! find and findIndex
const cityWeatherData = require ('./weatherData'); // NOTE: weatherData should have "module.exports = cities;". Then we can import using "require"

// 1. Classical map
// const cityNames = cityWeatherData.list.map((city)=>{
// 	return city.name;
// })
// console.log(cityNames);



// 2. Array.prototype.find() : return "first" element which makes condition as true
// const firstFoundCity = cityWeatherData.list.find((city)=>{
// 	if(city.main.temp > 80){
// 		return true;
// 	}else{
// 		return false;
// 	}
// })
// console.log(firstFoundCity);


// 3. Array.prototype.findIndex(): return "element's index" which makes condition as true
const firstFoundCityIndex = cityWeatherData.list.findIndex((city)=>{
	if(city.main.temp > 80){
		return true;
	}else{
		return false;
	}
})

console.log(firstFoundCityIndex)