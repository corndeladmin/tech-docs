# Models and repositories

<Vimeo id="1008462511" />

We'll need to create the _model_ layer and the _data access layer_. These are
the parts of our application that deal with handling data models and persisiting
data using the database.

## Models

Models are classes that we use to represent data within the application.

```java
package com.bleeter.models;

public class User {
  private final Integer id;
  private String username;
  private boolean verified;

  public User(Integer id, String username, boolean verified) {
    this.id = id;
    this.username = username;
    this.verified = verified;
  }

  // methods...

}
```

## Repositories

Repositories are classes that interact with the database to let us persist,
modify, and delete this data.

```java
package com.bleeter.repositories;

import com.bleeter.models.User;
import com.bleeter.DB;
import java.util.List;

public class UserRepository {
  public static List<User> findAll() {}
  public static User findById(int _id) {}
  public static User create(String username, boolean verified) {}
}
```

The aim is to use our repository like this:

```java
var user = UserRepository.findById(7);
System.out.println(user.getUsername());
```

## Querying for data

We can use our database connection to get data from the database.

```java
public static List<User> findAll() throws Exception {
  var query = "SELECT id, username, verified FROM users";

  try (var connection = DB.getConnection();
      var statement = connection.prepareStatement(query);
      var resultSet = statement.executeQuery();) {

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
```
