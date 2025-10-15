# Redis

## Install Redis

There are a few ways of
[installing Redis itself](https://redis.io/docs/latest/operate/oss_and_stack/install/).

::: tip

Note that Redis is a lightweight version, whereas Redis Stack contains more
features.

:::

If you are using Docker, you should be able to access Redis without explicitly
running it. If you have installed natively, you may need to run it:

::: code-group

```bash
redis-server
```

```bash
# if using redis stack
redis-stack-server
```

:::

## Install Redis Client

There is a client library for Java called Jedis which makes developing against a
Redis database much easier.

To install it, add the following dependency to your `pom.xml`:

```xml
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>5.2.0</version>
</dependency>
```

## Basic operations

```java
package org.example;
import redis.clients.jedis.UnifiedJedis;

public class Main {
    public static void main(String[] args) {
        // Connect to Redis
        UnifiedJedis jedis = new UnifiedJedis("redis://localhost:6379");

        // Set a key/value pair
        String res1 = jedis.set("bike:1", "Deimos");
        System.out.println(res1); // OK

        // Get a value for a specific key
        String res2 = jedis.get("bike:1");
        System.out.println(res2); // Deimos

        // Close the connection
        jedis.close();
    }
}
```

## Working with JSON

Redis can store JSON data without stringifying it. Effectively, this makes Redis
a document store.

First, we create a JSON `object`:

```java
import org.json.JSONObject;

JSONObject userJSON = new JSONObject()
  .put("name", "Jane Doe")
  .put("email", "janedoe@example.com")
  .put("age", 25)
```

Then, we add the user's json to the database:

```java
import redis.clients.jedis.json.Path2;

String res1 = jedis.jsonSet("user:1", new Path2("$"), userJSON); // OK

String res2 = jedis.jsonGet("user:1")
// {"name": "Jane Doe", "email": "janedoe@example.com", "age": 25}
```

Note that using `$` as the path means that this JSON is set at the root of the
key `user:1`. However, the keys can be manipulated individually.

```java
String res1 = jedis.jsonSet("user:1", new Path2("$.age"), 26); // OK

String res2 = jedis.jsonGet("user:1")
// {"name": "Jane Doe", "email": "janedoe@example.com", "age": 26}
```

## Search index

We can create a search index which allows us to implement full-text search:

```java
import redis.clients.jedis.search.*;
import redis.clients.jedis.search.aggr.*;
import redis.clients.jedis.search.schemafields.*;

SchemaField[] schema = {
  TextField.of("$.name").as("name"),
  NumericField.of("$.age").as("age")
};

String createResult = jedis.ftCreate("idx:users",
  FTCreateParams.createParams()
    .on(IndexDataType.JSON)
    .addPrefix("user:"),
    schema
);

System.out.println(createResult); // >>> OK
```

Note that `addPrefix("user:")` restricts the index to include only documents
whose key begins with `user:`, which makes it more efficient.

Now, we can use the search index. For example, here is how to get all users aged
from 20 to 30:

```java
import java.util.List;

SearchResult searchResult = jedis.ftSearch("idx:users", "@age:[20 30]");

for (Document doc: searchResult.getdocuments()) {
    System.out.println(doc.getId());
}

// users:1
```

To construct more complex queries, check out the
[redis query engine](https://redis.io/docs/latest/develop/interact/search-and-query/).
