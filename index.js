const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;

var apiUrl = 'https://api.cloudways.com/api/v1';
const email = core.getInput('email');
const api_key = core.getInput('api_key');


axios.get(apiUrl + `/oauth/access_token?email=${email}&api_keys=${api_key}`)
    .then(function(response) {
        // handle success
        console.log(response.data.access_token);
    })
    .catch(function(error) {
        // handle error
        core.setFailed(error);
    })
    .then(function() {
        // always executed
    });
