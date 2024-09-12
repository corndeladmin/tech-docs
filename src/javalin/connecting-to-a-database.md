# Connecting to the database

<Vimeo id="1008462580" />

## Making a connection class

JDBC provides connections to the database. It is convenient to make a class for
this which will return new connections as needed.

First, we configure the database URL as an environment variable.

```.env
DB_URL=jdbc:sqlite:bleeter.sqlite
```

Then we create a `DB` utility class.

```java
package com.bleeter;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

import io.github.cdimascio.dotenv.Dotenv;

public class DB {
  private static final Dotenv dotenv = Dotenv.load();

  public static Connection getConnection() throws SQLException {
    var dbUrl = dotenv.get("DB_URL");
    return DriverManager.getConnection(dbUrl);
  }
}
```

## Use the database connection

When we are ready to connect to the database, our code will look like this:

```java
var query = "SELECT * FROM users";

try (var connection = DB.getConnection();
var statement = connection.createStatement();
var resultSet = statement.executeQuery(query)) {
  // work with the resultSet here
}
```

::: tip

The `try (resource) { code }` syntax is known as a try-with-resources block. It
is a powerful technique which ensures that the resources are disposed of once
the code block finishes executing.

Leaving connections to the database open is bad, because too many open
connections will affect the database performance. The try-with-resources
technique automatically closes the connection once we're finished with it.

:::
