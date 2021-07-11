#!/bin/bash

api_url="https://api.cloudways.com/api/v1"
echo $api_url

token=$(curl "${api_url}/oauth/access_token?email=${INPUT_EMAIL}&api_key=${INPUT_API_KEY}" | jq -r ".access_token")
if [[ $token = "null" ]]; then
  echo "Could not obtain access token, check account email and api key."
  exit 1
fi

result=$(curl -XPOST -H "Authorization: Bearer ${token}" "${api_url}/service/state/webroot?server_id=${INPUT_SERVER_ID}&service=${INPUT_WEBROOT}&state=restart" | jq -r ".status." )
if [[ ! $result = "true" ]]; then
  echo "Could not restart service, check Site ID is correct."
  exit 1
fi

echo "Successfully restarted [${INPUT_SERVICE}]"

#echo "::set-output name=webroot::${INPUT_WEBROOT}"