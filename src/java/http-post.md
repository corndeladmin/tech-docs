# HTTP POST requests

<Vimeo id="1008127386" />

## Creating a body

Post requests often include a body. For example, we want to send JSON which
looks like this:

```json
{
  "query": "Swimming 30 m"
}
```

We can make a class with the correct shape

```java
class Query {
  public String query;

  public Query(String str) {
    this.query = str;
  }
}
```

Unirest can then use Jackson in the background to convert `Query` objects into
JSON.

## Sending the request

To send the post request, we can use Unirest.

```java
String url = "https://trackapi.nutritionix.com/v2/natural/exercise";
Query query = new Query("Swimming 30 m");

var response = Unirest.post(url)
    .header("Content-Type", "application/json")
    .header("x-app-id", dotenv.get("NUTRITIONIX_ID"))
    .header("x-app-key", dotenv.get("NUTRITIONIX_KEY"))
    .body(query)
    .asString();

return response.getBody();
```

## Parsing complex JSON

We get a complex JSON, but all we want is the value of `"nf_calories"`.

::: details

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

:::

We can use Jackson's `.readTree()` method to turn a string of JSON into an
object dynamically.

```java{6}
String json = response.getBody();
ObjectMapper mapper = new ObjectMapper();
var tree = mapper.readTree(json);
```

This allows us to walk through the JSON and pick out the bits we need.

```java
int calories = tree
    .get("exercises")
    .get(0)
    .get("nf_calories")
    .asInt();

return calories;
```
