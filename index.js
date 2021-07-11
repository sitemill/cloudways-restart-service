const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('fetch').fetchUrl;

var apiUrl = 'https://api.cloudways.com/api/v1';
const email = core.getInput('email');
const api_key = core.getInput('api_key');

try {
    fetch(apiUrl + `/oauth/access_token?email=${email}&api_key=${api_key}`, function(error, meta, body){
        console.log(body.json());
    });
} catch (error) {
    core.setFailed(error.message);
}