let searchYouTube = (options, cb) => {
	fetch(
			`https://www.googleapis.com/youtube/v3/search?key=
			${options.key}&part=snippet,id&q=${options.searchTxt}&maxResults=${options.max}` 
	)
 	.then(response => response.json())
    .then((data) => cb(data))
	.catch(
		err => console.log("에러가 발생하였습니다.")
	);
};

export {
   searchYouTube
}

