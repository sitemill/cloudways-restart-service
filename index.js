const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;

var apiUrl = 'https://api.cloudways.com/api/v1';
const email = core.getInput('email');
const api_key = core.getInput('api_key');
const server_id = core.getInput('server_id');
const service = core.getInput('service');
var token = '';

axios.get(apiUrl + `/oauth/access_token?email=${email}&api_key=${api_key}`)
    .then(function(response) {
         token = response.data.access_token;
    })
    .catch(function(error) {
        // handle error
        core.setFailed(error);
    })
    .then(function() {

    });

// axios.post(apiUrl + `/service/state`, {
//         server_id: `${server_id}`,
//         service: `${service}`,
//         state: 'restart',
//         headers: {
//             Authorization: 'Bearer LWPTmmJMNRWVWnzkiWfjDFZET20U9t'
//         }
//     })
//     .then(function(response) {
//         console.log(response.data);
//     })
//     .catch(function(error) {
//         core.setFailed(error);
//     })
//     .then(function() {
//     });

