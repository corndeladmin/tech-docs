# HTTP GET requests

<Vimeo id="1008127525" />

## Making a GET request

We use Java's `java.net.http` package to help make HTTP requests.

```java
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;

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

## Mapping to an object

The `response.body()` is very often a JSON string.

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
just certain properties out of the JSON. In this case, we only extract the
`activity` and `price` properties.

:::

To convert the JSON into an instance of `Activity` we use Jackson's
`ObjectMapper`.

```java
try {
  // Make the HTTP request
  String json = BoredApi.getRandomActivity();

  // Convert to an object
  ObjectMapper objectMapper = new ObjectMapper();
  Activity activity = objectMapper.readValue(json, Activity.class);

  // Use the object
  System.out.println(activity.summary());
} catch (Exception e) {
  System.err.println(e.getMessage());
}
```
