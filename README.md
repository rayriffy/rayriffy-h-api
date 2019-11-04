Riffy H API
===========

An APIs for [Riffy H](https://github.com/rayriffy/rayriffy-h)

Requirements
------------

- Node LTS

API
---

The API is based on HTTPS requests and JSON responses. The stable HTTPS endpoint for the latest version is: `https://h.api.rayriffy.com`

### HTTP status Codes

The following HTTP status codes are returned by the API

| Status Code | Description                                                                               |
| ----------- | ----------------------------------------------------------------------------------------- |
| 200         | Request successful                                                                        |
| 202         | Request has been accepted for further processing, which will be completed sometime later. |
| 400         | Problem with the request                                                                  |
| 401         | Valid JWT token is not specified                                                          |
| 404         | Request / Route is not found                                                              |
| 405         | Request method is invalid                                                                 |
| 500         | Error on the internal server                                                              |

### Response structure

The following JSON data is returned in the response body

| Property         | Type   | Description                                                                   |
| ---------------- | ------ | ----------------------------------------------------------------------------- |
| status           | String | Give the result of the request that it's success or not                       |
| code             | Number | Request status code. Note that this code does not related to HTTP status code |
| response.message | String | Result summary                                                                |
| response.data    | Any    | (Optional) Provide useful data for processing                                 |

### Get encoded image

Render a SFW version of an image that can be decodable

**HTTP request**

`GET /encode/:id`

**Path parameters**

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| id        | ID of an hentai                           |

**Response**

Returns a 200 HTTP status code and a JSON object with the following data.

| Property      | Type   | Description                             |
| ------------- | ------ | --------------------------------------- |
| response.data | String | Base64 encoded string of **jpeg** image |

<details>
<summary>JSON</summary>

```json
{
  "status": "success",
  "code": 201,
  "response": {
    "message": "image encoded",
    "data": "data:image/jpeg;base64,<base64 data>"
}
```
</details>
