const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('fetch').fetchUrl;

var apiUrl = 'https://api.cloudways.com/api/v1';

try {
    fetch(apiUrl + `/oauth/access_token?email=${INPUT_EMAIL}&api_key=${INPUT_API_KEY}`, function(error, meta, body){
        console.log(body.toString());
    });
} catch (error) {
    core.setFailed(error.message);
}