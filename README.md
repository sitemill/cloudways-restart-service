# Cloudways - restart service action
A GitHub Action to restart a Cloudways service. Useful for restarting php-fpm in an atomic deployment pipeline.

## Example

You can obtain the Server ID by looking at the URL for respective server, e.g: `https://platform.cloudways.com/server/<server_id>/access_detail`

```
steps:
  - name: Update webroot
    uses: sitemill/cloudways-webroot-action@v1.0.0
    with:
      email: your@email.com
      api_key: <apiKey>
      server_id: <serverId>
      service: php7-fpm
```

# TODO
