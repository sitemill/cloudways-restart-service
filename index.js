const core = require('@actions/core');
const github = require('@actions/github');
const axios = require('axios').default;

var apiUrl = 'https://api.cloudways.com/api/v1';
const email = core.getInput('email');
const api_key = core.getInput('api_key');
const server_id = '235456';
const service = core.getInput('service');


axios.get(apiUrl + `/oauth/access_token?email=${email}&api_key=${api_key}`)
    .then(function(response) {

        axios.post(apiUrl + `/service/state?server_id=${server_id}&service=${service}&state=restart`, {},{
                headers: {
                    Authorization: 'Bearer ' + response.data.access_token
                }
            })
            .then(function(response) {
                console.log(response.data.service_status.status);
            })
            .catch(function(error) {
                core.setFailed(error);
            })
            .then(function() {
            });
    })
    .catch(function(error) {
        // handle error
        core.setFailed(error);
    })
    .then(function() {

    });



