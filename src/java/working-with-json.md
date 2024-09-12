# Working with JSON

<Vimeo id="1008026486" />

## What is JSON

JSON is a common format to store and transmit data. The properties of an object
are represented as a string.

For example, the object `new Exercise("Running", 30, "m")` would be represented
in JSON as

```json
{
  "activity": "Running",
  "time": {
    "value": 30,
    "unit": "m"
  }
}
```

## Using Jackson

A popular library to work with JSON in Java is called Jackson. We install it by
adding thee dependency in `pom.xml`.

```xml
<dependency>
  <groupId>com.fasterxml.jackson.core</groupId>
  <artifactId>jackson-databind</artifactId>
  <version>2.15.0</version>
</dependency>
```

Jackson gives us access to a powerful `ObjectMapper` class. To use it, we need
to import it:

```java
import com.fasterxml.jackson.databind.ObjectMapper;
```

## Converting to JSON

If we have an object, we can turn it into JSON using the Jackson library.

::: warning

Any method beginning with `get` will be serialised into the JSON object. You can
decorate unwanted getters with `@JsonIgnore`.

:::

::: code-group

```java
Exercise exercise = new Exercise("Running", 30, "m");

// Convert to JSON
ObjectMapper objectMapper = new ObjectMapper();
String json = objectMapper.writeValueAsString(exercise)
System.out.println(json)
```

```console [output]
{
  "activity": "Running",
  "time": {
    "value": 30,
    "unit": "m"
  }
}
```

:::

## Parsing JSON

If we have a string of JSON and we want to convert it into an object, we pass
the JSON and the target object to Jackson's `.readValue()` method.

::: warning

Jackson will call the class constructor with no arguments, so you must provide a
default constructor in your class: `public MyClass() {}`.

:::

```java
String json = "{ \"activity\": \"Running\", \"time\": { \"value\": 30, \"unit\": \"m\" } }";

// Parse JSON string into Exercise object
ObjectMapper objectMapper = new ObjectMapper();
Exercise exercise = objectMapper.readValue(json, Exercise.class);
```

## JSON Lists

JSON supports list like structures.

```json
[
  {
    "activity": "Running",
    "time": {
      "value": 30,
      "unit": "m"
    }
  },
  {
    "activity": "Swimming",
    "time": {
      "value": 1,
      "unit": "h"
    }
  }
]
```

To parse this into a list of exercises, we need to
`import com.fasterxml.jackson.core.type.TypeReference;`. This is used to help
Jackson figure out the type of `List<Exercise>` and parse the JSON string
correctly.

Suppose we have the contents of the above JSON in a string called
`exercisesJSON`.

```java
ObjectMapper objectMapper = new ObjectMapper();
List<Exercise> exercises = objectMapper.readValue(exercisesJSON, new TypeReference<List<Exercise>>() {});
```

::: info

`new TypeReference<List<Exercise>>() {}` creates an anonymous subclass of
`TypeReference`, which helps Jackson keep track of the type inside the `List`.

:::
