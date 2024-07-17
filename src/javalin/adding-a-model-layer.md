# Adding a data access layer

We'll need to create the "Data Access Layer". That is, the part of our application that deals with interacting with the database and data models. 

## Models and Repositories

Models are classes that we use to store data within the application.

```java
package com.corndel.bleeter.models;

public class User {
  private Integer id;
  public String username;
  public boolean verified;

  public User(Integer id, String username, boolean verified) {
    this.id = id;
    this.username = username;
    this.verified = verified;
  }

  public Integer getId() {
    return id;
  }
}
```

Repositories are classes that interact with the database to let us persist, modify, and delete this data.


```java
package com.corndel.bleeter.repositories;

import com.corndel.bleeter.models.User;
import com.corndel.bleeter.DB;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class UserRepository {
  public static List<User> findAll() throws SQLException { 
    var query = "SELECT id, username, verified FROM users";

    try (var connection = DB.getConnection();
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

## Querying with substitutions

JDBC lets us set up _Prepared Statements_. These let us substitute in parameters to our SQL queries.

```java
public static User findById(id) {
  var query = "SELECT id, username, verified FROM users WHERE id = ?"; // [!code highlight:7]
  try (var connection = DB.getConnection();
      var statement = connection.prepareStatement(query)) {
    statement.setInt(1, id)
    try (var resultSet = statement.executeQuery()) {
      if (!resultSet.next()) {
        return null;
      }
      var id = resultSet.getInt("id");
      var username = resultSet.getString("username");
      var verified = resultSet.getBoolean("verified");
      return new User(id, username, verified);
    }
  }
}
```

::: danger

Do not be tempted to interpolate raw arguments into the query string. This opens
you up to SQL injection attacks.

Consider

```java
  User.findById("3; DROP TABLE users;");
```

Always use prepared statements!

:::

## Inserting data

We can use an `INSERT` query with several parameters by putting more `?` and
passing the substitutions in the array:

```java
public static User create(username, verified) {
  var query = "INSERT INTO users (username, verified) VALUES (?, ?) RETURNING *";

}
```

::: info

Note the `RETURNING *`

:::
