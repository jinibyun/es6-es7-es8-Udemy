const apiKey = `e9ddb24aed6d48c4342303aba5269e28`;
const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;
const imgUrl = `http://image.tmdb.org/t/p/w300/`;

// ! The Promise Way
function getMovieData(movieTitle){
	return new Promise((resolve, reject)=>{
		$.ajax({
			url: apiUrl+movieTitle,
			method: 'get',
			success: (movieData)=>{
				// console.log(movieData)
				resolve(movieData.results);
			},
			error: (errorMsg)=>{
				reject(errorMsg)
			}
		})
	})
}

document.getElementById('movie-form').addEventListener('submit',(event)=>{
	event.preventDefault();

	// new ES6: Array.from
	const movieTitleArray = Array.from(document.getElementsByClassName('movie-title'));
	// console.log(movieTitle);
	const moviePromises = movieTitleArray.map((inputElement)=>{
		return getMovieData(inputElement.value)
	})
	// console.log(moviePromises);
	// point: Promise.all: all of data are returned.
	Promise.all(moviePromises).then((promiseData)=>{
		document.getElementById('movies').innerHTML = `
			<img src=${imgUrl}${promiseData[0][0].poster_path} />
			<img src=${imgUrl}${promiseData[1][0].poster_path} />
			<img src=${imgUrl}${promiseData[2][0].poster_path} />
			`
	})
});