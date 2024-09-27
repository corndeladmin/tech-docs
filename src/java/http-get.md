# HTTP GET requests

<Vimeo id="1008127525" />

::: info

Java does have a built-in `java.net.http`, but it's quite verbose. It's easier
to get started with a library such as
[Unirest](https://kong.github.io/unirest-java/).

```xml
<dependency>
  <groupId>com.konghq</groupId>
  <artifactId>unirest-java</artifactId>
  <version>3.13.10</version>
</dependency>
```

:::

## Making a GET request

Making a GET request with Unirest looks like this:

```java
public class BoredApi {

  public static String getActivity(String endpoint) throws Exception {
    String url = "https://bored-api.appbrewery.com/random";

    var response = Unirest
        .get(url)
        .header("Accept", "application/json")
        .asString();

    String json = response.getBody();
  }

}
```

For comparison, the equivalent request in `java.net.http` looks like this.

::: details

```java
public class BoredApi {

  public static String getRandomActivity() throws Exception {
    // Create a HTTP client
    HttpClient client = HttpClient.newHttpClient();

    // Create a URI
    URI uri = new URI("https://bored-api.appbrewery.com/random");

    // Create a new request
    HttpRequest request = HttpRequest.newBuilder()
        .uri(uri)
        .GET()
        .build();

    // Use the client to send the request
    HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());

    return response.body();
  }

}
```

:::

## Mapping to an object

The `response.body()` is a JSON string.

If we make a class which maps some of the keys in the JSON string, we can
convert the JSON into an object.

```java
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class Activity {
  private String activity;
  private double price;

  public Activity() {
  }

  public String summary() {
    return String.format("Try: %s, it costs £%.2f", this.activity, this.price * 100);
  }
}
```

::: tip

The decorator `@JsonIgnoreProperties(ignoreUnknown = true)` allows us to pick
just certain properties out of the JSON.

In this case, we only extract the `activity` and `price` properties.

:::

To convert the JSON into an instance of `Activity` we use Jackson's
`ObjectMapper`.

```java
String json = response.getBody();

// Parse into an Activity
ObjectMapper mapper = new ObjectMapper();
Activity activity = mapper.readValue(json, Activity.class);

System.out.println(activity.summary());
// Try: Learn calligraphy, it costs £10.00
```
