const core = require('@actions/core');
const github = require('@actions/github');
const fetch = require('fetch').fetchUrl;

var apiUrl = 'https://api.cloudways.com/api/v1';
const email = core.getInput('email');
const api_key = core.getInput('api_key');

try {
    let response = await fetch(apiUrl + `/oauth/access_token?email=${email}&api_key=${api_key}`);
    let data = await response.text();
    console.log(data);
    console.log('status: ' + response.status);
    console.log('statusText: ' + response.statusText);
} catch (error) {
    core.setFailed(error.message);
}