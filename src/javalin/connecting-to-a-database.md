# Connecting to the database

## Setting up the database driver

We use Java's built-in [JDBC](https://en.wikipedia.org/wiki/Java_Database_Connectivity) library to provide a connection to the database, allowing us to run SQL queries from Java.

First, we _add_ the `sqlite-jdbc` dependency to our `pom.xml`.

```xml{3-7}
<project ... >
  <dependencies>
      <dependency>
          <groupId>org.xerial</groupId>
          <artifactId>sqlite-jdbc</artifactId>
          <version>3.46.0.0</version>
      </dependency>
      <!-- other dependencies -->
  </dependencies>
</project>
```

This lets JDBC connect to our sqlite database.

## Use the database connection

We can then make queries to the database like so:

```java
package com.corndel.bleeter.repositories;

import com.corndel.bleeter.models.User;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserRepository {
  public static List<User> findAll() throws SQLException { 
    var dbUrl = "jdbc:sqlite:bleeter.db"; // [!code focus:6]
    var query = "SELECT id, username, verified FROM users";

    try (var connection = DriverManager.getConnection(dbUrl); // [!code highlight:3]
        var statement = connection.createStatement();
        var resultSet = statement.executeQuery(query);) {

      var users = new ArrayList<User>();
      while (resultSet.next()) {
        var id = resultSet.getInt("id");
        var username = resultSet.getString("username");
        var verified = resultSet.getBoolean("verified");
        users.add(new User(id, username, verified));
      }
      return users;
    }
  }
}
```

::: info

Notice the assignments in the highlighted `try` statement.

This is a [_try-with-resources_ statement](https://docs.oracle.com/javase/tutorial/essential/exceptions/tryResourceClose.html). It will automatically `.close()` the `resultSet`, `statement`, and `connection` once the code leaves the try block. 

This is important because the database connection and related objects can tie up system resources, and `.close()`-ing frees these up so other parts of your system can use them again!

:::


## Create a Database connection class

Imagine if we have _hundreds_ of queries! It could become a hassle if we need to change the way we make connections to the database. We can create a class to manage these connections instead.

```java
package com.corndel.bleeter;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB { // [!code focus:7]
  static final String dbUrl = "jdbc:sqlite:bleeter.db";

  public static Connection getConnection() throws SQLException {
    return DriverManager.getConnection(dbUrl);
  }
}
```

Now we can make a connection through this class instead of having to enter the connection string every time we want to make a query.

For example, we've made a tiny change to the code above:

```java
package com.corndel.bleeter.repositories;

import com.corndel.bleeter.models.User;
import com.corndel.bleeter.DB; // [!code ++]
import java.sql.DriverManager; // [!code --]
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserRepository {
  public static List<User> findAll() throws SQLException { 
    var dbUrl = "jdbc:sqlite:bleeter.db"; // [!code --] // [!code focus:7]
    var query = "SELECT id, username, verified FROM users";

    try (var connection = DriverManager.getConnection(dbUrl); // [!code --]
    try (var connection = DB.getConnection(); // [!code ++]
        var statement = connection.createStatement();
        var resultSet = statement.executeQuery(query);) {

      var users = new ArrayList<User>();
      while (resultSet.next()) {
        var id = resultSet.getInt("id");
        var username = resultSet.getString("username");
        var verified = resultSet.getBoolean("verified");
        users.add(new User(id, username, verified));
      }
      return users;
    }
  }
}
```

So that, if we needed to change the `dbUrl` for some reason, we need only do that in one place!

```java
package com.corndel.bleeter;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DB { // [!code focus:8]
  static final String dbUrl = "jdbc:sqlite:bleeter.db"; // [!code --]
  static final String dbUrl = "jdbc:sqlite:some-other-file.db"; // [!code ++]

  public static Connection getConnection() throws SQLException {
    return DriverManager.getConnection(dbUrl);
  }
}
```
