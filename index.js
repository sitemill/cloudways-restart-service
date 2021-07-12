const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;

var apiUrl = 'https://api.cloudways.com/api/v1';
const email = core.getInput('email');
const api_key = core.getInput('api_key');

try {
    axios.get(apiUrl + `/oauth/access_token?email=${email}&api_key=${api_key}`)
        .then(function (response) {
            // handle success
            console.log(response);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
} catch (error) {
    core.setFailed(error.message);
}