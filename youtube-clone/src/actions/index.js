import { API_KEY as key } from "../secrets/secrets";
const axios = require("axios");

// Start coding of fetching video and pass it to the store
// Basically 4 steps [My personal Note...]
// 1.first create a constant of the action name, here RECEIVE_VIDEOS
// 2.create a plain object returning function that will pass, store.dispatch(here), like receiveVideos() here... through asyn function{here getVideos()}
// remember that - actions have to be a plain objects and reducers have to be a pure function
// dispatch() want a object but we are passing an function(in root/index.js) for this we use redux-thunk middleware
// 3.create a fetching function like getYoutubeVideos()
// 4. Main and final step follow the pattern/structure of the getVideos() function below 
// Basically dispatch() function connect actions and reducers
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const getYoutubeVideos = searchItem => {
  const ROOT_URL = "https://www.googleapis.com/youtube/v3/search";

  const options = {
    key,
    term: searchItem
  };

  var params = {
    part: "snippet",
    key: options.key,
    q: options.term,
    type: "video"
  };

  return axios
    .get(ROOT_URL, { params: params })
    .then(response => {
      //console.log("inside: ", response.data.items);
      return response.data.items;
    })
    .catch(error => {
      console.error(error);
    });
};

export const getVideos = searchItem => {
  return dispatch => {
    return getYoutubeVideos(searchItem).then(response =>
      dispatch(receiveVideos(response))
    );
  };
};
// End fetching video and pass it to the store
