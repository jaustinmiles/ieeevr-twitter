import axios from 'axios';
// const axios = require('axios');
const serverBaseURL = 'http://ec2-34-227-77-175.compute-1.amazonaws.com:3000/';

export default class TweetGetter {
    getFourTweets(query) {
        let url = encodeURI(`${serverBaseURL}/?query=${query}`);
        url = url.replace("#", "%23");
        return axios.get(url);
    }
}


// TEST SCRIPT
// var tweetGetter = new TweetGetter();
// var tweets = tweetGetter.getFourTweets("#disney")
//     .then(res => {
//         console.log(res.data)
//     })
//     .catch(err => {
//         console.log(err)
//     });
// console.log(tweets);

