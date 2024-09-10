# HTTP POST requests

<Vimeo id="1008127386" />

## Making a body

Often, when we want to make a POST request, we need to send a body as part of
the request.

One way to do this "on the fly" is by using Jackson's `ObjectNode` helper.

```java
ObjectMapper objectMapper = new ObjectMapper();
ObjectNode jsonObject = objectMapper.createObjectNode();
jsonObject.put("query", "Swimming for 30m");
```

This creates a JSON object which we can pass to
`HttpRequest.BodyPublishers.ofString(jsonObject)` to construct the POST
request's body.

## Constructing the request

We construct the request by setting headers and inserting the body.

```java
HttpRequest request = HttpRequest.newBuilder()
    .uri(uri)
    .header("Content-Type", "application/json")
    .header("x-app-id", dotenv.get("NUTRITIONIX_ID"))
    .header("x-app-key", dotenv.get("NUTRITIONIX_KEY"))
    .POST(HttpRequest.BodyPublishers.ofString(jsonString))
    .build();
```

## Sending the request

We send the request using a `HttpClient`. Here is the full code.

::: info

In the video, we converted the `{ "query": "Swimming for 30m" }` json into a
string before passing it to `BodyPublishers.ofString()`. That isn't actually
necessary, we can pass the `json` object directly, which saves us a line of code
:smile:

:::

```java
public static String fetchCalories() throws Exception {
  Dotenv dotenv = Dotenv.load();

  // Create a json for the body
  ObjectMapper objectMapper = new ObjectMapper();
  ObjectNode json = objectMapper.createObjectNode();
  json.put("query", "Swimming for 30m");

  URI uri = new URI("https://trackapi.nutritionix.com/v2/natural/exercise");

  HttpRequest request = HttpRequest.newBuilder()
      .uri(uri)
      .header("Content-Type", "application/json")
      .header("x-app-id", dotenv.get("NUTRITIONIX_ID"))
      .header("x-app-key", dotenv.get("NUTRITIONIX_KEY"))
      .POST(HttpRequest.BodyPublishers.ofString(json))
      .build();

  HttpClient client = HttpClient.newHttpClient();
  HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

  return response.body();
}
```

## Parsing complex JSON

If you get some complex JSON like this

```json
{
  "exercises": [
    {
      "tag_id": 63,
      "user_input": "swimming",
      "duration_min": 30,
      "met": 6,
      "nf_calories": 210,
      "photo": {
        "highres": "https://d2xdmhkmkbyw75.cloudfront.net/exercise//63_highres.jpg",
        "thumb": "https://d2xdmhkmkbyw75.cloudfront.net/exercise//63_thumb.jpg",
        "is_user_uploaded": false
      },
      "compendium_code": 18310,
      "name": "swimming",
      "description": null,
      "benefits": null
    }
  ]
}
```

and you just want the value of `nf_calories`, you can use Jackson's `.readTree`
method like this:

```java
ObjectMapper objectMapper = new ObjectMapper();

objectMapper.readTree(jsonResponse)
  .path("exercises")
  .get(0)
  .path("nf_calories")
  .asInt();
```
