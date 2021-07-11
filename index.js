const core = require('@actions/core');
const github = require('@actions/github');

var apiUrl = 'https://api.cloudways.com/api/v1';

try {
    var authenticate = new XMLHttpRequest();

    authenticate.open( 'GET', apiUrl + '/oauth/access_token?email=${INPUT_EMAIL}&api_key=${INPUT_API_KEY}', false );
    authenticate.send( null );
    console.log(authenticate);
} catch (error) {
    core.setFailed(error.message);
}