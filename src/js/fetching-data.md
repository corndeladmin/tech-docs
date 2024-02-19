# Fetching data

<Vimeo id="914394853" />

## Using `fetch`

The fetch function allows us to send a request over the internet to any URL. For
example

::: code-group

```js
// the bored api returns a random activity to do
const response = await fetch('https://www.boredapi.com/api/activity')
const data = await response.json()
console.log(data)
```

```console [output]
{
  activity: "Solve a Rubik's cube",
  type: 'recreational',
  participants: 1,
  price: 0,
  link: '',
  key: '4151544',
  accessibility: 0.1
}
```

:::

By default, `fetch` sends a `GET` request to the given URL. The `response`
object has a large amount of information in it. We just made use of the
`.json()` method to get the returned data out.

::: details

```js
Response {
  [Symbol(realm)]: null,
  [Symbol(state)]: {
    aborted: false,
    rangeRequested: false,
    timingAllowPassed: true,
    requestIncludesCredentials: true,
    type: 'default',
    status: 200,
    timingInfo: {
      startTime: 39.344858000054955,
      redirectStartTime: 0,
      redirectEndTime: 0,
      postRedirectStartTime: 39.344858000054955,
      finalServiceWorkerStartTime: 0,
      finalNetworkResponseStartTime: 0,
      finalNetworkRequestStartTime: 0,
      endTime: 472.1982020009309,
      encodedBodySize: 0,
      decodedBodySize: 0,
      finalConnectionTimingInfo: null
    },
    cacheState: '',
    statusText: 'OK',
    headersList: HeadersList {
      cookies: null,
      [Symbol(headers map)]: [Map],
      [Symbol(headers map sorted)]: null
    },
    urlList: [ URL {} ],
    body: { stream: undefined }
  },
  [Symbol(headers)]: HeadersList {
    cookies: null,
    [Symbol(headers map)]: Map(13) {
      'server' => [Object],
      'report-to' => [Object],
      'reporting-endpoints' => [Object],
      'nel' => [Object],
      'connection' => [Object],
      'x-powered-by' => [Object],
      'access-control-allow-origin' => [Object],
      'access-control-allow-headers' => [Object],
      'content-type' => [Object],
      'content-length' => [Object],
      'etag' => [Object],
      'date' => [Object],
      'via' => [Object]
    },
    [Symbol(headers map sorted)]: null
  }
}
```

:::

## Constructing a request

Whilst `fetch` chooses sensible defaults, sometimes we need to take more control
over what goes into the request it sends to the API. We can change

- **headers** which contain metadata about the request, such as our identity or
  our preferred data format (html, json, text, etc)

- **body** which contains a data payload, for example if we need to upload some
  data to a database

Let's see an example of constructing a more complex request to the Nutritionix
API.

::: code-group

```js
import 'dotenv/config'

// construct the url
const domain = 'https://trackapi.nutritionix.com'
const endpoint = '/v2/natural/exercise'
const url = new URL(endpoint, domain)

// make the headers
const headers = new Headers({
  'Content-Type': 'application/json',
  'x-app-id': process.env.NUTRITIONIX_ID,
  'x-app-key': process.env.NUTRITIONIX_KEY
})

// make the body a JSON string
const body = JSON.stringify({
  query: `Swimming for 30 minutes`
})

// get information ready to pass to fetch
const options = {
  method: 'POST',
  headers,
  body
}

try {
  // make the request
  const res = await fetch(url, options)
  const data = await res.json()
  console.log(data)
} catch (err) {
  console.error(err)
}
```

```console [output]
{
  exercises: [
    {
      tag_id: 63,
      user_input: 'swimming',
      duration_min: 30,
      met: 6,
      nf_calories: 210,
      photo: [Object],
      compendium_code: 18310,
      name: 'swimming',
      description: null,
      benefits: null
    }
  ]
}
```

:::

This is a more realistic example of creating a `fetch` request. We have changed
this to a `POST` request so that we can include a `body` to send to the API, as
we cannot send a `body` as part of a `GET` request.

::: tip

Just because this function is called `fetch` doesn't mean it is always about
_receiving_ data. The `fetch` function can be used to both send and receive data
to API services.

:::
