import config from '../config/youtube';

const BASIC_HEADERS = new Headers({
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Cache': 'no-cache'
});

function makeUrlQueryString(params) {
  var esc = encodeURIComponent;
  var query = Object.keys(params)
    .map(k => `${esc(k)}=${esc(params[k])}`)
    .join('&');

  return '?' + query;
}

let searchYouTube = (options, callback) => {
  const checkOptions = {
    query: options.query || '', 
    max: options.max || 5 
  };

  fetch('https://www.googleapis.com/youtube/v3/search' + makeUrlQueryString({
      part: 'id,snippet',
      key: config.YOUTUBE_API_KEY,
      q: checkOptions.query,
      maxResults: checkOptions.max,
      videoEmbeddable: true,
      videoSyndicated: true,
      type: 'video'
    }),
    {
      method: 'GET',
      headers: BASIC_HEADERS,
    }
  )
  .then(response => response.json().then((data) => {
    callback(data['items']);
  }))
};

let videoDetailYouTube = (options, callback) => {
  const checkOptions = {
    id: options.id || '', 
  };

  fetch('https://www.googleapis.com/youtube/v3/videos' + makeUrlQueryString({
      part: 'id,snippet,contentDetails,status',
      key: config.YOUTUBE_API_KEY,
      id: checkOptions.id,
    }),
    {
      method: 'GET',
      headers: BASIC_HEADERS,
    }
  )
  .then(response => response.json().then((data) => {
    callback(data['items']);
  }))
};

export {
  searchYouTube,
  videoDetailYouTube
}
